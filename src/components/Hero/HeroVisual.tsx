import React, { useState, useEffect } from 'react';
import StatsPanel from './StatsPanel';
import HeroSceneCanvas from '../HeroScene/HeroSceneCanvas';
import './HeroVisual.css';

export const HeroVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        }}
      />

      {/* 2. Interactive Three.js WebGL 3D Scene */}
      <HeroSceneCanvas />

      {/* 3. Subject Portrait Frame (Aman Abdela) with Seamless Blend */}
      <div
        className="hero-portrait-frame"
        style={{
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
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

      {/* 4. Foreground Glass Statistics Panel */}
      <div
        className="hero-stats-wrapper"
        style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`,
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
