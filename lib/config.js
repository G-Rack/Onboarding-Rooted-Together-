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
//   NEXT_PUBLIC_PRO_CHECKOUT_URL      the $88 Creator Pro link, for new creators
//   NEXT_PUBLIC_UPGRADE_CHECKOUT_URL  the $39 upgrade link, for people who already paid $49
export const PRO_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_PRO_CHECKOUT_URL || 'https://buy.stripe.com/aFaeVe4zK2WZ0XV0ae0gw02'
export const UPGRADE_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_UPGRADE_CHECKOUT_URL || 'https://buy.stripe.com/aFaeVe7LWbtv0XV9KO0gw03'
