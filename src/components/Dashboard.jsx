import React from 'react';
import { LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Interactive Dashboards</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
            <LayoutDashboard size={20} /> Powered by Power BI & Excel
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          {/* Dashboard Header Mockup */}
          <div style={{ background: 'var(--bg-primary)', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '1rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
          </div>
          
          {/* Dashboard Content Mockup / Placeholder for actual iframe */}
          <div style={{ padding: '2rem', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card)' }}>
            <LayoutDashboard size={64} style={{ color: 'var(--text-secondary)', opacity: 0.3, marginBottom: '1.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Financial Executive Summary</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
              This section is ready to embed live Power BI dashboards. You can use standard iframe embeds generated from Power BI Service, or place high-quality screenshots with links to external interactive versions.
            </p>
            <div className="btn btn-primary" onClick={() => alert('This would open the live dashboard modal.')}>
              Interact with Dashboard
            </div>
            
            {/* Visual mock grid representing a dashboard */}
            <div className="grid grid-cols-3" style={{ width: '100%', marginTop: '3rem', opacity: 0.5 }}>
              <div style={{ height: '100px', background: 'var(--bg-primary)', borderRadius: '8px' }}></div>
              <div style={{ height: '100px', background: 'var(--bg-primary)', borderRadius: '8px' }}></div>
              <div style={{ height: '100px', background: 'var(--bg-primary)', borderRadius: '8px' }}></div>
              <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '8px', gridColumn: 'span 2' }}></div>
              <div style={{ height: '200px', background: 'var(--bg-primary)', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
