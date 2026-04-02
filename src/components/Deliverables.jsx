import React, { useEffect, useRef } from 'react';
import './Deliverables.css';

const Deliverables = () => {
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

  const assets = [
    { title: "Full Episode", label: "4K Master File" },
    { title: "Video Clips", label: "LinkedIn-Ready Shorts" },
    { title: "Caption Sets", label: "Structured Copy" },
    { title: "Quote Graphics", label: "High-Impact Visuals" },
    { title: "Guest Card", label: "Branded Announcement" },
    { title: "Feature Asset", label: "Summary Visual" }
  ];

  return (
    <section className="s-deliverables" id="deliverables">
      <div className="del-container">
        <div className="del-header reveal" ref={addToRefs}>
          <div className="editorial-label">06 // ASSET LIBRARY</div>
          <h2>Everything delivered. <i>Nothing to manage.</i></h2>
          <p className="del-intro">We handle the entire production lifecycle. You receive a complete asset library ready for distribution.</p>
        </div>

        <div className="del-grid">
          {assets.map((a, i) => (
            <div key={i} className="del-item reveal" ref={addToRefs}>
              <div className="del-title">{a.title}</div>
              <div className="del-label">{a.label}</div>
              <div className="del-line"></div>
            </div>
          ))}
        </div>

        <div className="del-value-box reveal" ref={addToRefs}>
           <blockquote className="value-quote">
            "Independent production value: $10,000 – $15,000. There is no invoice."
          </blockquote>
          <cite className="value-cite">— Best in B2B Production Team</cite>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
