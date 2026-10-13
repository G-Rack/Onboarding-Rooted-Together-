// Server-side helpers for the invitation-only /chosen page.
// Invitation words live in Supabase (table "invitations", stored as hashes) and are
// checked by the redeem_invitation / check_invitation_token functions, so the words
// never appear in this site's code or in the browser. The anon key below is the same
// public key the marketplace site ships to every browser.
export const SUPABASE_URL = 'https://ethrhogtyebqndeyytqd.supabase.co'
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0aHJob2d0eWVicW5kZXl5dHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MjE1MTIsImV4cCI6MjEwMzk5NzUxMn0.5VYHM6swun4gNrsqg7FwLS0dyG44bQtV2EteUt7Y1Bc'

export const CHOSEN_COOKIE = 'rt_chosen'

export async function rpc(fn, args) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(args),
      cache: 'no-store',
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
