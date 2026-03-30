import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nlogo">Best in <em>B2B</em></div>
      <div className="nright">
        <div className="npulse"></div>
        Season One &nbsp;·&nbsp; Waitlist Open
      </div>
    </nav>
  );
};

export default Nav;
