// Central place for values that change when the domain is chosen.
export const SITE_NAME = 'Rooted Together'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// The marketplace and creator dashboard live here.
export const MAIN_SITE_URL = 'https://rootedtogether.club'
export const FOOTER_NOTE = 'rootedtogether.club · Made for the ones who shepherd'

// Stripe Payment Link for the one-time $49 membership. Create it in Stripe, then set
// NEXT_PUBLIC_CHECKOUT_URL (in .env.local and in Vercel). The default below is the current link; set the env variable to override it (for example when you switch to the live link).
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://buy.stripe.com/test_8x24gAc9Q1Yl014gNXgQE00'
export const LOGIN_URL = `${MAIN_SITE_URL}/login`

// Where "Take the pledge and begin" sends an invited creator (the sign-up page on the main site).
export const PLEDGE_NEXT_URL = `${MAIN_SITE_URL}/login?tab=signup`
