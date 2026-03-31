import React, { useEffect, useRef, useState } from 'react';
import './TheSeries.css';

const TheSeries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px', threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`s-series reveal ${isVisible ? 'active' : ''}`}
    >
      <div className="wave-layer">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="wave-bar"></div>
        ))}
      </div>

      <div className="editorial-strip">MASTER TAPE // S01</div>
      
      <h2>
        THIS IS NOT A PODCAST.<br/>THIS IS A RECORD.
      </h2>
      
      <div className="script-layout">
        <div className="script-para">
          <span className="script-label">[ SCENE 01: THE MISSION ]</span>
          <p>Every generation of business leaders gets documented — <i>or doesn't.</i></p>
        </div>

        <div className="script-para">
          <span className="script-label">[ THE CONTEXT ]</span>
          <p>The executives who shape industries and redefine B2B marketing deserve more than a LinkedIn post. They deserve a <span className="mark-hl">platform built for the weight of what they've built.</span></p>
        </div>

        <div className="script-para">
          <span className="script-label">[ DIRECTOR'S NOTE ]</span>
          <p>Best in B2B is that platform. <span className="mark-hl">One conversation. Filmed on location.</span> Produced with the rigor of broadcast. Distributed to the audience that makes decisions.</p>
        </div>
      </div>

      <div className="spotlight-stage">
        <div className="sl-unit sl-unit-left">
          <img src="/spotlight%20right.png" className="sl-img" alt="" />
        </div>

        <div className="quote-wrap">
          <blockquote className="quote-main">
            "You don't get to choose whether the market knows your name. You only get to choose whether they hear it from you."
          </blockquote>
        </div>

        <div className="sl-unit sl-unit-right">
          <img src="/spotlight%20left.png" className="sl-img" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TheSeries;

