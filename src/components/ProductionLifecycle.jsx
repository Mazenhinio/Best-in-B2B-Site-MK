import React, { useEffect, useRef } from 'react';
import './ProductionLifecycle.css';

const ProductionLifecycle = () => {
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

  const steps = [
    { num: "01", title: "LOCATION", text: "We come to you. Our crew sets up in your office or a nearby premium venue of your choice." },
    { num: "02", title: "SESSION", text: "An unscripted, 45-minute deep-dive into the mechanics of your business and vision." },
    { num: "03", title: "DELIVERY", text: "In 2 weeks, you receive a full master episode plus high-impact shorts." }
  ];

  const assets = [
    { title: "Full Episode", label: "4K Master File" },
    { title: "Video Clips", label: "LinkedIn-Ready Shorts" },
    { title: "Caption Sets", label: "Structured Copy" },
    { title: "Quote Graphics", label: "High-Impact Visuals" },
    { title: "Guest Card", label: "Branded Announcement" },
    { title: "Feature Asset", label: "Summary Visual" }
  ];

  return (
    <section className="s-production" id="production">
      <div className="prod-container">
        {/* HEADER */}
        <div className="prod-header reveal" ref={addToRefs}>
          <div className="editorial-label">05 // PRODUCTION LIFECYCLE</div>
          <h2>One session. <i>Unending value.</i></h2>
          <p className="prod-intro">We have perfected the B2B capture workflow. We manage the entire lifecycle from setup to the final distribution-ready asset library.</p>
        </div>

        {/* PROCESS STEPS */}
        <div className="prod-steps reveal" ref={addToRefs}>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="step-block">
                <div className="step-count">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prod-divider"></div>

        {/* ASSET LIBRARY */}
        <div className="prod-library reveal" ref={addToRefs}>
          <div className="library-label">THE ASSET LIBRARY</div>
          <div className="library-grid">
            {assets.map((a, i) => (
              <div key={i} className="asset-card">
                <div className="card-top">
                  <div className="card-title">{a.title}</div>
                  <div className="card-meta">{a.label}</div>
                </div>
                <div className="card-line"></div>
              </div>
            ))}
          </div>
        </div>

        {/* VALUE BOX */}
        <div className="prod-value reveal" ref={addToRefs}>
           <blockquote className="v-quote">
            "PRODUCTION VALUE: $15,000. INVOICE: $0."
          </blockquote>
          <cite className="v-cite">— THE BEST IN B2B MANDATE</cite>
        </div>
      </div>
    </section>
  );
};

export default ProductionLifecycle;
