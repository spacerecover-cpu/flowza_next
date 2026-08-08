/**
 * FlowZa QRForge — /products/qrforge
 *
 * A marketing and operations QR platform. The printed symbol carries a short
 * identifier and nothing else; the destination is a record that can be edited
 * after the print run, and every scan is a row.
 *
 * Ported from parts/js/qrforge.js. Scan volumes are the site's illustrative
 * campaign. What is not illustrative is where the totals sit: they accumulate
 * against the code rather than against the destination, which is why
 * `cumulativeScans` sums forward through the list rather than reading a field.
 */

/** Thousands separators without Intl, so server and client agree byte for byte. */
export function formatScans(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/* -------------------------------------------------- the printed artefact */

/** Stamped on the card. It does not change, which is the whole argument. */
export const QR_CODE_ID = 'QRF-UE-0042';
export const QR_CARD_STAMP = 'QRF-UE-0042 · PRESSED 12 SEP 2025 · UNCHANGED';

/* ---------------------------------------------- the redirect switchboard */

export interface QrDestination {
  /** Short label on the selector chip. */
  key: string;
  /** Where the code resolves while this destination is live. */
  url: string;
  name: string;
  /** When it was changed, and by whom. */
  changed: string;
  /** Live window, as printed on the tag. */
  status: string;
  /** What physically happened — or did not. */
  what: string;
  /** Scans recorded while this destination was the live one. */
  added: number;
  /** Why this state of the code is worth looking at. */
  analysis: string;
}

/** Four destinations over one code's life, in order. */
export const QR_DESTINATIONS: readonly QrDestination[] = [
  {
    key: 'AUTUMN',
    url: 'urbaneats.ae/menu/autumn',
    name: 'Autumn menu',
    changed: '12 Sep 2025 · marketing',
    status: 'LIVE 12 SEP – 30 NOV',
    what: 'Printed on 4,200 table cards and the window vinyl.',
    added: 41880,
    analysis:
      'The destination the code was printed for. Nothing about this state is special; it is simply the first thing the code pointed at.',
  },
  {
    key: 'WINTER',
    url: 'urbaneats.ae/menu/winter',
    name: 'Winter menu',
    changed: '01 Dec 2025 · marketing',
    status: 'LIVE 01 DEC – 28 FEB',
    what: 'Same table cards. Nothing reprinted, nothing reissued.',
    added: 56310,
    analysis:
      'A seasonal changeover that would otherwise be a print run. The destination is edited in the dashboard and the next scan resolves to the new page.',
  },
  {
    key: 'CLOSURE',
    url: 'urbaneats.ae/notice/marina',
    name: 'Refit closure notice',
    changed: '14 Jan 2026 · operations, 11:20',
    status: 'LIVE 14 JAN – 19 JAN',
    what: 'Changed by the duty manager from a phone, mid-service.',
    added: 2940,
    analysis:
      'Not a campaign at all. A code on a door became the fastest way to tell every arriving guest the same thing, and it stopped being a closure notice five days later.',
  },
  {
    key: 'A/B',
    url: '50% loyalty-signup · 50% menu',
    name: 'Split test',
    changed: '20 Jan 2026 · growth',
    status: 'RUNNING · 20 JAN –',
    what: 'Two destinations behind one symbol, weighted evenly.',
    added: 18450,
    analysis:
      'The same printed code now serves two destinations and reports each one separately. The comparison is valid because the audience, the placement and the symbol are identical.',
  },
];

/** Scans recorded against the code from the first destination through `index`. */
export function cumulativeScans(index: number): number {
  return QR_DESTINATIONS.slice(0, index + 1).reduce((total, d) => total + d.added, 0);
}

/* ------------------------------------------------------- scan analytics */

export interface QrHourShare {
  /** Hour of day, local, two digits. */
  hour: string;
  /** Share of scans in that hour, per cent. */
  share: number;
}

/** Two peaks: lunch just after 13:00 and a larger one at 19:00. */
export const QR_HOURS: readonly QrHourShare[] = [
  { hour: '06', share: 1.1 },
  { hour: '07', share: 2.4 },
  { hour: '08', share: 3.6 },
  { hour: '09', share: 3.1 },
  { hour: '10', share: 2.8 },
  { hour: '11', share: 4.2 },
  { hour: '12', share: 9.8 },
  { hour: '13', share: 11.4 },
  { hour: '14', share: 6.1 },
  { hour: '15', share: 3.9 },
  { hour: '16', share: 4.4 },
  { hour: '17', share: 6.8 },
  { hour: '18', share: 9.1 },
  { hour: '19', share: 12.6 },
  { hour: '20', share: 10.2 },
  { hour: '21', share: 5.3 },
  { hour: '22', share: 2.4 },
  { hour: '23', share: 0.8 },
];

export interface QrShare {
  label: string;
  /** Per cent of scans. */
  share: number;
}

/** Recorded per scan, not sampled. */
export const QR_DEVICES: readonly QrShare[] = [
  { label: 'iOS · Safari',               share: 44.2 },
  { label: 'Android · Chrome',           share: 38.6 },
  { label: 'iOS · in-app browser',       share: 9.4  },
  { label: 'Android · in-app browser',   share: 5.1  },
  { label: 'Other',                      share: 2.7  },
];

export interface QrGeoRow {
  place: string;
  /** Per cent of scans. */
  share: number;
  /** The placement the code was deployed on. */
  placement: string;
}

export const QR_GEO: readonly QrGeoRow[] = [
  { place: 'Dubai Marina', share: 31.4, placement: 'Table cards, 3 sites'    },
  { place: 'Business Bay', share: 24.8, placement: 'Table cards, 2 sites'    },
  { place: 'Deira',        share: 16.2, placement: 'Packaging inserts'       },
  { place: 'Abu Dhabi',    share: 13.1, placement: 'Table cards, 1 site'     },
  { place: 'Sharjah',      share: 9.6,  placement: 'Packaging inserts'       },
  { place: 'Elsewhere',    share: 4.9,  placement: 'Unattributed placement'  },
];

export interface QrLogField {
  field: string;
  value: string;
}

/** One scan, expanded. Eight fields — the charts above are summaries of rows like it. */
export const QR_SCAN_ROW: readonly QrLogField[] = [
  { field: 'SCAN',        value: 'scn_7741e2 · 19 Jan 2026 · 19:41:08 GST'      },
  { field: 'CODE',        value: 'QRF-UE-0042 · table card, Marina site 2'      },
  { field: 'CAMPAIGN',    value: 'Winter menu · Urban Eats Group'               },
  { field: 'LOCATION',    value: 'Dubai Marina, AE · derived from request'      },
  { field: 'DEVICE',      value: 'iPhone · iOS 18.3 · Safari'                   },
  { field: 'DESTINATION', value: 'urbaneats.ae/menu/winter · resolved 0.21s'    },
  { field: 'ROUTE',       value: 'No rule matched · default destination'        },
  { field: 'OUTCOME',     value: 'Reached menu · 2 pages · loyalty signup'      },
];

/* --------------------------------------------------------- bulk generation */

export interface QrBulkFolder {
  name: string;
  folder: string;
  count: string;
}

/** One upload, four folders, 4,200 unique codes. */
export const QR_BULK: readonly QrBulkFolder[] = [
  { name: 'Table cards · Marina',       folder: 'FOLDER · WINTER MENU 2025', count: '1,400 codes' },
  { name: 'Table cards · Business Bay', folder: 'FOLDER · WINTER MENU 2025', count: '1,100 codes' },
  { name: 'Table cards · Abu Dhabi',    folder: 'FOLDER · WINTER MENU 2025', count: '700 codes'   },
  { name: 'Packaging inserts',          folder: 'FOLDER · RETAIL PACKS',     count: '1,000 codes' },
];
