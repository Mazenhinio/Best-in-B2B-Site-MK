import React, { useEffect, useRef, useState } from 'react';
import './FAQ.css';

const FAQ = () => {
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

  const toggleFAQ = (e) => {
    const item = e.currentTarget;
    const body = item.querySelector('.faq-body');
    const wasOpen = body.style.height !== '0px' && body.style.height !== '';

    // Close all others
    document.querySelectorAll('.faq-body').forEach(b => {
      b.style.height = '0px';
      b.parentElement.classList.remove('open');
    });

    if (!wasOpen) {
      body.style.height = body.scrollHeight + 'px';
      item.classList.add('open');
    }
  };

  return (
    <section ref={sectionRef} className={`s-faq reveal ${isVisible ? 'active' : ''}`}>
      <div className="faq-h">FAQ</div>
      
      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">WHAT IS REVENUE REQUIREMENT?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            We target mid-market to enterprise footprint size. Scale serves as a proxy for operational complexity, which drives the depth of conversation we require. If you are early-stage but hold dominant market share or high-tier institutional backing, you may request consideration.
          </div>
        </div>
      </div>

      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">WHO CONTROLS EDITORIAL?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            We do. You have approval rights to ensure material non-public or sensitive strategic information is masked, but the narrative arc remains independent. This creates the trust density required by our audience.
          </div>
        </div>
      </div>
      
      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">WHERE DOES THIS LIVE?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            Episodes are distributed directly to our curated list of 10,000+ corporate decision-makers, pushed across LinkedIn via high-production cuts, and archived on the central Best in B2B platform.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
