# ACTS Website

Marketing + informational site for **Achieving Community Tasks Successfully (ACTS)**, Houston, TX.
Built with Next.js (App Router) + TypeScript + Tailwind CSS v4. Every page is statically generated.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

Deploy: push to Vercel (zero config) or any host that runs `next start`.

## Editing content (no code needed)

All copy and data live in `content/*.json`:

| File | What it controls |
|---|---|
| `site.json` | Org name, contact info, nav links, donate link, social links |
| `home.json` | Home hero, areas of work, impact stats, map cards, donation copy |
| `donation.json` | Donation amounts and the payment processor URL |
| `about.json` | About page sections |
| `programs.json` | Programs hub, garden + food resource directory, 4-H fields, STEAM, Ambassadors |
| `projects.json` | Key Initiatives |
| `air-quality.json` | Dashboard readings, map/chart embeds, stations, explainer, downloads |
| `events.json` / `news.json` | Event and news listings |
| `funders.json` | For Funders page, impact stats, documents |

### The placeholder rule

The site never shows invented numbers, dates, partners, or outcomes. Any value left as `null`
(or an empty list) renders the shared `<Placeholder>` component with one of the approved strings:
`DATA COMING SOON`, `[INSERT VERIFIED IMPACT STATISTIC]`, `[INSERT MAP EMBED]`,
`[INSERT PROGRAM REGISTRATION LINK]`, or `--`. To publish a real value, replace the `null`
with the verified value. Examples:

- **Impact stat:** `{ "label": "Programs", "value": "12" }`
- **Map:** set `embedSrc` (iframe URL) and optionally `href` (full-screen link) in `home.json`
- **Donations:** set `processorUrl` in `donation.json`; "Give Now" forwards `?amount=&recurring=`
- **Photos:** put images in `public/images/` and set `"image": "/images/garden.jpg"`
- **Event:** add to `events.json` →
  `{ "id": "garden-day", "date": "…", "type": "Community", "title": "…", "location": "…", "description": "…", "registrationUrl": null }`
- **News:** add to `news.json` →
  `{ "id": "…", "category": "Health", "headline": "…", "excerpt": "…", "date": "…", "image": null, "url": null }`

### Contact form

No form processor is configured: **SEND MESSAGE** opens the visitor's email app addressed to the
ACTS email. To use a form service later, edit `onSubmit` in `app/contact/ContactForm.tsx`.

## Structure

```
app/          routes (one folder per page; /youth redirects to /programs/youth)
components/   shared UI: Nav, Footer, Hero, Placeholder, StatBlock, MapCard, ProgramCard,
              DonationWidget, EventCard, NewsCard, FunderCard, ProcessFlow, PillarGrid,
              FAQAccordion, FilterBar, Section, ImageSlot, Button, Icon, Logo
content/      editable JSON content
lib/content.ts typed access to the JSON
```

Design tokens (colors, Oswald / Libre Franklin / Space Mono) are defined in `app/globals.css`.
The logo is a text wordmark (`components/Logo.tsx`) until the final logo file is supplied.
