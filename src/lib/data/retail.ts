export interface Category {
  n: string;
  sp: number;
  m2: number;
  spm: number;
  gm: string;
  cov: string;
  row: 0 | 1;
  a: string;
}

export const CATS: Category[] = [
  {
    n: 'Womenswear', sp: 24, m2: 283, spm: 4120, gm: '54.2%', cov: '11d', row: 0,
    a: 'The largest footprint at mid productivity. The question is not whether to cut it, but which sub-ranges inside it are carrying the average.',
  },
  {
    n: 'Menswear', sp: 16, m2: 189, spm: 3480, gm: '51.8%', cov: '16d', row: 0,
    a: 'Below average on both productivity and cover. The clearest candidate to release space from.',
  },
  {
    n: 'Footwear', sp: 14, m2: 165, spm: 3960, gm: '47.1%', cov: '13d', row: 0,
    a: 'Space-hungry by nature, because boxes need depth. Judge it on sales per linear metre of wall rather than floor area.',
  },
  {
    n: 'Beauty', sp: 10, m2: 118, spm: 9640, gm: '61.4%', cov: '6d', row: 0,
    a: 'The most productive metre in the store and the tightest cover. If any category gets more space, it is this one.',
  },
  {
    n: 'Accessories', sp: 8, m2: 94, spm: 7210, gm: '63.8%', cov: '8d', row: 1,
    a: 'High margin, high productivity, small footprint. Expanding here is nearly free.',
  },
  {
    n: 'Kids', sp: 10, m2: 118, spm: 2880, gm: '49.6%', cov: '18d', row: 1,
    a: 'Low productivity on deep cover. Usually defended as a footfall driver — test that claim against basket data before cutting it.',
  },
  {
    n: 'Home', sp: 12, m2: 142, spm: 1940, gm: '44.2%', cov: '24d', row: 1,
    a: 'The weakest metre in the store on the second largest footprint. This is where a range review pays for itself.',
  },
  {
    n: 'Café', sp: 6, m2: 71, spm: 5300, gm: '68.9%', cov: '2d', row: 1,
    a: 'Strong contribution, and it holds people in the store. Judge it on dwell time as well as its own profit and loss.',
  },
];

export function categoryTier(salesPerM2: number): 'q1' | 'q2' | 'q3' | 'q4' {
  return salesPerM2 >= 7000 ? 'q4' : salesPerM2 >= 5000 ? 'q3' : salesPerM2 >= 3500 ? 'q2' : 'q1';
}

export interface TileLayout {
  index: number;
  left: number;
  top: number;
  width: number;
  height: number;
}

export function computeTreemapLayout(): TileLayout[] {
  const r0 = CATS.filter((c) => c.row === 0);
  const r1 = CATS.filter((c) => c.row === 1);
  const s0 = r0.reduce((a, c) => a + c.sp, 0);
  const s1 = r1.reduce((a, c) => a + c.sp, 0);

  const tiles: TileLayout[] = [];

  let x = 0;
  r0.forEach((c) => {
    const w = (c.sp / s0) * 100;
    tiles.push({ index: CATS.indexOf(c), left: x, top: 0, width: w, height: s0 });
    x += w;
  });

  x = 0;
  r1.forEach((c) => {
    const w = (c.sp / s1) * 100;
    tiles.push({ index: CATS.indexOf(c), left: x, top: s0, width: w, height: s1 });
    x += w;
  });

  return tiles;
}
