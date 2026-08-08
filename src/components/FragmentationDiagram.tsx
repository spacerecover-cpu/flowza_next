'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { Tag } from '@/components/Tag';

interface Tile {
  label: string;
  x: string;
  y: string;
  r: string;
  gx: string;
  gy: string;
}

const TILES: Tile[] = [
  { label: 'CRM', x: '14%', y: '22%', r: '-7deg', gx: '10%', gy: '18%' },
  { label: 'Accounting', x: '38%', y: '12%', r: '5deg', gx: '30%', gy: '18%' },
  { label: 'Payroll', x: '63%', y: '19%', r: '-4deg', gx: '50%', gy: '18%' },
  { label: 'Inventory', x: '86%', y: '14%', r: '8deg', gx: '70%', gy: '18%' },
  { label: 'Helpdesk', x: '22%', y: '41%', r: '6deg', gx: '90%', gy: '18%' },
  { label: 'E-signature', x: '47%', y: '36%', r: '-9deg', gx: '10%', gy: '50%' },
  { label: 'BI tool', x: '74%', y: '44%', r: '3deg', gx: '30%', gy: '50%' },
  { label: 'Procurement', x: '12%', y: '62%', r: '-5deg', gx: '50%', gy: '50%' },
  { label: 'Projects', x: '34%', y: '73%', r: '7deg', gx: '70%', gy: '50%' },
  { label: 'Expenses', x: '58%', y: '66%', r: '-6deg', gx: '90%', gy: '50%' },
  { label: 'Scheduling', x: '82%', y: '76%', r: '4deg', gx: '10%', gy: '82%' },
  { label: 'Warehouse', x: '26%', y: '88%', r: '-3deg', gx: '30%', gy: '82%' },
  { label: 'Payments', x: '52%', y: '92%', r: '6deg', gx: '50%', gy: '82%' },
  { label: 'Spreadsheets', x: '70%', y: '88%', r: '-8deg', gx: '70%', gy: '82%' },
];

export interface FragmentationDiagramProps {
  className?: string;
}

export function FragmentationDiagram({ className }: FragmentationDiagramProps) {
  const [unified, setUnified] = useState(false);
  const fragRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = fragRef.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = reduced ? 0 : 900;
            setTimeout(() => setUnified(true), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <div>
      <div
        ref={fragRef}
        className={`frag${unified ? ' is-unified' : ''}${className ? ` ${className}` : ''}`}
        id="frag"
      >
        <div className="frag__net" aria-hidden="true" />
        <div className="frag__badge">
          <Tag variant={unified ? 'sig' : 'default'} id="fragTag">
            {unified ? 'One layer underneath' : 'Fourteen tools, no common ground'}
          </Tag>
        </div>

        {/* messy wires */}
        <svg className="frag__wires frag__wires--mess" viewBox="0 0 500 312" preserveAspectRatio="none" aria-hidden="true">
          <g stroke="rgba(154,86,11,.42)" strokeWidth="1" fill="none" strokeDasharray="3 3">
            <path d="M70 60 C170 20 240 150 330 70" />
            <path d="M120 250 C200 190 280 280 400 210" />
            <path d="M60 160 C160 210 200 60 380 130" />
            <path d="M180 40 C260 130 120 230 320 270" />
            <path d="M420 60 C340 160 460 200 250 120" />
            <path d="M90 110 C220 250 300 40 440 160" />
          </g>
        </svg>

        {/* clean wires */}
        <svg className="frag__wires frag__wires--clean" viewBox="0 0 500 312" preserveAspectRatio="none" aria-hidden="true">
          <g stroke="rgba(10,95,66,.5)" strokeWidth="1" fill="none">
            <path d="M50 56 V156 H450" />
            <path d="M145 56 V156" />
            <path d="M250 56 V156" />
            <path d="M355 56 V156" />
            <path d="M50 250 V156" />
            <path d="M145 250 V156" />
            <path d="M250 250 V156" />
            <path d="M355 250 V156" />
            <path d="M450 250 V156" />
          </g>
        </svg>

        {TILES.map((tile) => (
          <div
            key={tile.label}
            className="tile"
            style={
              {
                '--x': tile.x,
                '--y': tile.y,
                '--r': tile.r,
                '--gx': tile.gx,
                '--gy': tile.gy,
              } as React.CSSProperties
            }
          >
            {tile.label}
          </div>
        ))}
      </div>

      <div className="frag__ctrl">
        <button
          className={`chip${!unified ? ' is-on' : ''}`}
          aria-pressed={!unified}
          onClick={() => setUnified(false)}
        >
          Today
        </button>
        <button
          className={`chip${unified ? ' is-on' : ''}`}
          aria-pressed={unified}
          onClick={() => setUnified(true)}
        >
          On Flowza
        </button>
        <span className="tiny" style={{ marginLeft: 'auto' }}>14 tools · 1 business</span>
      </div>
    </div>
  );
}
