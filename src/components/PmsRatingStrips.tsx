import React from 'react';
import { PMS_RATING_STRIPS, stripTone } from '@/lib/data/pms';

/**
 * The same scale, three hands. Server component.
 *
 * Three managers rating ten people each on the same five-band scale: one
 * generous, one middling, one harsh. Read as one question — is a 4 from Iyer the
 * same thing as a 4 from Farooq? These thirty ratings are exactly the raw
 * histogram in PmsDistribution, so the two must move together.
 *
 * The cells are `aria-hidden` and each row carries a spoken sentence instead,
 * because thirty single-digit spans read as noise.
 */
export function PmsRatingStrips() {
  return (
    <ul className="pmss">
      {PMS_RATING_STRIPS.map((strip) => (
        <li className="pmss__r" key={strip.manager}>
          <span className="pmss__who">
            {strip.manager}
            <i>{strip.reports}</i>
          </span>
          <span>
            <span className="pmss__cells" aria-hidden="true">
              {strip.ratings.map((r, i) => {
                const tone = stripTone(r);
                return (
                  <span className={tone ? `pmss__c pmss__c--${tone}` : 'pmss__c'} key={i}>
                    {r}
                  </span>
                );
              })}
            </span>
            <span className="pmss__sum">{strip.summary}</span>
            <span className="sr">{strip.spoken}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
