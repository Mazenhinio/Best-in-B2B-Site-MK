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
      <div className="cta-head">YOU BUILD THE MARKET.<br/>WE BUILD THE RECORD.</div>
      <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Your corporate email..." required />
        <button type="submit" className="cta-btn">REQUEST ACCESS <span>→</span></button>
      </form>
      <div className="foot-wrap">
        <div className="foot-copy">© 2026 Best in B2B. A DFW Initiative.</div>
        <div className="foot-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
