# Smart Quotes LLC Website

Premium lead-generation website for **Smart Quotes LLC**, aligned to the approved visual reference wireframe.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Montserrat (headings) + Poppins (body)
- Pluggable CRM adapter (in-memory by default)

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

## Conversion path

Visitor → select service → request free quote → lead capture (CRM) → confirmation → separate vacation-stay offer link → appointment follow-up.

## Brand

- Primary purple: `#5A2CFF`
- Black / white / gray system per wireframe
- SQ logo component is replaceable (`src/components/Logo.tsx`)
- Phone `(888) 123-4567` is a placeholder
- No invented partner pricing, speeds, or guaranteed vacation claims

## Key routes

`/`, `/services`, `/services/*`, `/quote`, `/thank-you`, `/about`, `/contact`, `/resources`, legal pages.
