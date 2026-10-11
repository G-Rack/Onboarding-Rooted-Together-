# Rooted Together: creator onboarding site

The public landing page for spiritual mothers, pastors and leaders. A creator pays a one-time $49 through Stripe, then creates their account on the main site and sets up their storefront.

Next.js 16 (app router), React 19, no CSS framework. Fonts are bundled with `@fontsource`, so nothing loads from Google at runtime.

## Run it

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

## The payment link

Every "Join for $49" / "Create your storefront" button goes to `NEXT_PUBLIC_CHECKOUT_URL`. Until it is set, the buttons just scroll to the pricing card.

1. In Stripe, open Payment Links and create one: product "Rooted Together Creator Membership", $49, one-time. Use test mode first.
2. Under After payment, choose "Don't show confirmation page" and redirect to `https://rootedtogether.club/login?tab=signup`.
3. Copy the link into `.env.local` as `NEXT_PUBLIC_CHECKOUT_URL=...` and into Vercel (Settings, Environment Variables), then redeploy. The value is baked in at build time, so a redeploy is required after changing it.

Note: the link alone does not stop someone creating a creator account without paying. Gating that needs a Stripe webhook on the main site (record paid emails, then allow creator sign-up only for them).

## Where things live

- `components/`: one file per page section (Nav, Hero, Problem, Value, SpiritualFamily, Earn, LeadersNetwork, HowItWorks, Pricing, Join, Footer, StickyCta). Edit the copy right in these files.
- `app/page.js`: the order of the sections.
- `app/layout.js`: page title, description and share preview text.
- `app/globals.css`: hover colours, nav behaviour and the phone-only sticky button.
- `lib/config.js`: site name and URL, footer line, checkout link and login link.

## Deploy on Vercel

Push this folder to GitHub, import it in Vercel (framework Next.js, root directory `./`), add the two variables from `.env.example`, deploy, then add the domain under Settings, Domains.
