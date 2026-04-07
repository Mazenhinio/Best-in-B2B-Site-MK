import React, { useState, useEffect } from 'react';
import './Nav.css';
import Logo from '../assets/Logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={isMenuOpen ? 'nav-open' : ''}>
        <div className="nlogo">
          <a href="#hero" onClick={closeMenu}>
            <img src={Logo} alt="Best in B2B" className="nav-logo-wordmark" />
          </a>
        </div>
        
        <div className="nmenu">
          <a href="#hero" className="nlink">HOME</a>
          <a href="#about-series" className="nlink">ABOUT</a>
          <a href="#the-series" className="nlink">SERIES</a>
          <a href="#market-context" className="nlink">WHY NOW</a>
          <a href="#criteria" className="nlink">CRITERIA</a>
          <a href="#faq" className="nlink">FAQ</a>
        </div>

        <div className="nright">
          <div className="nstatus">
            <div className="npulse"></div>
            <span>SEASON ONE · DFW · LAUNCHING MAY 2026</span>
          </div>
          <a href="#request" className="ncta">Request Consideration →</a>
          
          <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-links">
            <a href="#hero" className="m-link" onClick={closeMenu}>HOME</a>
            <a href="#about-series" className="m-link" onClick={closeMenu}>ABOUT</a>
            <a href="#the-series" className="m-link" onClick={closeMenu}>SERIES</a>
            <a href="#market-context" className="m-link" onClick={closeMenu}>WHY NOW</a>
            <a href="#criteria" className="m-link" onClick={closeMenu}>CRITERIA</a>
            <a href="#faq" className="m-link" onClick={closeMenu}>FAQ</a>
          </div>
          
          <div className="mobile-menu-footer">
            <a href="#request" className="ncta m-cta" onClick={closeMenu}>Request Consideration →</a>
            <div className="m-status">
              <div className="npulse"></div>
              <span>SEASON ONE · DFW · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
