export type UtilBand = 1 | 2 | 3 | 4 | 5;

export interface UtilPerson {
  name: string;
  grade: string;
  weeks: UtilBand[];
}

export const UTIL_ROSTER: UtilPerson[] = [
  { name: 'Amara S.', grade: 'PRINCIPAL',   weeks: [3,3,4,4,4,5,4,4,3,3,4,4] },
  { name: 'Ben O.',   grade: 'SENIOR',      weeks: [4,4,4,5,5,5,4,4,4,4,5,4] },
  { name: 'Chidi N.', grade: 'SENIOR',      weeks: [2,3,3,4,4,4,4,3,3,2,3,4] },
  { name: 'Dana K.',  grade: 'CONSULTANT',  weeks: [4,4,5,5,4,4,4,4,4,5,5,4] },
  { name: 'Eli R.',   grade: 'CONSULTANT',  weeks: [1,2,2,3,3,3,4,4,3,2,2,3] },
  { name: 'Farah T.', grade: 'ANALYST',     weeks: [3,4,4,4,4,4,3,3,4,4,4,4] },
  { name: 'Gus L.',   grade: 'ANALYST',     weeks: [1,1,2,2,3,3,3,2,2,1,2,2] },
  { name: 'Hana M.',  grade: 'PRINCIPAL',   weeks: [4,4,4,4,5,5,5,4,4,4,4,4] },
];
