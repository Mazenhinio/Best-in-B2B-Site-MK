import React, { useEffect, useRef } from 'react';
import './SeriesAbout.css';

const SeriesAbout = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section className="s-about-series" id="about-series">
      <div className="about-bg">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="about-bg-vid"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="about-overlay"></div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="editorial-label reveal" ref={addToRefs}>02 // THE MANDATE</div>
          <h2 className="reveal" ref={addToRefs}>
            Best in B2B is a <i>filmed leadership series</i>. <br/>
            Invitation only. On location.
          </h2>
          <p className="about-main reveal" ref={addToRefs}>
            Built for the executives who are actually building something. This is a cinema-first production, capturing the weight and texture of C-Suite leadership in DFW.
          </p>
          <div className="about-cta reveal" ref={addToRefs}>
            <a href="#request" className="about-primary-btn">
              Request Consideration <span className="arr">→</span>
            </a>
          </div>
          <div className="about-status reveal" ref={addToRefs}>
            <div className="status-badge">
              <div className="status-dot"></div>
              <span>Season One is underway. The waitlist is open.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesAbout;
