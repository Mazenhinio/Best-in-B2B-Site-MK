import React, { useEffect, useRef } from 'react';
import './Criteria.css';

const Criteria = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const criteriaList = [
    { 
      title: "Senior Leadership", 
      subtitle: "Founders & C-Suite",
      text: "Founders, CEOs, and C-Suite Executives at established organizations or high-growth ventures.", 
      img: "/Female Executive 2.png",
      color: "linear-gradient(135deg, #0a1128 0%, #000 100%)" // Navy
    },
    { 
      title: "DFW Based", 
      subtitle: "North Texas Native",
      text: "You must be operating your primary business from the Dallas–Fort Worth metroplex.", 
      img: "/cool-african-mature-businessman-walking-along-the-2026-01-06-10-10-07-utc-removebg-preview.png",
      color: "linear-gradient(135deg, #1a1a1a 0%, #000 100%)" // Charcoal
    },
    { 
      title: "B2B Focused", 
      subtitle: "Enterprise Core",
      text: "The core of your value proposition must be business-to-business commerce or services.", 
      img: "/Female Excutive white Power Pose.png",
      color: "linear-gradient(135deg, #2c1810 0%, #000 100%)" // Brown
    },
    { 
      title: "Perspective", 
      subtitle: "Something Worth Saying",
      text: "We look for unique perspectives that challenge the consensus of standard business practices.", 
      img: "/Top down shot of Kurd Executive.png",
      color: "linear-gradient(135deg, #141e14 0%, #000 100%)" // Deep Green/Charcoal
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % criteriaList.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [criteriaList.length]);

  return (
    <section className="s-criteria" id="criteria">
      <div className="criteria-container">
        <div className="criteria-header reveal" ref={addToRefs}>
          <div className="editorial-label black-bg">07 // THE STANDARD</div>
          <h2>Who is <i>Invited</i></h2>
          <p className="criteria-intro">We are looking for the architects of the DFW B2B landscape. Those who lead with substance over noise.</p>
        </div>

        <div className="criteria-stage">
          <div className="forbes-carousel">
            {criteriaList.map((c, i) => (
              <div 
                key={i} 
                className={`forbes-card ${i === activeIndex ? 'active' : ''}`}
                style={{ background: c.color }}
              >
                <div className="card-logo-wrap">
                   <img src="/Logo.png" alt="Best in B2B" className="card-brand-logo" />
                </div>
                
                <div className="card-visual">
                  <img src={c.img} alt={c.title} className="card-profile-img" />
                </div>

                <div className="card-content">
                  <span className="card-sub">{c.subtitle}</span>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-desc">{c.text}</p>
                </div>

                <div className="card-issue-meta">
                   <span>SEASON ONE</span>
                   <span>DFW EDITION</span>
                   <span>2026 ISSUE</span>
                </div>
              </div>
            ))}
          </div>

          <div className="forbes-nav">
             {criteriaList.map((_, i) => (
               <button 
                key={i} 
                onClick={() => setActiveIndex(i)} 
                className={`forbes-dot ${i === activeIndex ? 'active' : ''}`}
               >
                 <span className="dot-line"></span>
                 <span className="dot-label">0{i+1}</span>
               </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
