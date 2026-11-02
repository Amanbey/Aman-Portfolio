import React from 'react';

interface BrandLogoProps {
  size?: number;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 32, showText = true }) => {
  return (
    <a href="#home" className="brand-logo" aria-label="Aman Abdela Home">
      <div className="brand-mark-wrapper" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="brandMarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#36F5E3" />
              <stop offset="100%" stopColor="#20E6B1" />
            </linearGradient>
            <filter id="markGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#20E6B1" floodOpacity="0.4" />
            </filter>
          </defs>
          {/* Geometric A Chevron with crossbar */}
          <path
            d="M6 33L18.5 7H21.5L34 33H26.8L20 18.5L13.2 33H6Z"
            fill="url(#brandMarkGradient)"
            filter="url(#markGlow)"
          />
          <rect
            x="13.5"
            y="24"
            width="13"
            height="4.5"
            rx="1.5"
            fill="url(#brandMarkGradient)"
          />
        </svg>
      </div>

      {showText && (
        <span className="brand-text">
          Aman Abdela
        </span>
      )}
    </a>
  );
};

export default BrandLogo;
