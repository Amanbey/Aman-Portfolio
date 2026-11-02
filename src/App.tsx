import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

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

          {/* Phase 5: Projects Section */}
          <Projects />

          {/* Phase 6: Skills & Experience Sections */}
          <Skills />
          <Experience />

          {/* Remaining Section Anchor Placeholder */}
          <section id="contact" style={{ minHeight: '1px' }} />
        </main>
      </div>
    </div>
  );
};

export default App;
