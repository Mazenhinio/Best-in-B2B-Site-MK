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
      <div className="cr-top">
        <div className="cr-label">The Guest Standard</div>
        <h2 className="cr-headline">Not every leader will be invited.</h2>
        <p className="cr-intro"><i>Season One is limited to twelve. We are deliberate about who sits in that seat.</i></p>
      </div>
      <div className="cr-grid">
        <div className="cr-card">
          <h4>You lead, not manage.</h4>
          <p>CMO, VP of Marketing, CEO, Founder. You are the person who sets the strategy, makes the call, and owns the outcome. Not the person who executes someone else's vision.</p>
        </div>
        <div className="cr-card mt">
          <h4>You are physically in DFW.</h4>
          <p>Not your company's registered address. You — in the room, in the market, in the community. Allen, Plano, Frisco, Irving, Dallas, Fort Worth. We film here because the story is here.</p>
        </div>
        <div className="cr-card">
          <h4>You sell to businesses.</h4>
          <p>B2B is the only category we cover. SaaS, technology, professional services, fintech, industrial tech. Mid-market and above. Companies with real customers and real revenue.</p>
        </div>
        <div className="cr-card mt">
          <h4>You have something worth saying.</h4>
          <p>You've built something. Navigated something hard. You hold a perspective on marketing, growth, or leadership that the room hasn't heard yet. That is the only credential that truly matters here.</p>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
