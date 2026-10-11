# Rooted Together: creator onboarding site

The public landing page that explains Rooted Together to spiritual mothers, pastors and leaders, shows the one-time $49 membership, and collects applications.

Next.js 16 (app router), React 19, no CSS framework. Fonts are bundled with `@fontsource`, so nothing loads from Google at runtime.

## Run it

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

Copy `.env.example` to `.env.local` and fill it in (a ready `.env.local` is already here, and it is git-ignored).

## Where things live

- `components/`: one file per page section (Nav, Hero, Problem, Value, SpiritualFamily, Earn, LeadersNetwork, HowItWorks, Pricing, Apply, Footer, StickyCta). Edit the copy right in these files.
- `app/page.js`: the order of the sections.
- `app/layout.js`: page title, description and share preview text.
- `app/globals.css`: hover colours, nav behaviour and the phone-only sticky button.
- `lib/config.js`: site name, site URL and the footer line. Change these when the new domain is chosen.
- `app/api/apply/route.js`: receives the application form and saves it to the `creator_applications` table in Supabase.

## Applications

Submissions land in the Supabase table `creator_applications` (project `ethrhogtyebqndeyytqd`). The public key can only add rows, never read them. Review them in the Supabase dashboard (Table Editor) and change `status` to `approved`, `declined` or `paid` as you go.

## Deploy on Vercel

1. Push this folder to its own GitHub repo.
2. In Vercel choose Add New, Project, import the repo (framework: Next.js, no settings to change).
3. Add the three environment variables from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
4. Deploy, then in Project Settings, Domains, add the new domain and follow the DNS records Vercel shows.

## Still to do

- The buttons in the "How it works" steps all jump to the application form. Point them at the real sign-up and Stripe steps when the payment flow exists.
- Collecting the $49: a Stripe Payment Link or Checkout session sent to approved applicants is the simplest first version.
- Add a favicon and share image for the new brand if it differs from the main site (`app/icon.png` is copied from the marketplace).
