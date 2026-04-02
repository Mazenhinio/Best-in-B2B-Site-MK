import React, { useEffect, useRef } from 'react';
import './WhyThisSeatMatters.css';

const WhyThisSeatMatters = () => {
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

  const icons = {
    aperture: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m14.31 8 5.74 9.94"/><path d="M9.69 8h11.48"/><path d="m7.38 12 5.74-9.94"/><path d="M9.69 16 3.95 6.06"/><path d="M14.31 16H2.83"/><path d="m16.62 12-5.74 9.94"/></svg>,
    compass: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
    rec: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>,
    seal: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    lamp: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8"/><path d="M7 22h10"/><path d="m11 2-2 5h6l-2-5"/><path d="M9.5 10c0-1.5 0-3 2.5-3s2.5 1.5 2.5 3"/><rect x="8" y="10" width="8" height="6" rx="1"/><path d="M12 16v6"/><path d="M10 22h4"/></svg>,
    monolith: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="1"/><path d="M10 6h4"/><path d="M10 10h4"/></svg>
  };

  const points = [
    { icon: icons.aperture, title: "Visibility that compounds", text: "The executives your buyers trust are the ones they have seen and heard. One filmed conversation puts you in that category — permanently." },
    { icon: icons.compass, title: "Thought leadership drives pipeline", text: "75% of B2B decision-makers research a new product after consuming leadership content. 70% reconsidered an existing supplier after seeing a competitor's." },
    { icon: icons.rec, title: "Video is the only proof", text: "In a market flooded with AI-generated content, showing up on camera with original thinking is the only signal buyers cannot fake or ignore." },
    { icon: icons.seal, title: "Your work. On record.", text: "We film on location — your environment, your team, your company in motion. This is a portrait of how you and your organization actually operate." },
    { icon: icons.lamp, title: "Own your category", text: "Every market has a voice people default to. Best in B2B is where it gets established for DFW's B2B community." },
    { icon: icons.monolith, title: "Season One is the position", text: "The executives documented now are the permanent record of this series from its beginning. That is a position, not a feature." }
  ];

  return (
    <section className="s-seat" id="why-now">
      <div className="seat-container">
      <div className="seat-container">
        <div className="seat-header reveal" ref={addToRefs}>
          <div className="editorial-label">03 // THE VALUE</div>
          <h2>Why This <i>Seat Matters</i></h2>
          <p className="seat-intro">Your buyers are forming opinions about you right now. You are not in the room.</p>
        </div>

        <div className="seat-grid">
          {points.map((p, i) => (
            <div 
              key={i} 
              className="seat-point reveal" 
              ref={addToRefs}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="point-head">
                <div className="point-icon">{p.icon}</div>
                <h3>{p.title}</h3>
              </div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyThisSeatMatters;
