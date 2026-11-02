import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="app-viewport">
      <div className="portfolio-shell">
        {/* Foundation Page Shell */}
        <header style={{
          padding: '24px 36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(80, 240, 210, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Geometric A Mark */}
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <path d="M7 32L18.5 7H21.5L33 32H26.2L20 18.2L13.8 32H7Z" fill="url(#brand-grad)" />
              <rect x="14" y="24" width="12" height="4.5" rx="1.5" fill="url(#brand-grad)" />
              <defs>
                <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#36F5E3" />
                  <stop offset="100%" stopColor="#20E6B1" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Aman Abdela
            </span>
          </div>

          <div style={{
            fontSize: '13px',
            color: 'var(--accent-emerald)',
            background: 'var(--bg-badge)',
            border: '1px solid rgba(32, 230, 177, 0.3)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-emerald)',
              boxShadow: 'var(--glow-emerald)'
            }} />
            Phase 1: Foundation & Design System Active
          </div>
        </header>

        <main style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 24px',
          textAlign: 'center',
          minHeight: '600px'
        }}>
          <div style={{
            maxWidth: '680px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-card)',
            padding: '36px',
            boxShadow: 'var(--shadow-glass)',
            backdropFilter: 'blur(16px)'
          }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              letterSpacing: '-0.03em'
            }}>
              Aman <span style={{
                background: 'var(--gradient-name)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Abdela</span>
            </h1>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}>
              Design System & Architectural Foundation established. Ready for Phase 2: Exact Hero Section reproduction.
            </p>

            {/* Token Swatch Preview */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.04)',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-emerald)', boxShadow: 'var(--glow-emerald)' }} />
                Emerald #20E6B1
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.04)',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-turquoise)', boxShadow: 'var(--glow-turquoise)' }} />
                Turquoise #36F5E3
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.04)',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                color: 'var(--text-secondary)'
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)' }} />
                Frame #02090B
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

