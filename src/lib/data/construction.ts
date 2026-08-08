export interface CostPackage {
  name: string;
  code: string;
  depth: 0 | 1;
  spentPct: number;
  committedPct: number;
  overPct: number;
  isOver: boolean;
}

export const COST_PACKAGES: CostPackage[] = [
  { name: 'Substructure',          code: 'PKG-01 · complete',           depth: 0, spentPct: 96, committedPct: 2,  overPct: 0, isOver: false },
  { name: 'Superstructure',        code: 'PKG-02',                      depth: 0, spentPct: 71, committedPct: 24, overPct: 0, isOver: false },
  { name: 'Frame',                 code: 'PKG-02.1',                    depth: 1, spentPct: 82, committedPct: 14, overPct: 0, isOver: false },
  { name: 'Cladding',              code: 'PKG-02.2 · variation pending', depth: 1, spentPct: 58, committedPct: 36, overPct: 9, isOver: true  },
  { name: 'Mechanical & electrical', code: 'PKG-03',                    depth: 0, spentPct: 44, committedPct: 49, overPct: 0, isOver: false },
  { name: 'Fit-out',               code: 'PKG-04',                      depth: 0, spentPct: 12, committedPct: 8,  overPct: 0, isOver: false },
  { name: 'Externals',             code: 'PKG-05',                      depth: 0, spentPct: 5,  committedPct: 3,  overPct: 0, isOver: false },
];
