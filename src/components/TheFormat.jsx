import React, { useEffect, useRef, useState } from 'react';
import './TheFormat.css';

const TheFormat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px', threshold: 0.15 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section id="format-section" ref={sectionRef} className={`s-format reveal ${isVisible ? 'active' : ''}`}>
      <div className="sfo-grid">
        <div className="sfo-left">
          <div className="sfo-label">What This Involves</div>
          <h3>One conversation. Treated like it matters.</h3>
          <p>We come to you. A full dual-camera production crew, on-location at your office or a DFW setting of your choosing. The conversation is 45 minutes. The preparation is ours.</p>
          <p>You receive topic questions 48 hours in advance. There is no script, no teleprompter, no performance. Only a conversation between professionals — recorded with the production value it deserves.</p>
          <p>Within two weeks of filming, you receive a complete content package: a broadcast-quality full episode, short-form video clips formatted for LinkedIn, branded graphics, a transcript, and ready-to-publish captions. Everything. Delivered. Yours to keep permanently.</p>
          <p>There is no cost to invited guests. No invoice arrives. No obligation to promote. No pitch during or after.</p>
        </div>
        <div className="sfo-right">
          <ul className="sfo-list">
            <li><span className="sfo-num">01 —</span> We come to you. On-location, DFW.</li>
            <li><span className="sfo-num">02 —</span> 45 minutes. One conversation.</li>
            <li><span className="sfo-num">03 —</span> Full production. Zero prep required.</li>
            <li><span className="sfo-num">04 —</span> Your content package, delivered in two weeks.</li>
            <li><span className="sfo-num">05 —</span> Yours permanently. No strings.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TheFormat;
