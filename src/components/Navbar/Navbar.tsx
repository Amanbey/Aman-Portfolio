import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';
import BrandLogo from '../common/BrandLogo';
import './Navbar.css';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [currentSection, setCurrentSection] = useState(activeSection);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setCurrentSection(activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <BrandLogo size={32} />

        {/* Desktop Nav Items */}
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  onClick={() => setCurrentSection(item.id)}
                >
                  {item.label}
                  {isActive && <span className="nav-indicator" />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right CTA: Download CV */}
        <div className="nav-actions">
          <a
            href="/assets/Aman_Abdela_CV.pdf"
            download="Aman_Abdela_CV.pdf"
            className="btn-download-cv"
            aria-label="Download Aman Abdela CV"
          >
            <span>Download CV</span>
            <Download size={15} strokeWidth={2.2} className="download-icon" />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${currentSection === item.id ? 'mobile-nav-link-active' : ''}`}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-cv-item">
              <a
                href="/assets/Aman_Abdela_CV.pdf"
                download="Aman_Abdela_CV.pdf"
                className="btn-download-cv mobile-cv-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Download CV</span>
                <Download size={15} strokeWidth={2.2} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

