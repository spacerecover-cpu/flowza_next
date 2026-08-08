import React from 'react';
import Link from 'next/link';
import { BrandMark } from '@/components/BrandMark';

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div>
            <Link className="brand" href="/" style={{ marginBottom: 'var(--s4)' }}>
              <BrandMark />
              <span className="brand__word">FlowZa</span>
            </Link>
            <p className="tiny" style={{ maxWidth: '34ch' }}>
              Nine cloud applications. One trusted platform. Specialised business software for MEA and India,
              each application independent and priced on its own.
            </p>
            <span className="status" style={{ marginTop: 'var(--s5)' }}>
              <i></i> All systems operational
            </span>
          </div>

          <div>
            <h4>The nine applications</h4>
            <ul>
              <li><Link href="/products/finance">FlowZa Finance</Link></li>
              <li><Link href="/products/logispro">FlowZa LogisPro</Link></li>
              <li><Link href="/products/spamaster">FlowZa Spa Master</Link></li>
              <li><Link href="/products/fleetza">FlowZa Fleetza</Link></li>
              <li><Link href="/products/qrforge">FlowZa QRForge</Link></li>
              <li><Link href="/products/pos">FlowZa POS</Link></li>
              <li><Link href="/products/club">FlowZa Club</Link></li>
              <li><Link href="/products/rentflow">FlowZa RentFlow</Link></li>
              <li><Link href="/products/pms">FlowZa PMS</Link></li>
            </ul>
          </div>

          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/industries">By industry</Link></li>
              <li><Link href="/solutions">By function</Link></li>
              <li><Link href="/industries?sector=retail-hospitality#industry-config">Retail &amp; hospitality</Link></li>
              <li><Link href="/industries?sector=logistics-freight#industry-config">Logistics &amp; freight</Link></li>
              <li><Link href="/solutions/finance">Office of the CFO</Link></li>
              <li><Link href="/solutions">Migration paths</Link></li>
            </ul>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/platform">About the platform</Link></li>
              <li><Link href="/platform#schema">Independent by design</Link></li>
              <li><Link href="/platform#api">Developer API</Link></li>
              <li><Link href="/#ai">AI and agents</Link></li>
              <li><Link href="/#integrations">Integrations</Link></li>
              <li><Link href="/#deployment">Migration</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/company">About FlowZa</Link></li>
              <li><Link href="/company#howwework">How the team works</Link></li>
              <li><Link href="/company#partners">Partners</Link></li>
              <li><Link href="/company#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Trust</h4>
            <ul>
              <li><Link href="/enterprise">Security overview</Link></li>
              <li><Link href="/enterprise#access">Access and identity</Link></li>
              <li><Link href="/enterprise#data">Data and residency</Link></li>
              <li><Link href="/enterprise#assurance">Availability and assurance</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot__bar">
          <span className="foot__legal">© 2026 FlowZa. All rights reserved.</span>
          <span className="foot__legal" style={{ marginLeft: 'auto' }}>
            Concept build — scenario figures and status indicators are illustrative. Published product
            statistics are as supplied.
          </span>
        </div>
      </div>
    </footer>
  );
}
