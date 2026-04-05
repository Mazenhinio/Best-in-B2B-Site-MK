import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nlogo">
        <img src="/Logo.png" alt="Best in B2B" className="nav-logo-wordmark" />
      </div>
      
      <div className="nmenu">
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
      </div>
    </nav>
  );
};

export default Nav;
