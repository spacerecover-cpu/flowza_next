import React from 'react';
import { BACK_OFFICE_MODULES } from '@/lib/data/finance';

/**
 * The eight numbered modules from the ledger spine, each with what it actually
 * covers. A definition list because that is what it is: the node number is the
 * term and the detail is the definition.
 */
export interface BackOfficeModulesProps {
  className?: string;
  style?: React.CSSProperties;
}

export function BackOfficeModules({ className, style }: BackOfficeModulesProps) {
  return (
    <dl className={['fmod', className].filter(Boolean).join(' ')} style={style}>
      {BACK_OFFICE_MODULES.map((m) => (
        <div key={m.index}>
          <dt>
            <i>{m.index}</i>
            {m.name}
          </dt>
          <dd>
            <ul>
              {m.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
