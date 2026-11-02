import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import HeroVisual from './HeroVisual';
import SocialLinks from './SocialLinks';
import './Hero.css';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      <div className="hero-grid">
        {/* LEFT ZONE: Brand copy, badges, CTAs, socials, scroll indicator */}
        <div className="hero-content">
          {/* Badge: Software Engineer */}
          <div className="hero-badge">
            <span className="badge-pulse-dot" aria-hidden="true" />
            <span className="badge-text">Software Engineer</span>
          </div>

          {/* Main Hero Headings */}
          <div className="hero-heading-group">
            <h1 className="hero-heading-lead">Hi, I'm</h1>
            <h2 className="hero-heading-name">
              Aman <span className="hero-name-highlight">Abdela</span>
            </h2>
          </div>

          {/* Supporting Statement */}
          <p className="hero-statement">
            Building intelligent software<br />
            that solves real-world problems.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-cta-group">
            {/* Primary Button */}
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              aria-label="Explore My Work"
            >
              <span>Explore My Work</span>
              <ArrowRight size={17} strokeWidth={2.4} className="cta-arrow-icon" />
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              aria-label="Contact Me"
            >
              <span>Contact Me</span>
              <Mail size={16} strokeWidth={2} className="cta-mail-icon" />
            </a>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials-wrapper">
            <SocialLinks />
          </div>

          {/* Scroll Down Indicator */}
          <div
            className="scroll-down-indicator"
            onClick={() => scrollToSection('about')}
            role="button"
            tabIndex={0}
            aria-label="Scroll Down to next section"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSection('about');
              }
            }}
          >
            <div className="mouse-icon">
              <span className="mouse-wheel" />
            </div>
            <span className="scroll-text">Scroll Down</span>
          </div>
        </div>

        {/* RIGHT ZONE: Portrait, 3D Geometry, Glass Cube, Glowing Ring, Stats Panel */}
        <div className="hero-graphic">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
