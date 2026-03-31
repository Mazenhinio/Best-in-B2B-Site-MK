import React, { useEffect, useRef, useState } from 'react';
import './Criteria.css';

const CriteriaCard = ({ title, content, asset, label }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div 
      ref={cardRef}
      className={`cr-folder-card cr-${label.toLowerCase()}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
    >
      <div className="cr-card-inner">
        <div className="cr-folder-tab">{label}</div>
        <div className="cr-artifact">
          <img src={asset} alt="" />
        </div>
        <div className="cr-card-content">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div className="cr-folder-corners">
          <div className="cr-c tl"></div><div className="cr-c tr"></div>
        </div>
      </div>
    </div>
  );
};

const Criteria = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setActive(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const items = [
    { 
      label: "LEADERSHIP",
      title: "You lead, not manage.", 
      content: "CMO, VP of Marketing, CEO, Founder. You are the person who sets the strategy, makes the call, and owns the outcome. Not the person who executes someone else's vision.",
      asset: "/criteria_1.png"
    },
    { 
      label: "LOCATION",
      title: "You are physically in DFW.", 
      content: "Not your company's registered address. You — in the room, in the market, in the community. Allen, Plano, Frisco, Irving, Dallas, Fort Worth. We film here because the story is here.",
      asset: "/criteria_2.png"
    },
    { 
      label: "CATEGORY",
      title: "You sell to businesses.", 
      content: "B2B is the only category we cover. SaaS, technology, professional services, fintech, industrial tech. Mid-market and above. Companies with real customers and real revenue.",
      asset: "/criteria_3.png"
    },
    { 
      label: "PERSPECTIVE",
      title: "You have something worth saying.", 
      content: "You've built something. Navigated something hard. You hold a perspective on marketing, growth, or leadership that the room hasn't heard yet. That is the only credential that truly matters here.",
      asset: "/criteria_4.png"
    }
  ];

  return (
    <section ref={sectionRef} className={`s-criteria ${active ? 'active' : ''}`}>
      <div className="cr-desk-bg"></div>
      <div className="cr-container">
        <div className="cr-header">
          <div className="cr-eyebrow">
            <div className="cre-line"></div>
            <span>THE GUEST STANDARD</span>
          </div>
          <h2 className="cr-title">NOT EVERY LEADER <br />WILL BE INVITED.</h2>
          <p className="cr-subtitle">Season One is limited to twelve. We are deliberate about who sits in that seat.</p>
        </div>

        <div className="cr-folders-grid">
          {items.map((item, idx) => (
            <CriteriaCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Criteria;
