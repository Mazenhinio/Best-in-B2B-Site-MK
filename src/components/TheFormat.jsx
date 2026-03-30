import React, { useEffect, useRef, useState } from 'react';
import './TheFormat.css';

const TheFormat = () => {
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
    <section id="format-section" ref={sectionRef} className={`s-format reveal ${isVisible ? 'active' : ''}`}>
      <div className="sfo-grid">
        <div className="sfo-left">
          <h3>THE FORMAT</h3>
          <p>This is an editorial undertaking, not a pay-to-play feature.</p>
          <p>We do not accept financial compensation for inclusion. We select you based on the impact you are driving. If selected, our production team travels to your headquarters for a cinematic, 90-minute interview designed to drill into your operating thesis, market maneuvers, and leadership mechanics.</p>
          <p>The result is a broadcast-quality episode distributed across our institutional network.</p>
        </div>
        <div className="sfo-right">
          <ul className="sfo-list">
            <li><span className="sfo-num">01</span> No Pay-to-Play</li>
            <li><span className="sfo-num">02</span> Cinematic Production</li>
            <li><span className="sfo-num">03</span> Executive Distribution</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TheFormat;
