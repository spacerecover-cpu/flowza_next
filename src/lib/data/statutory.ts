/**
 * The statutory payroll obligations FlowZa Finance carries, by country.
 *
 * Every item listed is one the product catalogue names. The WPS bank file is
 * marked as roadmap on the PMS page and produced in Finance today, so it is
 * shown as covered here and the caveat is carried in the page copy rather than
 * quietly dropped.
 *
 * Coverage is four countries. Further GCC coverage is on the roadmap rather
 * than in the product, and the board says so rather than leaving a reader to
 * assume the Gulf is finished.
 */
export interface StatutoryCountry {
  country: string;
  /** Local shorthand a payroll manager would recognise. */
  code: string;
  items: string[];
  /** The file or return the month ends with, where there is one. */
  output: string;
}

export const STATUTORY_COUNTRIES: StatutoryCountry[] = [
  {
    country: 'India',
    code: 'IN',
    items: ['EPF', 'ESI', 'Professional Tax', 'Gratuity', 'TDS', 'POSH'],
    output: 'Statutory returns and challans',
  },
  {
    country: 'United Arab Emirates',
    code: 'AE',
    items: ['VAT at 5%', 'Corporate tax at 9%', 'End of service'],
    output: 'WPS bank file',
  },
  {
    country: 'Oman',
    code: 'OM',
    items: ['VAT at 5%', 'Social insurance', 'End of service'],
    output: 'Social insurance return',
  },
  {
    country: 'Saudi Arabia',
    code: 'SA',
    items: ['GOSI', 'End of service', 'Arabic right-to-left documents'],
    output: 'GOSI return',
  },
];

export const STATUTORY_NOTE =
  'Four countries, maintained as the rules change. Further GCC coverage is on the roadmap rather than in the product — if the country you employ in is not on this list, it is not covered.';
