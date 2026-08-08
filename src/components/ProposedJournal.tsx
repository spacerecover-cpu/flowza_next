import React from 'react';
import { PROPOSED_JOURNAL } from '@/lib/data/finance';

/**
 * The journal Flowza drafts from the invoice in the hero. The proposed row is
 * highlighted rather than hidden, because the claim is that a person reviews it
 * and the correction becomes a rule.
 */
export interface ProposedJournalProps {
  className?: string;
}

export function ProposedJournal({ className }: ProposedJournalProps) {
  return (
    <div className={['tw', className].filter(Boolean).join(' ')}>
      <table className="je">
        <caption className="sr">
          Proposed journal entry for invoice NW-88214, with the AI-proposed freight line highlighted
        </caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Description</th>
            <th scope="col" className="amt">
              Debit
            </th>
            <th scope="col" className="amt">
              Credit
            </th>
          </tr>
        </thead>
        <tbody>
          {PROPOSED_JOURNAL.map((line) => (
            <tr key={`${line.account}-${line.description}`} className={line.proposed ? 'ai' : undefined}>
              <td>{line.account}</td>
              <td>{line.description}</td>
              <td className="amt">{line.debit}</td>
              <td className="amt">{line.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
