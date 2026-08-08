/**
 * Pricing philosophy, not a price list.
 *
 * Every Flowza AI application is priced on its own — by product, by the
 * features you switch on and by the scale of the deployment. There is no
 * universal licence and no per-person price that covers the nine, so this file
 * deliberately holds no headline figure. It previously described tiers such as
 * "All nine systems" at a per-user rate; that described a commercial model the
 * platform does not have.
 */
export interface PricingTier {
  name: string;
  /** Who the shape of the deployment suits, shown where a price used to sit. */
  shape: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  flagLabel?: string;
}

export const TIERS: PricingTier[] = [
  {
    name: 'Starter',
    shape: 'One application',
    description: 'For a small team solving the one problem that is urgent right now.',
    features: [
      'A single application, priced on its own',
      'One entity, one country',
      'Standard workflows and reports',
      'Guided setup and email support',
    ],
    cta: { label: 'Browse the applications', href: '/#systems' },
  },
  {
    name: 'Growth',
    shape: 'Several applications',
    description: 'For businesses running more than one part of the operation on Flowza AI.',
    features: [
      'Each application priced separately',
      'Multi-entity and multi-currency where the application supports it',
      'Single sign-on',
      'Priority support across the applications you hold',
    ],
    cta: { label: 'Book a walkthrough', href: '/pricing' },
    highlighted: true,
    flagLabel: 'MOST COMMON',
  },
  {
    name: 'Enterprise',
    shape: 'Custom deployment',
    description: 'For committed capacity, contractual guarantees and a named team.',
    features: [
      'Customer-managed keys',
      'Chosen data residency and release windows',
      'Contractual availability terms',
      '24×7 escalation and a named contact',
      'Migration engineering',
    ],
    cta: { label: 'Contact us', href: '/enterprise' },
  },
];
