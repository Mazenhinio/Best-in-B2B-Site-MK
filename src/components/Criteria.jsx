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
    { title: "Senior Leadership", text: "Founders, CEOs, and C-Suite Executives at established organizations or high-growth ventures.", img: "/Female Executive 2.png" },
    { title: "DFW Based", text: "You must be operating your primary business from the Dallas–Fort Worth metroplex.", img: "/cool-african-mature-businessman-walking-along-the-2026-01-06-10-10-07-utc-removebg-preview.png" },
    { title: "B2B Focused", text: "The core of your value proposition must be business-to-business commerce or services.", img: "/Female Excutive white Power Pose.png" },
    { title: "Point of View", text: "We look for unique perspectives that challenge the consensus of standard business practices.", img: "/Top down shot of Kurd Executive.png" }
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
          <div className="editorial-label">07 // THE STANDARD</div>
          <h2>Who is <i>Invited</i></h2>
        </div>

        <div className="criteria-stage">
          {/* NEW ASYMMETRIC LAYOUT */}
          <div className="crit-split-layout">
            <div className="crit-narrative-rail">
              {criteriaList.map((c, i) => (
                <div key={i} className={`crit-narrative-box ${i === activeIndex ? 'active' : ''}`}>
                  <span className="crit-index">0{i+1}</span>
                  <h3 className="crit-title">{c.title}</h3>
                  <p className="crit-text">{c.text}</p>
                </div>
              ))}
            </div>

            <div className="crit-visual-stage">
              {criteriaList.map((c, i) => (
                <img 
                  key={i} 
                  src={c.img} 
                  alt={c.title} 
                  className={`crit-img-profile ${i === activeIndex ? 'active' : ''}`} 
                />
              ))}
              <div className="crit-floor-shadow"></div>
            </div>
          </div>

          {/* PREVIOUS CENTER-STAGE LAYOUT (COMMENTED)
          <div className="criteria-content-grid">
            <div className="crit-left">
              <div className="crit-anim-wrapper">
                {criteriaList.map((c, i) => (
                  <div key={i} className={`crit-val-box ${i === activeIndex ? 'active' : ''}`}>
                    <span className="crit-index">0{i+1}</span>
                    <h3 className="crit-title">{c.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="crit-center">
              <div className="crit-image-rail">
                {criteriaList.map((c, i) => (
                  <img 
                    key={i} 
                    src={c.img} 
                    alt={c.title} 
                    className={`crit-img-profile ${i === activeIndex ? 'active' : ''}`} 
                  />
                ))}
              </div>
              <div className="crit-floor-glow"></div>
            </div>

            <div className="crit-right">
              <div className="crit-anim-wrapper">
                {criteriaList.map((c, i) => (
                  <div key={i} className={`crit-desc-box ${i === activeIndex ? 'active' : ''}`}>
                    <p className="crit-text">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          */}
          
          <div className="criteria-nav">
             {criteriaList.map((_, i) => (
               <button 
                key={i} 
                onClick={() => setActiveIndex(i)} 
                className={`crit-dot ${i === activeIndex ? 'active' : ''}`}
               >
                 <span className="dot-line"></span>
                 <span className="dot-num">0{i+1}</span>
               </button>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
