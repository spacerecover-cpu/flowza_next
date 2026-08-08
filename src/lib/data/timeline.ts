export interface DayEvent {
  hour: number;
  isAI: boolean;
  text: string;
}

export const DAY: DayEvent[] = [
  { hour: 7.2, isAI: true, text: 'Overnight bank feed matched. 42 of 44 lines cleared automatically; two held as exceptions.' },
  { hour: 8.5, isAI: false, text: 'Warehouse confirms an inbound container arrived 12 units short.' },
  { hour: 9.1, isAI: true, text: 'Shortage linked to the purchase order, a supplier claim drafted, and the buyer notified with the evidence attached.' },
  { hour: 10.7, isAI: false, text: 'Sales approves a discount above the standard threshold on a renewal. The reason is recorded against the contract.' },
  { hour: 11.9, isAI: true, text: 'Credit exposure recalculated after the payment cleared. A held order is released automatically within the new limit.' },
  { hour: 13.3, isAI: false, text: 'The controller reviews three proposed journals, accepts two and rejects one. The rejection updates the coding rule.' },
  { hour: 15.2, isAI: true, text: 'Marina Walk stock cover falls below four days. A transfer from Abu Dhabi is proposed with the cost of moving it.' },
  { hour: 17.8, isAI: false, text: 'The operations manager accepts the transfer. A driver is assigned and the customer promise date holds.' },
  { hour: 19.5, isAI: true, text: 'Day closed. Variance report issued and two exceptions queued for the morning, with context attached to each.' },
];
