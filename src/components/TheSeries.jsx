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
    <section id="the-series" ref={sectionRef} className="s-series">
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
        
        <div className="script-layout">
          <div className="script-para roll-item" ref={addToRefs}>
            <p className="leadin-text">Standard media reacts to what happened yesterday. We capture how you are <span className="mark-hl">building tomorrow</span>. Best in B2B is a production documenting the <span className="mark-hl">strategy and foresight</span> of the heavy-hitters actively scaling the North Texas ecosystem. This is about the <span className="mark-hl">frameworks</span> you are deploying right now and the high-fidelity proof that you aren't just observing the change—you are <span className="mark-hl">driving it</span>.</p>
          </div>

          <div className="script-para roll-item" ref={addToRefs}>
            <p>We don't do remote calls or audio-only shortcuts. We bring a <span className="mark-hl">cinema-grade crew</span> to your office or a curated studio to showcase the <span className="mark-hl">authority and momentum</span> of your leadership in real-time. We record the <span className="mark-hl">market shifts</span> you see coming, establishing your record as a <span className="mark-hl">permanent position</span> in the B2B community.</p>
          </div>
        </div>

        <div className="quote-wrap roll-item" ref={addToRefs}>
          <blockquote className="quote-main">
            "The B2B leaders who win the next five years are the ones currently documenting their vision. Credibility in this market is built on record, not on rumors."
          </blockquote>
          <cite className="quote-cite">— Series Curator, Leadership Council, DFW</cite>
        </div>
      </div>
    </section>
  );
};

export default TheSeries;
