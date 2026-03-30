import React, { useState, useEffect } from 'react';
import './VideoLoader.css';

const VideoLoader = ({ onComplete }) => {
  const [canEnter, setCanEnter] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Allow entry after 2 seconds automatically to protect against video load fails
    const timer = setTimeout(() => {
      setCanEnter(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <div className={`vl-screen ${isFading ? 'fade-out' : ''}`}>
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="vl-video"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="vl-overlay"></div>
      
      <div className="vl-content">
        <div className="vl-brand">BEST IN B2B</div>
        {canEnter && (
          <button className="vl-enter-btn" onClick={handleEnter}>
            GRAB YOUR MICROPHONE <span className="arr">→</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoLoader;
