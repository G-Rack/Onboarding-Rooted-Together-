import { NextResponse } from 'next/server';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@/lib/config';

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const KINDS = ['demo', 'access', 'feedback'];
const AUDIENCES = ['leader', 'creator'];

// Trims, removes control characters and cuts to a safe length. Empty becomes null.
const clip = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n) || null;

// Saves a request from the private /founding page. The founding_interest table only lets the public add
// rows, never read them, so you read the requests in the Supabase dashboard. Someone who asks for access
// also gets the founding members WhatsApp group link back (FOUNDING_WHATSAPP_URL, set in Vercel).
export async function POST(request) {
  let body = {};
  try { body = await request.json(); } catch { /* handled below */ }
  // Hidden field that real people leave empty: if it is filled in, quietly pretend it worked.
  if (body?.website) return NextResponse.json({ ok: true });

  const kind = KINDS.includes(body?.kind) ? body.kind : null;
  const email = String(body?.email || '').trim().toLowerCase();
  const name = clip(body?.name, 120);
  const message = clip(body?.message, 2000);
  if (!kind) return NextResponse.json({ ok: false, error: 'Something went wrong. Please refresh and try again.' }, { status: 400 });
  if (!name) return NextResponse.json({ ok: false, error: 'Please tell us your name.' }, { status: 400 });
  if (email.length < 5 || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (kind === 'feedback' && !message) {
    return NextResponse.json({ ok: false, error: 'Please share a few words with us.' }, { status: 400 });
  }

  const row = {
    kind,
    audience: AUDIENCES.includes(body?.audience) ? body.audience : null,
    name,
    email,
    phone: clip(body?.phone, 40),
    organisation: clip(body?.organisation, 160),
    message,
    source: clip(body?.source, 100),
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/founding_interest`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
      cache: 'no-store',
    });
    if (res.ok) {
      const groupUrl = kind === 'access' ? (process.env.FOUNDING_WHATSAPP_URL || '').trim() : '';
      return NextResponse.json({ ok: true, groupUrl: /^https:\/\//.test(groupUrl) ? groupUrl : '' });
    }
  } catch { /* fall through to the error below */ }
  return NextResponse.json({ ok: false, error: 'Something went wrong. Please try again.' }, { status: 502 });
}
