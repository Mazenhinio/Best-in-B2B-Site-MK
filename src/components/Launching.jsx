import React from 'react';
import './Launching.css';

const Launching = () => {
  return (
    <section className="s-launching">
      <div className="launch-container">
        <div className="launch-eyebrow">
          <span className="line"></span>
          PREMIERING
          <span className="line"></span>
        </div>
        
        <h2 className="launch-title">
          Launching <i>May 2026</i>
        </h2>
        
        <p className="launch-sub">Available on all major platforms</p>
        
        <div className="platform-grid">
          <div className="platform-item">
            <div className="p-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <span>YOUTUBE</span>
          </div>
          <div className="platform-item">
            <div className="p-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.508 17.302c-.218.358-.68.471-1.038.254-2.853-1.742-6.443-2.136-10.674-1.17-.411.094-.816-.164-.91-.575-.094-.411.164-.816.575-.91 4.636-1.059 8.605-.606 11.793 1.339.358.218.471.68.254 1.038zm1.468-3.258c-.274.446-.856.586-1.302.312-3.264-1.996-8.232-2.585-12.088-1.414-.504.153-1.042-.134-1.196-.638-.153-.504.134-1.042.638-1.196 4.407-1.336 9.888-.679 13.636 1.611.446.274.586.856.312 1.302zm.126-3.41c-3.916-2.325-10.374-2.54-14.138-1.396-.6.182-1.236-.165-1.418-.765-.182-.6.165-1.236.765-1.418 4.316-1.31 11.436-1.049 15.938 1.624.538.32.715 1.012.395 1.55-.32.538-1.012.715-1.55.395l.008.01z"/></svg>
            </div>
            <span>SPOTIFY</span>
          </div>
          <div className="platform-item">
            <div className="p-icon">
              <img src="/apple-podcasts-logo-0.webp" alt="Apple Podcasts" />
            </div>
            <span>APPLE PODCASTS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Launching;
