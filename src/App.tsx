import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

export const App: React.FC = () => {
  return (
    <div className="app-viewport">
      <div className="portfolio-shell">
        {/* Top Minimal Navigation Bar */}
        <Navbar activeSection="home" />

        {/* Portfolio Content Container */}
        <main className="page-container">
          {/* Phase 2 & 3: Hero Section with 3D Depth */}
          <Hero />

          {/* Phase 4: About Section */}
          <About />

          {/* Remaining Section Anchor Placeholders */}
          <section id="projects" style={{ minHeight: '1px' }} />
          <section id="skills" style={{ minHeight: '1px' }} />
          <section id="experience" style={{ minHeight: '1px' }} />
          <section id="contact" style={{ minHeight: '1px' }} />
        </main>
      </div>
    </div>
  );
};

export default App;
