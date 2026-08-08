export interface OrchStep {
  text: string;
  detail: string;
  isAI: boolean;
}

export interface OrchOutput {
  label: string;
  value: string;
}

export interface OrchFlow {
  label: string;
  steps: OrchStep[];
  outputs: OrchOutput[];
}

export const FLOWS: OrchFlow[] = [
  {
    label: 'Chase overdue invoices',
    outputs: [
      { label: 'Invoices reviewed', value: '218' },
      { label: 'Reminders sent', value: '63' },
      { label: 'Escalated to a human', value: '4' },
      { label: 'Value chased', value: '$412k' },
    ],
    steps: [
      { text: 'Chase invoices overdue by more than 30 days', detail: 'INSTRUCTION · from the CFO', isAI: false },
      { text: 'Resolved 218 open receivables across four entities', detail: 'READ · finance.transactions · finance.parties', isAI: true },
      { text: 'Excluded 12 accounts in active dispute and 9 on agreed payment plans', detail: 'RULE · collections policy v4', isAI: true },
      { text: 'Drafted reminders in the language and tone on each account record', detail: 'GENERATE · 63 messages', isAI: true },
      { text: 'Held 4 accounts above $50k for human approval', detail: 'THRESHOLD · requires controller sign-off', isAI: false },
      { text: 'Sent, logged against each party, and scheduled follow-up in 7 days', detail: 'WRITE · audit trail attached', isAI: true },
    ],
  },
  {
    label: 'Find margin leakage',
    outputs: [
      { label: 'SKUs analysed', value: '1,402' },
      { label: 'Losing money', value: '37' },
      { label: 'Margin at risk', value: '$88k' },
      { label: 'Fix proposed', value: '29' },
    ],
    steps: [
      { text: 'Find where we are losing margin', detail: 'INSTRUCTION · from the COO', isAI: false },
      { text: 'Joined landed cost, freight and discounts across 1,402 items', detail: 'READ · POS · LogisPro · Finance', isAI: true },
      { text: 'Found 37 SKUs sold below true landed cost after inbound freight', detail: 'ANALYSE · unit economics', isAI: true },
      { text: 'Traced 22 of them to one supplier price rise absorbed silently in March', detail: 'CORRELATE · procurement history', isAI: true },
      { text: 'Proposed a price change and flagged 3 contracts that block it', detail: 'PROPOSE · awaiting approval', isAI: true },
    ],
  },
  {
    label: 'Prepare the board pack',
    outputs: [
      { label: 'Systems read', value: '5' },
      { label: 'Variances explained', value: '14' },
      { label: 'Charts built', value: '11' },
      { label: 'Time taken', value: '90 sec' },
    ],
    steps: [
      { text: 'Prepare the monthly board pack', detail: 'INSTRUCTION · scheduled, first working day', isAI: false },
      { text: 'Pulled P&L, cash, stock, headcount and utilisation from live records', detail: 'READ · five systems, one query', isAI: true },
      { text: 'Explained every variance over 5% against budget and prior period', detail: 'ANALYSE · with drill-through links', isAI: true },
      { text: 'Flagged two numbers it could not reconcile and said why', detail: 'FLAG · honest gaps, not guesses', isAI: true },
      { text: 'Assembled the deck in the board template and shared it for review', detail: 'WRITE · draft, not sent', isAI: false },
    ],
  },
];
