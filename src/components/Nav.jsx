import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nlogo">
        <img src="/Logo shield only.png" alt="Shield" className="nav-logo-shield" />
      </div>
      <div className="ncenter">
        <div className="npulse"></div>
        SEASON ONE · DALLAS – FORT WORTH · LIMITED TO TWELVE
      </div>
      <div className="nright">
        <a href="#request" className="ncta">Request Consideration →</a>
      </div>
    </nav>
  );
};

export default Nav;
