import React, { useEffect, useRef, useState } from 'react';
import './TheFormat.css';

const TheFormat = () => {
  const sectionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll('.sfo-item');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveItem(index);
        }
      });
    }, observerOptions);

    items.forEach(item => observer.observe(item));

    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  const formatSteps = [
    { num: '01', text: 'We come to you. On-location, DFW.', sub: 'Sony FX3A Setup / Dual Angle' },
    { num: '02', text: '45 minutes. One conversation.', sub: 'Broadcast Audio / Master Sync' },
    { num: '03', text: 'Full production. Zero prep required.', sub: 'Editorial Direction / Lighting' },
    { num: '04', text: 'Your content package, delivered in two weeks.', sub: 'LinkedIn-Ready / 4K / Subtitled' },
    { num: '05', text: 'Yours permanently. No strings.', sub: 'Full License / Zero Royalties' }
  ];

  return (
    <section id="format-section" ref={sectionRef} className="s-format">
      <div className="sfo-container">
        <div className="sfo-header">
          <div className="sfo-label">What This Involves</div>
          <h2 className="sfo-headline">One conversation. <br />Treated like it matters.</h2>
          
          <div className="sfo-intro-text">
            <p>We come to you. A full dual-camera production crew, on-location at your office or a DFW setting of your choosing. The conversation is 45 minutes. The preparation is ours.</p>
            <p>You receive topic questions 48 hours in advance. There is no script, no teleprompter, no performance. Only a conversation between professionals — recorded with the production value it deserves.</p>
            <p>Within two weeks of filming, you receive a complete content package: a broadcast-quality full episode, short-form video clips formatted for LinkedIn, branded graphics, a transcript, and ready-to-publish captions. Everything. Delivered. Yours to keep permanently.</p>
            <p>There is no cost to invited guests. No invoice arrives. No obligation to promote. No pitch during or after.</p>
          </div>
        </div>

        <div className="sfo-sequence">
          {formatSteps.map((step, idx) => (
            <div 
              key={idx} 
              className={`sfo-item ${activeItem === idx + 1 ? 'active' : ''}`} 
              data-index={idx + 1}
            >
              <div className="sfo-item-meta">
                <span>DFW.PRODUCTION.0{idx + 1}</span>
                <span className="sfo-meta-line"></span>
                <span>REC [LIVE]</span>
              </div>
              <div className="sfo-item-content">
                <div className="sfo-item-num">{step.num}</div>
                <div className="sfo-item-body">
                  <h3>{step.text}</h3>
                  <p className="sfo-item-sub">{step.sub}</p>
                </div>
              </div>
              <div className="sfo-item-corners">
                <div className="corner tl"></div>
                <div className="corner tr"></div>
                <div className="corner bl"></div>
                <div className="corner br"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheFormat;
