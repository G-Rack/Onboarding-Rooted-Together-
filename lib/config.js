// Central place for values that change when the domain is chosen.
export const SITE_NAME = 'Rooted Together'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// The marketplace and creator dashboard live here.
export const MAIN_SITE_URL = 'https://rootedtogether.club'
export const FOOTER_NOTE = 'rootedtogether.club · Made for the ones who shepherd'

// Stripe Payment Link for the one-time $49 membership. Create it in Stripe, then set
// NEXT_PUBLIC_CHECKOUT_URL (in .env.local and in Vercel). The default below is the LIVE link; set the env variable to override it.
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://buy.stripe.com/aFa8wQ0ju4139uraOS0gw01'
export const LOGIN_URL = `${MAIN_SITE_URL}/login`

// Where "Take the pledge and begin" sends an invited creator (the sign-up page on the main site).
export const PLEDGE_NEXT_URL = `${MAIN_SITE_URL}/login?tab=signup`

// Creator Pro Payment Links. Create them in Stripe, then set these in .env.local and in Vercel.
// While a link is empty, its button shows "opens soon" instead of a broken link.
//   NEXT_PUBLIC_PRO_CHECKOUT_URL      the $88 first-year Creator Pro link ($49 once + $39 a year), for new creators
//   NEXT_PUBLIC_UPGRADE_CHECKOUT_URL  the $39-a-year upgrade link, for people who already paid $49
export const PRO_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_PRO_CHECKOUT_URL || 'https://buy.stripe.com/5kQ00k8Q0fJLayv4qu0gw05'
export const UPGRADE_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_UPGRADE_CHECKOUT_URL || 'https://buy.stripe.com/4gMeVeaY8cxzgWTg9c0gw04'

// The coming-soon lock (see lib/siteGate.js and proxy.js). While SITE_LAUNCHED is false, visitors only
// see the coming-soon page. On launch day change it to true and push; the whole site opens.
// You get in before then by tapping the logo five times and typing the secret code, which is the
// SITE_ACCESS_CODE environment variable in Vercel (the same code as the marketplace).
export const SITE_LAUNCHED = false

// Shown on the coming-soon page. Leave a link empty to hide its button.
export const SOCIAL_LINKS = { instagram: '', tiktok: '' }

// The email sign-up on the coming-soon page saves to the shared Supabase project (public anon key).
export const SUPABASE_URL = 'https://ethrhogtyebqndeyytqd.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0aHJob2d0eWVicW5kZXl5dHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MjE1MTIsImV4cCI6MjEwMzk5NzUxMn0.5VYHM6swun4gNrsqg7FwLS0dyG44bQtV2EteUt7Y1Bc';
