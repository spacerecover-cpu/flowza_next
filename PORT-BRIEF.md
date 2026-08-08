# Porting the Flowza reposition into the Next.js codebase

## The situation

The single-file site at `/agent/workspace/flowza/` has just been repositioned onto the real
product catalogue, and **it is now the source of truth**. This repo is behind it. Your job is
to bring the repo back into parity for the slice you have been given.

The old positioning — "one platform, eighteen modules, one application with eighteen views into
the same records" — was wrong and is gone. The real positioning:

> **Nine systems. One operating fabric.** Purpose-built AI business operating systems for MEA and
> India, sharing one data layer — customers, inventory and ledger entries flow between systems
> without re-entry.

The nine, in order, with the app each actually runs on:

| # | Product | Subdomain | Tagline |
|---|---------|-----------|---------|
| 1 | Flowza Finance | finance.flowza.ai | Accounting, ERP and payroll on one ledger |
| 2 | Flowza LogisPro | logispro.flowza.ai | Routes, shipments and warehouses, optimised |
| 3 | Flowza Spa Master | spamaster.flowza.ai | Bookings, rosters and loyalty for wellness |
| 4 | Flowza Fleetza | fleetza.flowza.ai | Live tracking, driver scores and maintenance |
| 5 | Flowza QRForge | qr.flowza.ai | Dynamic QR codes with live analytics |
| 6 | Flowza POS | pos.flowza.ai | Point of sale that survives the internet |
| 7 | Flowza Club | club.flowza.ai | Membership, booking and billing for clubs |
| 8 | Flowza RentFlow | rentflow.flowza.ai | Tenant applications, screened and decided |
| 9 | Flowza PMS | pms.flowza.ai | Rate, calibrate and pay on one system |

**Never** claim the nine are one application, one deployment, or modules of a platform. Nine
separate apps that share a data layer — that is the whole claim, and it is checkable.

## Where the truth lives

- **Rendered site**: `/agent/workspace/flowza/index.html` (assembled — read this to see final markup)
- **Sources**: `/agent/workspace/flowza/parts/*.html`, one file per route
- **Interaction layer**: `/agent/workspace/flowza/parts/99-scripts.html` and `parts/js/*.js`
- **Product catalogue**: `/agent/workspace/flowza/CATALOG.md`

Port the *content and structure* faithfully. Do not redesign, do not "improve" the copy, and do
not drop a set piece because it is fiddly — the set pieces are the reason the pages exist.

## Repo conventions — follow these exactly

- Next.js 15 App Router, TypeScript strict, **server components by default**.
  Add `'use client'` only to a component that genuinely needs state or an event handler.
- One route per directory: `src/app/products/<slug>/page.tsx`.
- Every `page.tsx` exports a `metadata: Metadata` whose `title` and `description` match the
  route's entry in the `META` object in `parts/99-scripts.html`. Copy them verbatim.
- Internal links are `next/link`: `<Link href="/products/finance">`. Never a bare `<a href="/…">`.
  External links (the app subdomains) stay `<a>` with `target="_blank" rel="noopener noreferrer"`.
- Page-local CSS goes at the **end of `src/app/globals.css`**, under a comment banner naming the
  page. There is no CSS-in-JS and no Tailwind — the design system is CSS custom properties, on
  purpose. Class names must stay prefixed per page exactly as they are in the site.
- Static data goes in `src/lib/data/<name>.ts` as a typed, exported `const`. Export the interface
  too. Data does not live inside components.
- Reuse the existing primitives rather than re-implementing them:
  `Chapter` (props: `variant="raised"|"instrument"`, `net`, `style`), `Wrap` (`tight`), `Cols`,
  `Eyebrow`, `Stat`, `Tag`, `Chip`, `Panel`, `Card`, `Table`, `KeylineList`, `FAQ`,
  `RelatedLinks`, `CodeBlock`, `CountUp`, `Reveal`, `Button`.
  Read a couple before you write anything.
- Shared product chrome is already built: `src/components/ProductChrome.tsx` exports
  `AppLink`, `ProductBadges`, `Metrics` and `Quote`. Use them; do not write your own.
  `Quote` is only ever rendered where a real cleared quote exists.
- `@/` is the path alias for `src/`.

## Interaction

Site JavaScript is ES5 inside one IIFE. In the repo the equivalent is a **client component with
`useState`**. Port behaviour, not implementation: an `is-on` class toggle becomes conditional
`className`, a `select(i)` function becomes `const [sel, setSel] = useState(0)`.

Keep `aria-pressed`, `aria-live`, `role="img"` + full-sentence `aria-label`, `<caption className="sr">`
on tables, and the `outline-offset:-3px` focus rules. The site passed an accessibility audit and
the repo must not regress it.

Where selection state has to span two chapters, use a small React context provider scoped to that
page — there is precedent in the repo; look for it before inventing a new pattern.

## Validation — the toolchain is limited, so be careful

The npm registry is **blocked** in this sandbox. There is no `npm install`, no `tsc`, no
`next build`, no ESLint. That means nothing catches a typo for you. Before you report done:

1. `node scripts/check-imports.mjs` — must pass. It walks `src/` and asserts every relative and
   `@/`-aliased import resolves to a real file.
2. Re-read your own JSX for unclosed tags, `class=` instead of `className=`, `for=` instead of
   `htmlFor=`, unescaped `'` in text (use `&rsquo;` or `{"'"}`), and inline `style` strings that
   should be objects (`style={{ marginTop: 'var(--s5)' }}`).
3. Check every `import` you added actually exists and is actually used.
4. SVG attributes are camelCase in JSX: `strokeWidth`, `strokeDasharray`, `strokeLinecap`,
   `clipPath`, `fillOpacity`, `viewBox`, `preserveAspectRatio`. `class` on an SVG child is
   `className`. This is the single most common porting error — grep your file for `stroke-` and
   `-width` before finishing.

## Voice

British spelling in prose; verbatim in quotes. No invented numbers, customers or certifications.
Banned: Revolutionize, Unlock, Empower, Transform, Cutting edge, seamless, leverage, world-class.
