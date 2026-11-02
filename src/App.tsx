import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

export const App: React.FC = () => {
  return (
    <div className="app-viewport">
      <div className="portfolio-shell">
        {/* Top Minimal Navigation Bar */}
        <Navbar activeSection="home" />

        {/* Phase 2: Hero Section */}
        <main className="page-container">
          <Hero />

          {/* Section Anchor Placeholders for Navigation Destinations */}
          <section id="about" style={{ minHeight: '1px' }} />
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
