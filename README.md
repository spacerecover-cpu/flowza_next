# FlowZa — marketing site

The FlowZa marketing site, as a Next.js 15 App Router application. TypeScript in strict
mode, server components by default, and a design system built out of CSS custom properties.

This repo is a port. The source of truth is the single-file site at `../flowza/`
(`index.html`, assembled from `parts/*.html`); when the two disagree, the single-file site
is right and this repo is behind.

## What FlowZa AI is, and the claim the site makes

FlowZa AI is **nine specialised AI cloud applications** for the Middle East, Africa and
India. Each runs as its own application on its own subdomain, **holds its own data in its
own database**, has its own release train, and carries its own subscription and its own
pricing. They belong to one ecosystem and are built to a common security and compliance
standard. That is the whole of what they have in common.

> **Nine cloud applications. One trusted platform.**
>
> Choose only the applications your business needs.

**Never** write copy that claims, or implies, any of the following. All of them are false:

- a shared data layer, shared records, or a shared/unified database
- an "operating fabric", or the nine being one system, one application or one deployment
- one definition of a customer, one copy of the data, or one row across applications
- data flowing between applications automatically — no re-entry, zero exports, no re-keying
- one licence covering the nine, or pricing per person rather than per application
- "all nine included", "everything in Growth", or any bundle price

An earlier version of this repo said all of those things, and removing them is what most of
the current content exists to carry. If you find a surviving reference to a shared data
layer, an operating fabric, one licence, or eighteen modules, it is a bug.

**What is true and safe to write:** each application is complete on its own; a business can
buy one and never buy another; applications expose their own APIs, so a customer can build
a deliberate integration between two of them if they want one; the same security model and
the same India/Gulf statutory expertise are applied in each.

Within a single application, "the same records" is fine and often the point — Finance
really does post sales, purchases, payroll and inventory to one ledger. The rule is about
claims that cross an application boundary.

### The nine

| # | Product | Route | App subdomain | Tagline |
|---|---------|-------|---------------|---------|
| 1 | FlowZa Finance | `/products/finance` | finance.flowza.ai | Accounting, ERP and payroll on one ledger |
| 2 | FlowZa LogisPro | `/products/logispro` | logispro.flowza.ai | Routes, shipments and warehouses, optimised |
| 3 | FlowZa Spa Master | `/products/spamaster` | spamaster.flowza.ai | Bookings, rosters and loyalty for wellness |
| 4 | FlowZa Fleetza | `/products/fleetza` | fleetza.flowza.ai | Live tracking, driver scores and maintenance |
| 5 | FlowZa QRForge | `/products/qrforge` | qr.flowza.ai | Dynamic QR codes with live analytics |
| 6 | FlowZa POS | `/products/pos` | pos.flowza.ai | Point of sale that survives the internet |
| 7 | FlowZa Club | `/products/club` | club.flowza.ai | Membership, booking and billing for clubs |
| 8 | FlowZa RentFlow | `/products/rentflow` | rentflow.flowza.ai | Tenant applications, screened and decided |
| 9 | FlowZa PMS | `/products/pms` | pms.flowza.ai | Rate, calibrate and pay on one system |

Catalogue order matters. It is the order in `src/lib/data/systems.ts`, the order in the
nav, the order in the sitemap, and the order the `systemIndexes` in
`src/lib/data/industries.ts` index into. Do not re-sort it alphabetically.

### The other routes

| Route | What it is |
|-------|-----------|
| `/` | Home — the two bad options, the nine applications, AI per application, a day |
| `/platform` | The four pillars, what is common and what is not, per-application APIs, coverage |
| `/solutions` | By function — what finance, operations, revenue and IT each cannot answer |
| `/industries` | By sector — unit of work, binding constraint, and which of the nine to start with |
| `/industries/{retail,logistics,manufacturing,services,construction,healthcare,wellness,public}` | Eight sector deep pages |
| `/enterprise` | Access, encryption, residency, recovery objectives, assurance status |
| `/pricing` | Three deployment shapes, then per-application pricing links |
| `/company` | How the team works, support coverage, partners, offices |

Twenty-four routes in total, all in the sitemap.

## Design system

There is **no Tailwind and no CSS-in-JS**, on purpose. The whole system is CSS custom
properties in one stylesheet, `src/app/globals.css`:

- **Tokens** at the top — colour, type scale, spacing (`--s1`…`--s9`), motion, edges.
- **Primitives** below that — layout (`.wrap`, `.cols`, `.c-4`), surfaces (`.chapter`,
  `.panel`, `.card`), typography (`.d-xl`…`.d-s`, `.lede`, `.small`, `.tiny`, `.mono`),
  buttons, focus, and the `.rv` reveal-on-scroll classes.
- **Page-local blocks** after that, each under a banner comment naming the page or product
  and listing its class prefixes. Class names are prefixed per page (`.flz*` for Fleetza,
  `.qf*` for QRForge, `.sm*` for Spa Master, `.clb*` for Club, `.pms*` for PMS, and so on)
  so blocks stay independent and deletable.

New page CSS goes at the **end** of the file under a new banner. Keep the prefix.

One trap worth knowing: a banner comment must not contain the two characters that end a CSS
comment. A banner that listed classes as `.appt*/.bdetail` terminated its own comment early
and silently swallowed the rule that followed it. `node scripts/check-css.mjs` now catches
exactly that, plus brace imbalance.

### Components

`src/components/` holds ~96 components. The shared primitives — `Chapter`, `Wrap`, `Cols`,
`Eyebrow`, `Stat`, `Tag`, `Chip`, `Panel`, `Card`, `Table`, `KeylineList`, `FAQ`,
`RelatedLinks`, `CodeBlock`, `CountUp`, `Reveal`, `Button` — should be reused rather than
re-implemented. Product pages share chrome from `ProductChrome.tsx` (`AppLink`,
`ProductBadges`, `Metrics`, `Quote`); `Quote` is only ever rendered where a real cleared
quote exists.

Everything else is a **set piece**: the one diagram or instrument that makes a page worth
loading. They are the reason the pages exist, and they are all hand-rolled inline SVG plus
CSS grid. **There is no chart library** — no D3, no Recharts, nothing. Geometry is computed
in `src/lib/data/*.ts` and rendered as literal `<path>` and `<rect>`. If a set piece needs
new numbers, they belong in the data module, not in the component.

Server components by default. `'use client'` goes only on a component that genuinely needs
state or an event handler; interaction ported from the site's ES5 IIFE becomes `useState`,
not a DOM class toggle. Where selection has to span two chapters, a small page-scoped React
context does it (see `SpaceTreemap`, `LaneQuadrant`, `CapacityProfile`).

### Data

Static content lives in `src/lib/data/<name>.ts` as a typed, exported `const`, with the
interface exported alongside it. Data does not live inside components. `systems.ts` carries
an invariant worth respecting: the exchange graph is symmetric and hand-checked, so
exchanges are added and removed in pairs.

### Accessibility

The single-file site passed an audit and this repo must not regress it. That means
`aria-pressed` on toggles, `aria-live` on regions that update, `role="img"` plus a
full-sentence `aria-label` on every meaningful SVG, `<caption className="sr">` on every
table, exactly one `h1` per route with no skipped levels, and the `outline-offset: -3px`
focus rules for controls inside overflow-clipped containers.

## Layout

```
src/
  app/
    layout.tsx          root: fonts, JSON-LD @graph, header/footer, viewport
    globals.css         the entire design system, ~3,000 lines
    page.tsx            home
    <route>/page.tsx    one directory per route
    sitemap.ts robots.ts
  components/           primitives, product chrome, and the set pieces
  lib/
    data/               typed static content, one module per subject
    hooks/              useReducedMotion
    qr.ts               QR matrix generation for the QRForge set piece
scripts/
  check-imports.mjs     every relative and @/ import resolves
  check-css.mjs         globals.css comments and braces balance
  check-jsx.mjs         JSX/SVG attribute casing, headings, captions, svg labels
```

`@/` is the path alias for `src/`.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

### Validating without a toolchain

The npm registry is blocked in the build sandbox, so there is no `npm install`, no `tsc`,
no `next build` and no ESLint there. Nothing catches a typo for you. The three scripts
above are the substitute and they run on bare Node:

```bash
node scripts/check-imports.mjs
node scripts/check-css.mjs
node scripts/check-jsx.mjs
```

They are heuristics, not a compiler. `check-jsx.mjs` in particular reports straight
apostrophes inside what look like JSX text nodes, and it has false positives on string
literals in ordinary expressions — read each hit before changing anything. Passing all
three is necessary, not sufficient; re-read your own JSX for unclosed tags as well.

## Known gaps

Honest list. None of these are subtle, and all of them are open.

- **No route boundaries.** There is no `not-found.tsx`, no `error.tsx`, no `global-error.tsx`
  and no `loading.tsx` anywhere in `src/app`. A bad URL gets the framework default, and an
  exception in a set piece takes down the page rather than a section of it.
- **No favicon and no OG image.** There is no `public/` directory at all — no `favicon.ico`,
  no `icon.png`, no `opengraph-image`. `openGraph` metadata in `layout.tsx` declares a title
  and description with no image behind them, so every share card renders bare.
- **No tests.** No unit tests, no component tests, no end-to-end tests, no test runner in
  `package.json`. The `scripts/check-*.mjs` files are static checks, not tests — they cannot
  tell you a set piece renders the right geometry, only that it parses.
- **Lighthouse unmeasured.** Performance, accessibility and SEO scores have never been
  measured for this repo, because the registry is unreachable in the build sandbox and the
  app has therefore never been built or served here. The accessibility work is ported from
  an audit of the single-file site and verified by inspection only.
- **`Button` and `Chip` are unused.** Both are exported primitives that nothing imports.
  Neither carries `'use client'`, so the first caller that passes `onClick` from a server
  component will fail at render. Add the directive before using them.
- **`.dgm .lbl-b`** is a surviving CSS rule with no element. Harmless, but it is dead.
