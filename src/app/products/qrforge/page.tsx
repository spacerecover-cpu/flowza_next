import type { Metadata } from 'next';
import Link from 'next/link';
import { Chapter } from '@/components/Chapter';
import { Wrap } from '@/components/Wrap';
import { Cols } from '@/components/Cols';
import { Eyebrow } from '@/components/Eyebrow';
import { Panel } from '@/components/Panel';
import { KeylineList } from '@/components/KeylineList';
import { FAQ } from '@/components/FAQ';
import { RelatedLinks } from '@/components/RelatedLinks';
import { AppLink, ProductBadges, Metrics, Quote } from '@/components/ProductChrome';
import { QrMatrix } from '@/components/QrMatrix';
import { RedirectSwitchboard } from '@/components/RedirectSwitchboard';
import { ScanHourProfile, ScanDeviceSplit, ScanGeography, ScanLogRow } from '@/components/ScanAnalytics';
import { SmartRoutingDiagram } from '@/components/SmartRoutingDiagram';
import { QR_BULK } from '@/lib/data/qrforge';

export const metadata: Metadata = {
  title: 'FlowZa QRForge — dynamic QR codes with live analytics',
  description:
    'Change the destination of a printed QR code at any time, log every scan with location, device and time, and mint thousands of unique codes from one CSV.',
};

const METRICS = [
  { value: '10M+', label: 'QR codes generated on the platform' },
  { value: '<0.3s', label: 'average redirect time per scan' },
  { value: '60%', label: 'higher engagement versus static codes' },
  { value: '99.99%', label: 'redirect infrastructure uptime' },
];

const logItems = [
  {
    heading: 'Per scan, not per day',
    body: 'The chart above is a summary of rows like this one. Because the rows are kept, a question nobody asked at launch — how many Android users in Sharjah arrive after 21:00 — is a filter rather than a new tracking plan.',
  },
  {
    heading: 'Live, not batched',
    body: 'A scan appears in the dashboard as it happens. On a code that has just gone up on a door, that is the difference between watching a message land and hearing about it tomorrow.',
  },
  {
    heading: 'Measured against the code',
    body: 'Because the identifier is stable for the life of the printed object, the history is continuous. Nothing resets when the destination changes.',
  },
];

const designItems = [
  {
    heading: 'Brand colours and embedded logos',
    body: 'Your palette on the modules, your mark in the centre, with the contrast and quiet zone that keep a camera reading it first time.',
  },
  {
    heading: 'Custom frames',
    body: 'A frame carries the instruction — what the person gets for scanning. On a table card that sentence does more for the scan rate than the symbol design does.',
  },
  {
    heading: 'Print-perfect export',
    body: 'Multiple formats, including vector SVG that goes to a printer at any size without softening the module edges. What the designer places is what the camera reads.',
  },
];

const folderItems = [
  {
    heading: 'Campaigns, folders and permissions',
    body: 'Codes are organised into campaigns rather than kept in a list. Who can create, re-point or export is set per folder — re-pointing a live code is a permission, because it changes what the public sees.',
  },
];

const dashboardItems = [
  {
    heading: 'Scan heatmaps',
    body: 'Where and when scanning concentrated, across placements and hours, so the next print run goes where the last one was actually read.',
  },
  {
    heading: 'Conversion funnels',
    body: 'Scan, landing, action. The drop between the first two is a placement problem; the drop between the last two is a page problem, and they need different people.',
  },
  {
    heading: 'Campaign comparisons',
    body: 'Autumn against winter, insert against table card, arm A against arm B — on one set of axes rather than in two exports that were built differently.',
  },
  {
    heading: 'Exportable and client-ready',
    body: 'Shareable as a report or exported for a deck, which matters when the person who needs the number does not have a login.',
  },
];

const faqItems = [
  {
    question: 'Are static codes ever the right answer?',
    answer:
      'Yes — for a destination that will never move and a code you will never want to measure. Everything else pays for the redirect on the first change of mind. The published 60% engagement difference is measured against static codes, and most of it comes from codes staying relevant rather than from the symbol itself.',
  },
  {
    question: 'What does the redirect cost the visitor?',
    answer:
      'An average of under 0.3 seconds per scan, on infrastructure with 99.99% uptime. The hop is where the scan is logged and the routing rules are evaluated, which is the price of the code being changeable at all.',
  },
  {
    question: 'Will a dynamic code scan on any phone?',
    answer:
      'It is an ordinary QR symbol holding a short address, so any native camera app reads it without an application to install. The intelligence is behind the address, not inside the symbol.',
  },
  {
    question: 'Can an agency work in our account without seeing everything?',
    answer:
      'Yes. Codes live in campaigns and folders, and permissions are set per folder — including who may re-point a code that is already in the field, which is the action worth restricting.',
  },
  {
    question: 'How many codes can we generate at once?',
    answer:
      'Thousands from a single CSV in seconds, each one unique and each one tracked separately. Uniqueness is the point: a code per placement is what turns a campaign total into a per-placement answer.',
  },
];

const relatedLinks = [
  { href: '/products/pos', title: 'FlowZa POS', subtitle: 'Where the scan turns into a sale' },
  { href: '/industries/retail', title: 'Retail & hospitality', subtitle: 'Placement, footfall and baskets' },
  { href: '/platform', title: 'Platform', subtitle: 'How the records are shared' },
];

export default function QRForgePage() {
  return (
    <>
      {/* HERO */}
      <Chapter variant="instrument" style={{ paddingTop: 'clamp(48px,6vw,var(--s9))' }} net netFull>
        <Wrap>
          <div className="rv">
            <div className="pbadge">
              <span className="pbadge__m">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="5" height="5" stroke="#0C0E0D" strokeWidth="1.6" />
                  <rect x="10.5" y="2.5" width="5" height="5" stroke="#0C0E0D" strokeWidth="1.6" />
                  <rect x="2.5" y="10.5" width="5" height="5" stroke="#0C0E0D" strokeWidth="1.6" />
                  <path d="M10.5 10.5h5v5" stroke="#0C0E0D" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="pbadge__t">FlowZa QRForge</span>
            </div>
            <h1 className="d-xl">
              The code is printed.<br />The destination<br />is not.
            </h1>
          </div>

          <Cols style={{ marginTop: 'clamp(32px,4vw,var(--s7))', alignItems: 'start' }}>
            <div className="c-7 rv rv-d2">
              <p className="lede" style={{ marginBottom: 'var(--s5)' }}>
                Dynamic QR codes with live analytics. What goes to print is an identifier. Where it
                resolves is a record you can edit at 11:20 on a Tuesday, from a phone, without touching
                the four thousand table cards already on the tables — and every scan against it is
                logged with location, device, OS and time.
              </p>
              <ProductBadges badges={['Dynamic redirects', 'Scan analytics', 'Bulk generation']} />
              <div className="row">
                <Link className="btn btn--primary" href="/pricing">
                  Book a walkthrough <span className="arw">→</span>
                </Link>
                <AppLink host="qr.flowza.ai" />
              </div>
            </div>
            <div className="c-5 rv rv-d3">
              <ul className="qfdef">
                <li>
                  <span className="qfdef__k">Symbol</span>
                  <span className="qfdef__v">
                    <b>Printed, and then fixed.</b> A short identifier and nothing else. There is no
                    menu, no price and no campaign inside it.
                  </span>
                </li>
                <li>
                  <span className="qfdef__k">Destination</span>
                  <span className="qfdef__v">
                    <b>A live record.</b> Edited in the dashboard, effective on the next scan, with no
                    reprint and no reissue.
                  </span>
                </li>
                <li>
                  <span className="qfdef__k">Scan log</span>
                  <span className="qfdef__v">
                    <b>One row per scan.</b> Time, location, device, OS and the destination that was
                    served.
                  </span>
                </li>
              </ul>
            </div>
          </Cols>

          <hr className="rule rv" style={{ margin: 'clamp(40px,5vw,var(--s8)) 0 var(--s6)' }} />

          <div className="rv">
            <Metrics items={METRICS} />
          </div>
        </Wrap>
      </Chapter>

      {/* DYNAMIC REDIRECTS — THE SWITCHBOARD */}
      <Chapter>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-6 rv">
              <Eyebrow>Dynamic redirects</Eyebrow>
              <h2 className="d-l">
                One symbol.<br />Four destinations.<br />Nothing reprinted.
              </h2>
            </div>
            <div className="c-6 rv rv-d2">
              <p className="lede">
                The card on the left is the physical object: four thousand two hundred of them went to
                print in September 2025 and not one has been reissued since. Choose a destination and
                watch the matrix. It does not redraw, because there is nothing in it to change — and
                the scan total underneath it keeps counting through every change.
              </p>
            </div>
          </Cols>
          <Cols>
            {/* The matrix is built here, on the server, and handed in. */}
            <RedirectSwitchboard matrix={<QrMatrix />} />
          </Cols>
          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '88ch' }}>
            Worked example with illustrative scan volumes. What is not illustrative is where the totals
            sit: they accumulate against the code rather than against the destination, so autumn
            against winter is a like-for-like comparison — same symbol, same placement, same audience,
            one variable. That is also why the closure notice is measurable at all; a five-day message
            on a door would otherwise leave no record.
          </p>
        </Wrap>
      </Chapter>

      {/* REAL-TIME SCAN ANALYTICS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Real-time scan analytics</Eyebrow>
              <h2 className="d-l">
                Every scan is a row,<br />not a tick on<br />a counter.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                A counter tells you a code is popular. QRForge writes one row per scan carrying
                location, device, OS and time, which is what lets the four dimensions be crossed rather
                than reported beside each other. Building an audience profile is that, literally: the
                profile is assembled from rows.
              </p>
            </div>
          </Cols>

          <Panel className="rv" style={{ padding: 'var(--s6)' }}>
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 'var(--s5)' }}>
              <span
                className="mono"
                style={{ fontSize: '.625rem', letterSpacing: '.11em', color: 'var(--fg-3)' }}
              >
                TIME OF DAY · WINTER MENU · 56,310 SCANS
              </span>
              <span className="tag tag--sig">Two peaks</span>
            </div>
            <ScanHourProfile />
          </Panel>

          <Cols style={{ marginTop: 'clamp(32px,4vw,var(--s7))' }}>
            <div className="c-6 rv">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Device and operating system</h3>
              <ScanDeviceSplit />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Recorded per scan, not sampled. The in-app browser share is the number that decides
                whether a destination can rely on a wallet pass or a native app hand-off at all.
              </p>
            </div>
            <div className="c-6 rv rv-d2">
              <h3 className="d-s" style={{ marginBottom: 'var(--s5)' }}>Geography and placement</h3>
              <ScanGeography />
              <p className="tiny" style={{ marginTop: 'var(--s4)' }}>
                Location is derived from the request and attributed to the placement the code was
                deployed on, which is how a packaging insert and a table card can be compared honestly.
              </p>
            </div>
          </Cols>

          <Cols style={{ marginTop: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <ScanLogRow />
            </div>
            <div className="c-5 rv rv-d2">
              <KeylineList items={logItems} style={{ borderTopColor: 'var(--edge)' }} />
            </div>
          </Cols>

          <p className="tiny rv" style={{ marginTop: 'var(--s5)', maxWidth: '88ch' }}>
            Illustrative campaign. The dimensions are the ones QRForge records on every scan: location,
            device, OS and time.
          </p>
        </Wrap>
      </Chapter>

      {/* A/B TESTS AND SMART ROUTING */}
      <Chapter variant="raised">
        <Wrap>
          <div className="section-head rv">
            <Eyebrow>A/B tests and smart routing</Eyebrow>
            <h2 className="d-l">
              One code can ask<br />who is holding it.
            </h2>
            <p className="lede" style={{ marginTop: 'var(--s5)' }}>
              Behind a single symbol sits an ordered rule set. The first rule that matches wins;
              anything unmatched falls through to the default, which can itself be a weighted split.
              Nothing here requires a second code, which means nothing here requires a second print run.
            </p>
          </div>
          <div className="rv">
            <Panel style={{ padding: 'var(--s5)' }}>
              <div className="dscroll" style={{ ['--dmin' as string]: '820px' }}>
                <SmartRoutingDiagram />
              </div>
            </Panel>
            <Cols style={{ marginTop: 'clamp(32px,4vw,var(--s7))' }}>
              <div className="c-4">
                <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Split-test destinations</h3>
                <p className="small">
                  Two or more destinations behind one code, weighted. The audience, the placement and
                  the symbol are identical across arms, so the only variable left is the page — which
                  is what makes the result worth acting on.
                </p>
              </div>
              <div className="c-4">
                <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Route by location or device</h3>
                <p className="small">
                  A code on regional packaging can send each market to its own page, and a code
                  advertising an app can send each handset to the right store, from one printed artwork.
                </p>
              </div>
              <div className="c-4">
                <h3 className="d-s" style={{ marginBottom: 'var(--s3)' }}>Schedule the redirect</h3>
                <p className="small">
                  Time-based rules change the destination on a clock rather than on somebody
                  remembering. A breakfast menu until eleven, an event page until the doors close, a
                  thank-you page afterwards.
                </p>
              </div>
            </Cols>
          </div>
        </Wrap>
      </Chapter>

      {/* BRANDED DESIGN AND BULK GENERATION */}
      <Chapter>
        <Wrap>
          <Cols>
            <div className="c-6 rv">
              <Eyebrow>Branded code design</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                A code is artwork<br />before it is a link
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                The symbol is going on a menu, a window or a carton, which makes it a design object
                with a tolerance. QRForge keeps the brand treatment on the side of that tolerance where
                the code still reads.
              </p>
              <KeylineList items={designItems} style={{ borderTopColor: 'var(--edge)' }} />
              <div className="row" style={{ marginTop: 'var(--s5)' }}>
                <span className="tag">Brand colours</span>
                <span className="tag">Embedded logo</span>
                <span className="tag">Custom frame</span>
                <span className="tag tag--sig">Print-perfect SVG</span>
              </div>
            </div>
            <div className="c-6 rv rv-d2">
              <Eyebrow>Bulk generation</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                One file in,<br />a campaign out
              </h2>
              <p className="small" style={{ marginBottom: 'var(--s5)' }}>
                Thousands of unique codes from one CSV in seconds. Unique matters: a code per table,
                per carton or per outlet is the only way the analytics can tell you which placement
                worked rather than that the campaign worked.
              </p>
              <div className="qfbulk">
                {QR_BULK.map((f) => (
                  <div className="qfbulk__r" key={f.name}>
                    <span className="qfbulk__n">
                      {f.name}
                      <span className="qfbulk__s">{f.folder}</span>
                    </span>
                    <span className="qfbulk__c">{f.count}</span>
                  </div>
                ))}
                <div className="qfbulk__ft">
                  <p className="tiny" style={{ margin: 0 }}>
                    One upload, four folders, 4,200 unique codes. Folders carry team permissions, so an
                    agency can be given the campaign it is working on and nothing else.
                  </p>
                </div>
              </div>
              <KeylineList
                items={folderItems}
                style={{ borderTopColor: 'var(--edge)', marginTop: 'var(--s6)' }}
              />
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* CAMPAIGN DASHBOARDS */}
      <Chapter variant="instrument" net>
        <Wrap>
          <Cols style={{ alignItems: 'end', marginBottom: 'clamp(40px,5vw,var(--s8))' }}>
            <div className="c-7 rv">
              <Eyebrow>Campaign dashboards</Eyebrow>
              <h2 className="d-l">
                Reports you can put<br />in front of the client<br />who paid for it.
              </h2>
            </div>
            <div className="c-5 rv rv-d2">
              <p className="lede">
                Scan heatmaps, conversion funnels and campaign comparisons, exportable and shareable.
                The comparison is the useful one: two campaigns measured the same way, by the same
                instrument, on the same axes.
              </p>
            </div>
          </Cols>
          <Cols>
            <div className="c-6 rv">
              <KeylineList twoCol items={dashboardItems} style={{ borderTopColor: 'var(--edge)' }} />
            </div>
            <div className="c-6 rv rv-d2">
              <Eyebrow>Where QRForge sits in the nine</Eyebrow>
              <h3 className="d-m" style={{ marginBottom: 'var(--s5)' }}>
                The one system whose output leaves the building
              </h3>
              <p className="body-l" style={{ marginBottom: 'var(--s5)' }}>
                Eight of the nine FlowZa AI applications are read by people who work for you. QRForge is not. A
                code printed on a carton or a menu is a FlowZa record that a member of the public can
                reach — from a pavement, a table, a shelf, months after it was printed and long after
                whoever printed it has moved on.
              </p>
              <p className="body-l">
                That is why the mechanism is built the way it is: nothing meaningful in the symbol, the
                destination held as a record, permissions on who may re-point a live code, and 99.99%
                uptime on the redirect. It is also why the scan record is worth keeping. A person you
                have never met told you where they were, what they were holding and when they were
                interested, and QRForge keeps that record with the campaign it belongs to — queryable
                over its API for whatever you want to do with it next.
              </p>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* HOW IT WORKS */}
      <Chapter>
        <Wrap>
          <Cols>
            <div className="c-7 rv">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="d-m" style={{ marginBottom: 'var(--s7)' }}>
                Design, deploy, then keep changing it
              </h2>
              <ul className="qfstep">
                <li>
                  <span className="qfstep__n">01</span>
                  <div>
                    <h3>Create your codes</h3>
                    <p className="small">
                      Design one branded code or upload a CSV to mint thousands. Set destinations, add
                      the brand elements, download in the format the printer asked for.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="qfstep__n">02</span>
                  <div>
                    <h3>Deploy and track</h3>
                    <p className="small">
                      Print them, embed them, ship them on packaging. Every scan is captured as it
                      happens — who, when, where, on what device.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="qfstep__n">03</span>
                  <div>
                    <h3>Optimise on live codes</h3>
                    <p className="small">
                      Change destinations, run A/B tests and adjust routing without reprinting. The
                      scan data keeps sharpening the campaign after the print budget has been spent.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="c-5 rv rv-d2">
              <Quote name="Fatima Al-Hassan" role="Head of Marketing, Urban Eats Group">
                {'“We run hundreds of simultaneous marketing campaigns and FlowZa QRForge is the backbone of all of them. The ability to update destinations after print saves us thousands in reprinting costs every month. The analytics are outstanding.”'}
              </Quote>
            </div>
          </Cols>
        </Wrap>
      </Chapter>

      {/* FAQ */}
      <Chapter variant="raised">
        <Wrap tight>
          <h2 className="d-m rv" style={{ marginBottom: 'var(--s7)' }}>Questions marketing teams ask</h2>
          <FAQ items={faqItems} className="rv" />
          <h3 className="d-s rv" style={{ margin: 'var(--s9) 0 var(--s5)' }}>Related</h3>
          <RelatedLinks links={relatedLinks} className="rv" />
        </Wrap>
      </Chapter>
    </>
  );
}
