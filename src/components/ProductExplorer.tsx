'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCT_CARDS, ProductTag } from '@/lib/data/products';

type FilterKey = 'all' | ProductTag;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All nine' },
  { key: 'back', label: 'Back office' },
  { key: 'trade', label: 'Trading and guests' },
  { key: 'move', label: 'Movement' },
  { key: 'market', label: 'Marketing' },
];

export function ProductExplorer() {
  const [filter, setFilter] = useState<FilterKey>('all');

  return (
    <div>
      <div
        className="px__filters rv"
        role="group"
        aria-label="Filter products"
      >
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`chip${filter === key ? ' is-on' : ''}`}
            aria-pressed={filter === key}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="px__grid rv" id="pxGrid">
        {PRODUCT_CARDS.map((card) => {
          const hidden = filter !== 'all' && !card.tags.includes(filter as ProductTag);
          return (
            <Link
              key={card.name}
              className={`pcard${hidden ? ' is-hidden' : ''}`}
              href={card.href}
            >
              <span className="pcard__k">{card.kind}</span>
              <span className="pcard__n">{card.name}</span>
              <span className="pcard__d">{card.description}</span>
              <span className="pcard__go">
                Explore <span className="arw">→</span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
