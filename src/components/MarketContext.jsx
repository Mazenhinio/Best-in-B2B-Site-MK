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
      <div className="sm-eyebrow">
        <div className="eb-line"></div>
        <span>Why Now</span>
      </div>
      <h2 className="sm-headline">Dallas–Fort Worth is having its moment. Its leaders should be heard.</h2>
      <div className="sm-grid">
        <div className="sm-item">
          <div className="sm-stat">#1</div>
          <div className="sm-lbl">North American tech hub, 2025. DFW has surpassed every market except one. The executives building here are operating at a level the rest of the country is still catching up to.</div>
        </div>
        <div className="sm-item">
          <div className="sm-stat">100</div>
          <div className="sm-lbl">Corporate headquarters have relocated to DFW in six years. The business community here is not emerging. It has emerged. And its leaders have no unified editorial voice.</div>
        </div>
        <div className="sm-item">
          <div className="sm-stat">$1.6B</div>
          <div className="sm-lbl">Raised by Dallas startups in 2025 alone. The capital is here. The companies are here. The talent is here. The platform hasn't been, until now.</div>
        </div>
      </div>
    </section>
  );
};

export default MarketContext;
