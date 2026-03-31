import React, { useEffect, useRef, useState } from 'react';
import './TheFormat.css';

const TheFormat = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const winH = window.innerHeight;
      
      // Calculate progress across the entire page wrap (Cards + Brief)
      // This ensures assets keep moving mientras reading.
      const totalScroll = rect.height - winH;
      const currentScroll = -rect.top;
      const prog = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      
      setProgress(prog);
      
      // Reveal reveal text based on scroll progress
      const revealItems = containerRef.current.querySelectorAll('.rev-text');
      revealItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < winH * 0.85) {
          item.classList.add('visible');
        }
      });
      
      // Logic for cards specifically (The first ~50% of the section)
      // We map the first half of the section to the card swaps
      const cardProg = Math.min(Math.max(prog * 3.2, 0), 0.99); // Speeds up cards to finish before brief
      setIndex(Math.floor(cardProg * 5));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatSteps = [
    { num: '01', text: 'We come to you. On-location, DFW.', sub: 'Sony FX3A Setup / Dual Angle' },
    { num: '02', text: '45 minutes. One conversation.', sub: 'Broadcast Audio / Master Sync' },
    { num: '03', text: 'Full production. Zero prep required.', sub: 'Editorial Direction / Lighting' },
    { num: '04', text: 'Your content package, delivered in two weeks.', sub: 'LinkedIn-Ready / 4K / Subtitled' },
    { num: '05', text: 'Yours permanently. No strings.', sub: 'Full License / Zero Royalties' }
  ];

  return (
    <div ref={containerRef} className="sfo-page-wrap">
      {/* Scroll area that hosts the sticky session */}
      <section className="sfo-scroll-track">
        <div className="sfo-sticky-container">
          <div className="sfo-main-grid">
            
            {/* Left: Headline. Aligned to the top of card. */}
            <div className="sfo-col-left">
              <div className="sfo-eyebrow">
                <div className="eb-line"></div>
                <span>WHAT THIS INVOLVES</span>
              </div>
              <h2 className="sfo-title-main">ONE CONVERSATION. <br />TREATED LIKE IT <br />MATTERS.</h2>
            </div>

            {/* Right: The Cards Stack */}
            <div className="sfo-col-right">
              <div className="sfo-stack-box">
                {formatSteps.map((step, idx) => (
                  <div key={idx} className={`sfo-c-item ${index === idx ? 'active' : ''}`}>
                    <div className="sfo-c-top">
                      <span>DFW.PRODUCTION.0{idx + 1}</span>
                      <div className="sfo-c-line"></div>
                      <span>REC [LIVE]</span>
                    </div>
                    <div className="sfo-c-mid">
                      <div className="sfo-c-num">{step.num}</div>
                      <div className="sfo-c-txt">
                        <h3>{step.text}</h3>
                        <p>{step.sub}</p>
                      </div>
                    </div>
                    <div className="sfo-c-corners">
                      <div className="c-tl"></div><div className="c-tr"></div>
                      <div className="c-bl"></div><div className="c-br"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Brief — Reverted to BLACK with Pan-in logic */}
      <div className="sfo-editorial-brief">
        {/* Parallax Assets with FULL ENTRANCE panning logic */}
        <div className="edt-asset cam" style={{ 
          transform: `translateX(${Math.max((1 - progress * 1.5), 0) * -600}px) translateY(${progress * -150}px) rotate(${progress * 10}deg)` 
        }}>
          <img src="/camera.png" alt="Cinema Camera" />
        </div>
        <div className="edt-asset light" style={{ 
          transform: `translateX(${Math.max((1 - progress * 1.5), 0) * 600}px) translateY(${progress * -300}px)` 
        }}>
          <img src="/light.png" alt="Studio Light" />
        </div>
        <div className="edt-asset slate" style={{ 
          transform: `translateX(${Math.max((1 - progress * 2.2), 0) * -600}px) translateY(${progress * -550}px) rotate(${-10 + progress * 20}deg)` 
        }}>
          <img src="/slate.png" alt="Production Slate" />
        </div>
        <div className="edt-asset phone" style={{ 
          transform: `translateX(${Math.max((1 - progress * 2.2), 0) * 600}px) translateY(${progress * -450}px)` 
        }}>
          <img src="/headphones.png" alt="Broadcast Headphones" />
        </div>

        <div className="sfo-copy-inner">
          <div className="sfo-copy-eyebrow">The Editorial Brief</div>
          <p className="rev-text">We come to you. A full dual-camera production crew, on-location at your office or a DFW setting of your choosing. The conversation is 45 minutes. The preparation is ours.</p>
          <p className="rev-text">You receive topic questions 48 hours in advance. There is no script, no teleprompter, no performance. Only a conversation between professionals — recorded with the production value it deserves.</p>
          <p className="rev-text">Within two weeks of filming, you receive a complete content package: a broadcast-quality full episode, short-form video clips formatted for LinkedIn, branded graphics, a transcript, and ready-to-publish captions. Everything. Delivered. Yours to keep permanently.</p>
          <p className="rev-text">There is no cost to invited guests. No invoice arrives. No obligation to promote. No pitch during or after.</p>
        </div>
      </div>
    </div>
  );
};

export default TheFormat;
