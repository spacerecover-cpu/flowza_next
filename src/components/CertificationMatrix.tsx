import React from 'react';
import { CERT_TREATMENTS, CERT_THERAPISTS } from '@/lib/data/spa';

/**
 * Five therapists against seven treatment certifications.
 *
 * The constraint the roster engine is built on: a therapist may only be
 * scheduled against a treatment they are certified for, in the roster and in the
 * client-facing portal alike. Read across, it says what a person can deliver;
 * read down, it says which treatments are limited by a person rather than by a
 * room — which is the same thing as a training plan.
 *
 * Static, no JavaScript. Every glyph carries an `sr` label, so the certified /
 * not-certified distinction never depends on colour or shape alone.
 */
export function CertificationMatrix() {
  return (
    <table className="smcert">
      <caption className="sr">
        Treatment certifications held by each therapist. Massage is held by three of the five
        therapists, while hot stone, nails, the signature ritual and bridal preparation are each held
        by one, so those four treatments are limited by a person rather than by a room.
      </caption>
      <thead>
        <tr>
          <th scope="col">Therapist</th>
          {CERT_TREATMENTS.map((t) => (
            <th scope="col" key={t.name}>
              {t.name}
              {t.detail ? <span className="smcert__sub">{t.detail}</span> : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {CERT_THERAPISTS.map((therapist) => (
          <tr key={therapist.name}>
            <th scope="row" className="smcert__rh">{therapist.name}</th>
            {CERT_TREATMENTS.map((t, i) => {
              const yes = therapist.certified[i];
              return (
                <td key={t.name} className={yes ? 'smcert__y' : 'smcert__n'}>
                  <span aria-hidden="true">{yes ? '●' : '·'}</span>
                  <span className="sr">{yes ? 'Certified' : 'Not certified'}</span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
