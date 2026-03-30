import React, { useEffect, useRef, useState } from 'react';
import './Criteria.css';

const Criteria = () => {
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
    <section ref={sectionRef} className={`s-criteria reveal ${isVisible ? 'active' : ''}`}>
      <div className="cr-top">WHO IS CONSIDERED</div>
      <div className="cr-grid">
        <div className="cr-card">
          <h4>SCALE</h4>
          <p>Companies generating significant revenue, executing major acquisitions, or securing high-tier institutional capital.</p>
        </div>
        <div className="cr-card mt">
          <h4>IMPACT</h4>
          <p>Leaders building products, logistics, or services that actively rewire how other businesses operate.</p>
        </div>
        <div className="cr-card">
          <h4>GEOGRAPHY</h4>
          <p>Must be headquartered or hold consequential flagship operations within the Dallas–Fort Worth metroplex.</p>
        </div>
        <div className="cr-card mt">
          <h4>EXECUTIVE</h4>
          <p>The featured individual must be a sitting Founder, CEO, or immediate C-suite equivalent.</p>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
