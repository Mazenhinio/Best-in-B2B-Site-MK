import React from 'react';
import './FooterCTA.css';
import Logo from '../assets/Logo.png';

const FooterCTA = () => {
  return (
    <footer className="s-footer">
      <div className="footer-cta-container">
        <h2>Twelve leaders. One season. <i>One city.</i></h2>
      </div>
      
      <div className="footer-legal">
        <div className="footer-brand">
          <img src={Logo} alt="Best in B2B Logo" className="f-logo" />
        </div>
        <div className="footer-copy">© 2026 Best in B2B Leadership Series. Curated by DFW.</div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#request">Executive Contact</a>
          <a href="#deliverables">Media Kit</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
