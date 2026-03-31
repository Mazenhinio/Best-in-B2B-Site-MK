import React, { useEffect, useRef } from 'react';
import './TheSeries.css';

const TheSeries = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.05 });

      const els = elementsRef.current;
      els.forEach(el => {
        if (el) observer.observe(el);
      });
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="s-series">
      {/* Film Strip Layer for Crime Scene zigzags */}
      <div className="film-layer">
        <div className="fs-wrap fs-wrap-1">
          <div className="fs-inner fs-1">
            {[...Array(8)].map((_, i) => (
              <img key={i} src="/FILM_STRIP-removebg-preview.png" className="fs-img" alt="" />
            ))}
          </div>
        </div>
        <div className="fs-wrap fs-wrap-2">
          <div className="fs-inner fs-2">
            {[...Array(8)].map((_, i) => (
              <img key={i} src="/FILM_STRIP-removebg-preview.png" className="fs-img" alt="" />
            ))}
          </div>
        </div>
      </div>

      <div className="series-content">
        <div className="editorial-strip">MASTER TAPE // S01</div>
        
        <h2 className="roll-item" ref={addToRefs}>
          THIS IS NOT A PODCAST.<br/>THIS IS A RECORD.
        </h2>
        
        <div className="script-layout">
          <div className="script-para roll-item" ref={addToRefs}>
            <p>Every generation of business leaders gets documented — <i>or doesn't.</i></p>
          </div>

          <div className="script-para roll-item" ref={addToRefs}>
            <p>The executives who shape industries, build categories, and redefine what B2B marketing can do in the most important corporate market in America deserve more than a LinkedIn post. They deserve a <span className="mark-hl">platform built for the weight of what they've built.</span></p>
          </div>

          <div className="script-para roll-item" ref={addToRefs}>
            <p>Best in B2B is that platform. <span className="mark-hl">One conversation. Filmed on location.</span> Produced with the rigor of broadcast. Distributed to the audience that makes decisions.</p>
          </div>
        </div>

        <div className="quote-wrap roll-item" ref={addToRefs}>
          <blockquote className="quote-main">
            "You don't get to choose whether the market knows your name. You only get to choose whether they hear it from you."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TheSeries;

