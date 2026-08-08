import React from 'react';

export interface TableProps {
  caption: string;
  headers: string[];
  rows: React.ReactNode[][];
  className?: string;
  style?: React.CSSProperties;
}

export function Table({ caption, headers, rows, className, style }: TableProps) {
  const classes = ['tbl', className].filter(Boolean).join(' ');
  return (
    <table className={classes} style={style}>
      <caption className="sr">{caption}</caption>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} scope="col">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => (
              <td key={ci}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
