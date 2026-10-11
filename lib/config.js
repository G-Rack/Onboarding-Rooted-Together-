// Central place for values that change when the domain is chosen.
export const SITE_NAME = 'Rooted Together'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

// The marketplace and creator dashboard live here.
export const MAIN_SITE_URL = 'https://rootedtogether.club'
export const FOOTER_NOTE = 'rootedtogether.club · Made for the ones who shepherd'

// Stripe Payment Link for the one-time $49 membership. Create it in Stripe, then set
// NEXT_PUBLIC_CHECKOUT_URL (in .env.local and in Vercel). Until it is set, the buttons scroll to the pricing card.
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#pricing'
export const LOGIN_URL = `${MAIN_SITE_URL}/login`
