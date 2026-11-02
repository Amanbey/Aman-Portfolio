import React, { useState, useEffect } from 'react';
import StatsPanel from './StatsPanel';
import './HeroVisual.css';

export const HeroVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hero-visual-container">
      {/* 1. Deep Volumetric Ambient Glow */}
      <div
        className="visual-ambient-glow"
        style={{
          transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
        }}
      />

      {/* 2. Translucent 3D Triangular Geometry (Behind Subject) */}
      <div
        className="prism-geometry-wrapper"
        style={{
          transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)`,
        }}
      >
        <svg
          viewBox="0 0 400 440"
          className="prism-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="prismEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#36F5E3" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#20E6B1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B3830" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="prismFaceGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="rgba(54, 245, 227, 0.28)" />
              <stop offset="100%" stopColor="rgba(6, 25, 26, 0.15)" />
            </linearGradient>

            <linearGradient id="prismFaceGrad2" x1="80%" y1="0%" x2="20%" y2="100%">
              <stop offset="0%" stopColor="rgba(32, 230, 177, 0.2)" />
              <stop offset="100%" stopColor="rgba(2, 9, 11, 0.6)" />
            </linearGradient>

            <filter id="prismGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Faceted Translucent 3D Prism Structure */}
          {/* Main front-left facet */}
          <polygon
            points="200,30 60,380 200,340"
            fill="url(#prismFaceGrad1)"
            stroke="url(#prismEdgeGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Front-right facet */}
          <polygon
            points="200,30 200,340 340,380"
            fill="url(#prismFaceGrad2)"
            stroke="url(#prismEdgeGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Internal crystalline bevel edges */}
          <line
            x1="200"
            y1="30"
            x2="200"
            y2="340"
            stroke="#36F5E3"
            strokeWidth="4"
            filter="url(#prismGlow)"
          />
          {/* Lower foundation facet */}
          <polygon
            points="60,380 200,340 340,380 200,410"
            fill="rgba(8, 30, 32, 0.4)"
            stroke="rgba(32, 230, 177, 0.4)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* 3. Floating Transparent Glass Cube */}
      <div
        className="floating-glass-cube-wrapper"
        style={{
          transform: `translate(${mousePos.x * -22}px, ${mousePos.y * -22}px)`,
        }}
      >
        <div className="glass-cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
          <div className="cube-inner-glow" />
        </div>
      </div>

      {/* 4. Subject Portrait (Aman Abdela) with Seamless Mask */}
      <div
        className="hero-portrait-frame"
        style={{
          transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`,
        }}
      >
        <div className="portrait-image-wrapper">
          <img
            src="/assets/reference.jpg"
            alt="Aman Abdela — Software Engineer"
            className="portrait-reference-blend"
          />
          <div className="portrait-lighting-overlay" />
        </div>
      </div>

      {/* 5. Luminous Turquoise Orbital Ring (Sweeping in front) */}
      <div
        className="orbital-ring-wrapper"
        style={{
          transform: `translate(${mousePos.x * 14}px, ${mousePos.y * 14}px) rotate(-14deg)`,
        }}
      >
        <div className="orbital-ring-track">
          <div className="orbital-ring-glow" />
          <div className="orbital-ring-crescent" />
        </div>
      </div>

      {/* 6. Floating Glass Statistics Panel */}
      <div
        className="hero-stats-wrapper"
        style={{
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
        }}
      >
        <StatsPanel
          projectsCount="5+"
          projectsLabel="Projects"
          experienceCount="1+"
          experienceLabel="Years Exp."
        />
      </div>
    </div>
  );
};

export default HeroVisual;
