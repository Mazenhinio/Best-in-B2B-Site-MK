import React, { useEffect, useRef } from 'react';
import './TheSeries.css';

const TheSeries = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    // 1. Reveal Animation (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -5% 0px', threshold: 0.05 });

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="s-series">
      {/* Editorial Background visual restored to image */}
      <div className="series-bg">
        <img src="/series-bg.png" alt="DFW Office" />
        <div className="series-overlay"></div>
      </div>

      <div className="series-content paper-layer">
        <div className="editorial-label">01 // THE SERIES</div>
        
        <h2 className="roll-item" ref={addToRefs}>
          THIS IS NOT A PODCAST.<br/><i>THIS IS A RECORD.</i>
        </h2>

        <div className="series-subheadline roll-item" ref={addToRefs}>
          The first corporate video podcast that <i>comes to your office</i>.
        </div>
        
        <div className="script-layout">
          <div className="script-para roll-item" ref={addToRefs}>
            <p className="leadin-text">Standard media captures the moment. We capture the <span className="mark-hl">strategy</span>. Best in B2B is an <span className="mark-hl">archival project</span> documenting the <span className="mark-hl">heavy-hitters</span> who move the needle in the North Texas B2B ecosystem.</p>
          </div>

          <div className="script-para roll-item" ref={addToRefs}>
            <p>We don't do remote calls. We don't do audio-only. We bring a <span className="mark-hl">cinema-grade crew</span> to <span className="mark-hl">your office</span> or a curated studio to record the <span className="mark-hl">legacy</span> of your leadership.</p>
          </div>
        </div>

        <div className="quote-wrap roll-item" ref={addToRefs}>
          <blockquote className="quote-main">
            "The most valuable B2B insights aren't shared on LinkedIn threads. They are shared in the quiet moments between the people actually doing the work."
          </blockquote>
          <cite className="quote-cite">— Series Curator, Leadership Council, DFW</cite>
        </div>
      </div>
    </section>
  );
};

export default TheSeries;
