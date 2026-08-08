export interface PricingTier {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  flagLabel?: string;
}

export const TIERS: PricingTier[] = [
  {
    name: 'Core',
    price: '$19',
    unit: '/ user / month',
    description: 'For a single entity getting off spreadsheets and disconnected tools.',
    features: [
      'Any two of the nine systems',
      'Standard workflows',
      'One legal entity, one country',
      'Email support',
    ],
    cta: { label: 'Start', href: '/pricing' },
  },
  {
    name: 'Growth',
    price: '$39',
    unit: '/ user / month',
    description: 'The full operational surface with AI assistance across it.',
    features: [
      'All nine systems',
      'Copilot across all nine',
      'Multi-entity, multi-currency, four countries',
      'API and custom objects',
      'SSO',
    ],
    cta: { label: 'Book a walkthrough', href: '/pricing' },
    highlighted: true,
    flagLabel: 'MOST COMMON',
  },
  {
    name: 'Scale',
    price: '$69',
    unit: '/ user / month',
    description: 'For organisations running autonomous work and tighter controls.',
    features: [
      'Everything in Growth',
      'Agents and scheduled automation',
      'Sandboxes and tenant branching',
      'Advanced approvals and SoD',
      'SCIM provisioning',
    ],
    cta: { label: 'Talk to sales', href: '/pricing' },
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Committed capacity, contractual guarantees and a named team.',
    features: [
      'Customer-managed keys',
      'Chosen residency and release windows',
      'Contractual availability terms',
      '24×7 escalation and named CSM',
      'Migration engineering',
    ],
    cta: { label: 'Contact us', href: '/enterprise' },
  },
];

export interface CalculatorTool {
  name: string;
  costPerUserPerMonth: number;
  defaultChecked: boolean;
}

export const CALCULATOR_TOOLS: CalculatorTool[] = [
  { name: 'CRM', costPerUserPerMonth: 75, defaultChecked: true },
  { name: 'Finance / ERP', costPerUserPerMonth: 90, defaultChecked: true },
  { name: 'HR & payroll', costPerUserPerMonth: 12, defaultChecked: true },
  { name: 'Inventory / WMS', costPerUserPerMonth: 45, defaultChecked: true },
  { name: 'Helpdesk', costPerUserPerMonth: 29, defaultChecked: true },
  { name: 'BI & reporting', costPerUserPerMonth: 24, defaultChecked: true },
  { name: 'Procurement', costPerUserPerMonth: 18, defaultChecked: false },
  { name: 'E-signature', costPerUserPerMonth: 15, defaultChecked: false },
  { name: 'Projects', costPerUserPerMonth: 13, defaultChecked: false },
  { name: 'Expenses', costPerUserPerMonth: 9, defaultChecked: false },
];
