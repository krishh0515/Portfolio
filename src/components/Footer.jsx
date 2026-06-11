import React from 'react';
import { Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-primary)', padding: '3rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container">
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          <Database size={24} color="var(--text-accent)" />
          Krishnaji<span className="text-gradient">.</span>
        </a>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Built with React & Vite. Transforming data into insights.
        </p>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Krishnaji. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
