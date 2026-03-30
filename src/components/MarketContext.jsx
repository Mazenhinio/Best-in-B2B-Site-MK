import React, { useEffect, useRef, useState } from 'react';
import './MarketContext.css';

const MarketContext = () => {
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
    <section ref={sectionRef} className={`s-market reveal ${isVisible ? 'active' : ''}`}>
      <div className="sm-grid">
        <div className="sm-item">
          <div className="sm-stat">#1</div>
          <div className="sm-lbl">Ranked U.S. market for commercial real estate investment</div>
        </div>
        <div className="sm-item">
          <div className="sm-stat">100+</div>
          <div className="sm-lbl">Corporate headquarters relocated to DFW since 2020</div>
        </div>
        <div className="sm-item">
          <div className="sm-stat">$1.6B</div>
          <div className="sm-lbl">B2B marketing spend concentrated in the region annually</div>
        </div>
      </div>
      <div className="sm-thesis">
        DFW is no longer just a hub; it is the center of gravity for American business infrastructure. Yet the leaders orchestrating this growth remain largely undocumented. We are fixing that.
      </div>
    </section>
  );
};

export default MarketContext;
