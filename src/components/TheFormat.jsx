import React, { useEffect, useRef } from 'react';
import './TheFormat.css';

const TheFormat = () => {
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
    { num: "01", title: "Location", text: "We come to you. Our crew sets up in your office or a nearby premium venue of your choice." },
    { num: "02", title: "Session", text: "An unscripted, 45-minute deep-dive into the mechanics of your business and vision." },
    { num: "03", title: "Delivery", text: "In 2 weeks, you receive a full master episode plus high-impact shorts." }
  ];

  return (
    <section className="s-format" id="format">
      <div className="format-container">
        <div className="format-header reveal" ref={addToRefs}>
          <div className="editorial-label">05 // THE PROCESS</div>
          <h2>One conversation. <i>Treated like it matters.</i></h2>
        </div>

        <div className="format-horizontal">
          {steps.map((s, i) => (
            <div key={i} className="format-step reveal" ref={addToRefs}>
              <div className="step-num">{s.num}</div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheFormat;
