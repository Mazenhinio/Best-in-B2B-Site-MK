import React, { useEffect, useRef } from 'react';
import './TheSeries.css';

const TheSeries = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

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

    // 2. Interactive Scrolling Film Strips
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.min(Math.max((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0), 1);
      
      // Calculate travel distance (-30% to -70% range around the 50% midpoint to ensure seamlessness)
      const move1 = -65 + (scrollProgress * 30); // Slides Left to Right
      const move2 = -35 - (scrollProgress * 30); // Slides Right to Left
      
      if (track1Ref.current) track1Ref.current.style.transform = `translateX(${move1}%)`;
      if (track2Ref.current) track2Ref.current.style.transform = `translateX(${move2}%)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="s-series">
      {/* Film Strip Layer — now interactive scroll driven */}
      <div className="film-layer">
        <div className="fs-wrap fs-wrap-1">
          <div className="fs-inner" ref={track1Ref}>
            {[...Array(8)].map((_, i) => (
              <img key={i} src="/FILM_STRIP-removebg-preview.png" className="fs-img" alt="" />
            ))}
          </div>
        </div>
        <div className="fs-wrap fs-wrap-2">
          <div className="fs-inner" ref={track2Ref}>
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

