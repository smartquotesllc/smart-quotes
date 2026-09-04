# Smart Quotes LLC

Lead-generation and appointment-conversion website for **Smart Quotes LLC**.

Visitors explore three service pathways — Merchant Services, Xfinity Residential, and Comcast Business — then submit a request-for-quote (RFQ). After a successful RFQ, a separate vacation-stay offer communication may be queued (subject to official offer terms).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Inter font
- Pluggable in-memory CRM adapter (`src/lib/crm.ts`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build
npm start
```

## Key routes

| Path | Purpose |
|------|---------|
| `/` | Homepage (hero, services, how it works, vacation teaser, RFQ, about) |
| `/confirmation` | Post-RFQ confirmation |
| `/api/rfq` | `POST` quote intake (validation, CRM, vacation trigger, rate limit) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/vacation-terms` | Vacation offer terms (no invented benefits) |
| `/sitemap.xml` / `/robots.txt` | SEO |

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata, sitemap). Default `https://smartquotesllc.com` |
| `VACATION_OFFER_ENABLED` | Set to `false` to disable vacation offer queueing |

## Brand notes

- Exact phrases: **Comcast Business** (not “Xfinity Business”), **Xfinity Residential**
- Do not invent pricing, speeds, or vacation guarantees in UI copy
- `Logo` (`src/components/Logo.tsx`) is a replaceable SQ mark + wordmark
- Hero uses floating service cards; middle card is lavender
- Palette: `#171322`, `#4D1FA8`, `#6D35D8`, `#F3EFFF`, `#F8F7FA`, `#FFFFFF`, `#686273`
