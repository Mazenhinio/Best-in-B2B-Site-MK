import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-text">
          THE DEFINITIVE B2B LEADERSHIP SERIES · DALLAS–FORT WORTH · SEASON ONE · 
          THE DEFINITIVE B2B LEADERSHIP SERIES · DALLAS–FORT WORTH · SEASON ONE ·
        </span>
        {/* Duplicate for seamless scrolling */}
        <span className="marquee-text">
          THE DEFINITIVE B2B LEADERSHIP SERIES · DALLAS–FORT WORTH · SEASON ONE · 
          THE DEFINITIVE B2B LEADERSHIP SERIES · DALLAS–FORT WORTH · SEASON ONE ·
        </span>
      </div>
    </div>
  );
};

export default Marquee;
