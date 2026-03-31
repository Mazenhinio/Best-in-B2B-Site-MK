import React, { useEffect, useRef, useState } from 'react';
import './FooterCTA.css';

const FooterCTA = () => {
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
    <section ref={sectionRef} className={`s-end reveal ${isVisible ? 'active' : ''}`}>
      <div className="cta-head">Twelve leaders. One record. Dallas-Fort Worth.</div>
      <div className="cta-sub" style={{fontStyle: 'italic', marginBottom: '2rem', color: 'var(--c80)'}}>The room is being set. The question is whether your name is in it.</div>
      <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your business email" required />
        <button type="submit" className="cta-btn">Request Consideration</button>
      </form>
      <div className="cta-micro" style={{fontSize: '0.8rem', marginTop: '1rem', color: 'var(--c50)'}}>Reviewed personally · 72-hour response · DFW only</div>
      <div className="foot-wrap" style={{marginTop: '6rem'}}>
        <div className="foot-copy">Best in B2B</div>
        <div className="foot-links">
          <span>Dallas-Fort Worth</span>
          <span>·</span>
          <span>Season One</span>
          <span>·</span>
          <span>b2bbest.show</span>
        </div>
        <div className="foot-copy">© 2026 EXL Ventures LLC</div>
      </div>
    </section>
  );
};

export default FooterCTA;
