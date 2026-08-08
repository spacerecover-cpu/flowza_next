'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandMark } from '@/components/BrandMark';

/* ------------------------------------------------------------------ CARET */
function Caret() {
  return (
    <svg className="nav__caret" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

/* ------------------------------------------------------------------ MEGA MENUS */
/**
 * The panel shell. `.mega` is `display:none` in the stylesheet and only
 * `.mega.is-open` is shown, so the class is the whole open/closed mechanism —
 * a panel rendered without it is in the DOM at zero height.
 *
 * All four panels stay mounted and hidden rather than mounting on demand, so
 * the `aria-controls` on each nav button always resolves to a real element.
 * `display:none` keeps a closed panel out of the tab order and the
 * accessibility tree, and restarts the `megaIn` animation on each open.
 */
function MegaPanel({
  id,
  label,
  open,
  children,
}: {
  id: string;
  label: string;
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`mega${open ? ' is-open' : ''}`} id={id} role="region" aria-label={label}>
      {children}
    </div>
  );
}

/**
 * Nine products in one wide 3x3 column, plus the Copilot card. The old
 * "platform modules" column is gone: there are no modules, and the nine are not
 * views of one application.
 */
const PRODUCT_LINKS: { href: string; name: string; tagline: string; icon: React.ReactElement }[] = [
  {
    href: '/products/finance',
    name: 'FlowZa Finance',
    tagline: 'Accounting, ERP and payroll on one ledger',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="12" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 7h14M6 11h5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/logispro',
    name: 'FlowZa LogisPro',
    tagline: 'Routes, shipments and warehouses',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M1.5 5.5h8v7h-8zM9.5 8h4l2.5 2.5v2h-6.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5" cy="14" r="1.4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="13" cy="14" r="1.4" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    href: '/products/spamaster',
    name: 'FlowZa Spa Master',
    tagline: 'Bookings, rosters and loyalty',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 15.5s5.5-3.4 5.5-7A3.2 3.2 0 009 6.6 3.2 3.2 0 003.5 8.5c0 3.6 5.5 7 5.5 7z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/fleetza',
    name: 'FlowZa Fleetza',
    tagline: 'Tracking, driver scores, maintenance',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 12l2-5h10l2 5v3H2z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="5.5" cy="15" r="1.2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="12.5" cy="15" r="1.2" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    href: '/products/qrforge',
    name: 'FlowZa QRForge',
    tagline: 'Dynamic QR codes, live analytics',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2.5" y="2.5" width="5" height="5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="10.5" y="2.5" width="5" height="5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="2.5" y="10.5" width="5" height="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10.5 10.5h5v5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/pos',
    name: 'FlowZa POS',
    tagline: 'Point of sale that survives the internet',
    icon: (
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2.5" y="3" width="13" height="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 15h6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/club',
    name: 'FlowZa Club',
    tagline: 'Membership, booking and billing',
    icon: (
      /* a flag on a green */
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M5 15.5V2.5l8 2.6-8 2.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 15.5h11" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/rentflow',
    name: 'FlowZa RentFlow',
    tagline: 'Tenant applications, screened and decided',
    icon: (
      /* a document with a tick */
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M4 2.5h7l3 3v10H4z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 11l1.8 1.8 3.2-3.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    href: '/products/pms',
    name: 'FlowZa PMS',
    tagline: 'Rate, calibrate and pay on one system',
    icon: (
      /* a bell curve */
      <svg className="mlink__ico" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 14c3.4 0 3.4-9 7-9s3.6 9 7 9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 14h14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

function MegaProducts({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <MegaPanel id="m-products" label="Products" open={open}>
      <div className="mega__inner">
        <div className="mega__col mega__col--nine">
          <p className="mega__title">Nine applications — choose what you need</p>
          <div className="mega__grid mega__grid--3">
            {PRODUCT_LINKS.map((product) => (
              <Link className="mlink" href={product.href} key={product.href} onClick={onClose}>
                {product.icon}
                <span>
                  <span className="mlink__t">{product.name}</span>
                  <span className="mlink__d">{product.tagline}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mega__col">
          <div className="mega__feature">
            <span className="tag tag--ai">AI</span>
            <p style={{ margin: 'var(--s4) 0 var(--s2)', fontSize: '1rem', fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: '-.025em', lineHeight: 1.1 }}>FlowZa Copilot</p>
            <p className="tiny" style={{ marginBottom: 'var(--s4)' }}>
              AI built into the work each application does — routing, scoring, forecasting, invoice reading.
              It acts under your permission model, never above it.
            </p>
            <Link className="btn btn--text" href="/#ai" onClick={onClose}>
              How it works <span className="arw">→</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="mega__foot">
        <div className="mega__foot-in">
          <Link className="qa" href="/platform" onClick={onClose}>
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 7h12M7 1v12" stroke="currentColor" strokeWidth="1.5" /></svg>
            About the platform
          </Link>
          <Link className="qa" href="/#systems" onClick={onClose}>
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="2" width="12" height="10" stroke="currentColor" strokeWidth="1.3" /></svg>
            Compare the nine applications
          </Link>
          <Link className="qa" href="/enterprise" onClick={onClose}>
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 1l5 2v4c0 3-2 5-5 6-3-1-5-3-5-6V3l5-2z" stroke="currentColor" strokeWidth="1.3" /></svg>
            Security overview
          </Link>
        </div>
      </div>
    </MegaPanel>
  );
}

function MegaSolutions({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <MegaPanel id="m-solutions" label="Solutions" open={open}>
      <div className="mega__inner">
        <div className="mega__col mega__col--wide">
          <p className="mega__title">By industry</p>
          <div className="mega__grid">
            <Link className="mlink" href="/industries/retail" onClick={onClose}><span><span className="mlink__t">Retail &amp; Hospitality</span><span className="mlink__d">Space, labour and channels</span></span></Link>
            <Link className="mlink" href="/industries/logistics" onClick={onClose}><span><span className="mlink__t">Logistics &amp; Freight</span><span className="mlink__d">Lane portfolio and cash cycle</span></span></Link>
            <Link className="mlink" href="/industries/manufacturing" onClick={onClose}><span><span className="mlink__t">Manufacturing</span><span className="mlink__d">Stores, fleet and the ledger</span></span></Link>
            <Link className="mlink" href="/industries/services" onClick={onClose}><span><span className="mlink__t">Professional Services</span><span className="mlink__d">Billing, payroll and appraisals</span></span></Link>
            <Link className="mlink" href="/industries/construction" onClick={onClose}><span><span className="mlink__t">Construction</span><span className="mlink__d">Plant, stores and payroll</span></span></Link>
            <Link className="mlink" href="/industries/wellness" onClick={onClose}><span><span className="mlink__t">Wellness &amp; Beauty</span><span className="mlink__d">Retention and lifetime value</span></span></Link>
            <Link className="mlink" href="/industries/public" onClick={onClose}><span><span className="mlink__t">Public Sector</span><span className="mlink__d">Housing applications and fleet</span></span></Link>
          </div>
          <Link className="btn btn--text" href="/industries" onClick={onClose} style={{ marginTop: 'var(--s5)' }}>
            Compare all seven <span className="arw">→</span>
          </Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">By function</p>
          <Link className="mlink" href="/solutions/finance" onClick={onClose}><span><span className="mlink__t">Office of the CFO</span><span className="mlink__d">Close, controls, forecast</span></span></Link>
          <Link className="mlink" href="/solutions/operations" onClick={onClose}><span><span className="mlink__t">Operations</span><span className="mlink__d">Throughput and exceptions</span></span></Link>
          <Link className="mlink" href="/solutions/revenue" onClick={onClose}><span><span className="mlink__t">Revenue teams</span><span className="mlink__d">Pipeline to cash</span></span></Link>
          <Link className="mlink" href="/solutions/it-security" onClick={onClose}><span><span className="mlink__t">IT &amp; Security</span><span className="mlink__d">Consolidation and control</span></span></Link>
          <Link className="btn btn--text" href="/solutions" onClick={onClose} style={{ marginTop: 'var(--s5)' }}>
            All functions <span className="arw">→</span>
          </Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">Move from</p>
          <Link className="mlink" href="/solutions" onClick={onClose}><span><span className="mlink__t">A legacy ERP</span><span className="mlink__d">Parallel run, then cutover</span></span></Link>
          <Link className="mlink" href="/solutions" onClick={onClose}><span><span className="mlink__t">A stack of point tools</span><span className="mlink__d">Consolidate module by module</span></span></Link>
          <Link className="mlink" href="/solutions" onClick={onClose}><span><span className="mlink__t">Spreadsheets</span><span className="mlink__d">Import and structure</span></span></Link>
        </div>
      </div>
    </MegaPanel>
  );
}

function MegaPlatform({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <MegaPanel id="m-platform" label="Platform" open={open}>
      <div className="mega__inner">
        <div className="mega__col">
          <p className="mega__title">The platform</p>
          <Link className="mlink" href="/platform#schema" onClick={onClose}><span><span className="mlink__t">Independent by design</span><span className="mlink__d">What is common, what is not</span></span></Link>
          <Link className="mlink" href="/platform" onClick={onClose}><span><span className="mlink__t">The four pillars</span><span className="mlink__d">How the ecosystem is built</span></span></Link>
          <Link className="mlink" href="/platform#api" onClick={onClose}><span><span className="mlink__t">Developer API</span><span className="mlink__d">One per application you hold</span></span></Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">Intelligence</p>
          <Link className="mlink" href="/#ai" onClick={onClose}><span><span className="mlink__t">AI in each application</span><span className="mlink__d">Built into the job it does</span></span></Link>
          <Link className="mlink" href="/#ai" onClick={onClose}><span><span className="mlink__t">Agents</span><span className="mlink__d">Work that runs itself</span></span></Link>
          <Link className="mlink" href="/#ai" onClick={onClose}><span><span className="mlink__t">Forecasting</span><span className="mlink__d">Demand, cash, churn</span></span></Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">Operate</p>
          <Link className="mlink" href="/enterprise#access" onClick={onClose}><span><span className="mlink__t">Access and identity</span><span className="mlink__d">SSO, SCIM, roles, break-glass</span></span></Link>
          <Link className="mlink" href="/enterprise#data" onClick={onClose}><span><span className="mlink__t">Data and residency</span><span className="mlink__d">Encryption, isolation, backups</span></span></Link>
          <Link className="mlink" href="/enterprise#assurance" onClick={onClose}><span><span className="mlink__t">Availability and assurance</span><span className="mlink__d">Objectives and certification status</span></span></Link>
        </div>
        <div className="mega__col">
          <p className="mega__title">Connect</p>
          <Link className="mlink" href="/#integrations" onClick={onClose}><span><span className="mlink__t">Integrations</span><span className="mlink__d">Banks, tax, carriers, email</span></span></Link>
          <Link className="mlink" href="/#deployment" onClick={onClose}><span><span className="mlink__t">Migration</span><span className="mlink__d">Model, migrate, parallel run</span></span></Link>
          <Link className="mlink" href="/platform#api" onClick={onClose}><span><span className="mlink__t">Events and webhooks</span><span className="mlink__d">Streams out of the platform</span></span></Link>
        </div>
      </div>
    </MegaPanel>
  );
}

function MegaDevs({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <MegaPanel id="m-devs" label="Developers" open={open}>
      <div className="mega__inner">
        <div className="mega__col mega__col--wide">
          <p className="mega__title">Build on any application</p>
          <Link className="mlink" href="/platform#api" onClick={onClose}><span><span className="mlink__t">REST and GraphQL</span><span className="mlink__d">The same conventions in every application</span></span></Link>
          <Link className="mlink" href="/platform#api" onClick={onClose}><span><span className="mlink__t">Custom objects and functions</span><span className="mlink__d">Extend the application you hold</span></span></Link>
          <Link className="mlink" href="/enterprise#access" onClick={onClose}><span><span className="mlink__t">Permissions and tenant isolation</span><span className="mlink__d">Enforced inside every application</span></span></Link>
          <Link className="btn btn--text" href="/platform" onClick={onClose} style={{ marginTop: 'var(--s5)' }}>About the platform <span className="arw">→</span></Link>
        </div>
        <div className="mega__col">
          <div className="mega__feature">
            <p className="mono tiny" style={{ color: 'var(--slate-2)', marginBottom: 'var(--s3)' }}>
              GET pos.flowza.ai/v1/customers/:id
            </p>
            <p className="tiny">
              Each application serves its own API over its own records, with its own credentials — and the
              same conventions across the nine.
            </p>
          </div>
        </div>
      </div>
    </MegaPanel>
  );
}

/* ------------------------------------------------------------------ MOBILE NAV */
function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`m-nav${open ? ' is-open' : ''}`} id="mNav">
      <details className="m-group">
        <summary>Products<span aria-hidden="true">+</span></summary>
        <div className="m-group__body">
          {PRODUCT_LINKS.map((product) => (
            <Link className="mlink" href={product.href} key={product.href} onClick={onClose}>
              <span className="mlink__t">{product.name}</span>
            </Link>
          ))}
        </div>
      </details>
      <details className="m-group">
        <summary>Platform<span aria-hidden="true">+</span></summary>
        <div className="m-group__body">
          <Link className="mlink" href="/platform" onClick={onClose}><span className="mlink__t">How the nine connect</span></Link>
          <Link className="mlink" href="/platform#api" onClick={onClose}><span className="mlink__t">Developer API</span></Link>
          <Link className="mlink" href="/#ai" onClick={onClose}><span className="mlink__t">AI and agents</span></Link>
          <Link className="mlink" href="/#integrations" onClick={onClose}><span className="mlink__t">Integrations</span></Link>
        </div>
      </details>
      <details className="m-group">
        <summary>Solutions<span aria-hidden="true">+</span></summary>
        <div className="m-group__body">
          <Link className="mlink" href="/industries" onClick={onClose}><span className="mlink__t">By industry</span></Link>
          <Link className="mlink" href="/solutions" onClick={onClose}><span className="mlink__t">By function</span></Link>
          <Link className="mlink" href="/solutions" onClick={onClose}><span className="mlink__t">Moving from a legacy ERP</span></Link>
        </div>
      </details>
      <div style={{ display: 'grid', gap: '2px', paddingTop: 'var(--s4)' }}>
        <Link className="mlink" href="/enterprise" onClick={onClose}><span className="mlink__t">Enterprise</span></Link>
        <Link className="mlink" href="/pricing" onClick={onClose}><span className="mlink__t">Pricing</span></Link>
        <Link className="mlink" href="/company" onClick={onClose}><span className="mlink__t">Company</span></Link>
      </div>
      <Link className="btn btn--primary" href="/pricing" onClick={onClose} style={{ marginTop: 'var(--s5)', width: '100%', justifyContent: 'center' }}>
        Book a walkthrough
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ HEADER */
export function SiteHeader() {
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const closeAll = useCallback(() => {
    setOpenMega(null);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpenMega(null);
    setMobileOpen(false);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Escape key
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (openMega) setOpenMega(null);
        if (mobileOpen) setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [openMega, mobileOpen]);

  function toggleMega(id: string) {
    setOpenMega(prev => (prev === id ? null : id));
  }

  const isCurrentPage = (path: string) => pathname === path;

  // Tabbing out of an open panel closes it. `relatedTarget` is null when focus
  // leaves the document entirely (browser chrome, another window) — leave the
  // panel alone in that case, so returning to the tab finds it as it was.
  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    const next = e.relatedTarget as Node | null;
    if (next && !e.currentTarget.contains(next)) setOpenMega(null);
  }

  return (
    <header className={`nav${openMega ? ' is-open' : ''}`} id="nav" ref={navRef} onBlur={handleBlur}>
      <div className="nav__bar">
        <Link className="brand" href="/" aria-label="FlowZa home">
          <BrandMark />
          <span className="brand__word">FlowZa</span>
          <span className="brand__sup">AI</span>
        </Link>

        <nav className="nav__menu" aria-label="Primary">
          {(
            [
              { id: 'm-products', label: 'Products' },
              { id: 'm-solutions', label: 'Solutions' },
              { id: 'm-platform', label: 'Platform' },
              { id: 'm-devs', label: 'Developers' },
            ] as const
          ).map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="nav__btn"
              data-mega={id}
              aria-expanded={openMega === id}
              aria-controls={id}
              onClick={() => toggleMega(id)}
              onMouseEnter={() => {
                if (openMega && openMega !== id) setOpenMega(id);
              }}
            >
              {label}
              <Caret />
            </button>
          ))}
          <Link
            className="nav__btn"
            href="/enterprise"
            aria-current={isCurrentPage('/enterprise') ? 'page' : undefined}
          >
            Enterprise
          </Link>
          <Link
            className="nav__btn"
            href="/pricing"
            aria-current={isCurrentPage('/pricing') ? 'page' : undefined}
          >
            Pricing
          </Link>
          <Link
            className="nav__btn"
            href="/company"
            aria-current={isCurrentPage('/company') ? 'page' : undefined}
          >
            Company
          </Link>
        </nav>

        {/* No sign-in link. The nine applications each run on their own
            subdomain with their own account, so a single "Sign in" would imply
            one login across the platform that does not exist. */}
        <div className="nav__end">
          <Link className="btn btn--primary btn--sm" href="/pricing">
            Book a walkthrough
          </Link>
          <button
            className="nav__toggle"
            id="navToggle"
            aria-expanded={mobileOpen}
            aria-controls="mNav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(prev => !prev)}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      <MegaProducts open={openMega === 'm-products'} onClose={closeAll} />
      <MegaSolutions open={openMega === 'm-solutions'} onClose={closeAll} />
      <MegaPlatform open={openMega === 'm-platform'} onClose={closeAll} />
      <MegaDevs open={openMega === 'm-devs'} onClose={closeAll} />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
