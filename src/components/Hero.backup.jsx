import React, { useEffect, useRef } from 'react';
import './Hero.css';
import micImg from '../assets/mic.png';

const Hero = () => {
  const dlFarRef = useRef(null);
  const dlMicRef = useRef(null);
  const dlNearRef = useRef(null);
  const wordsRef = useRef({});

  const registerWord = (id) => (el) => {
    if (el) wordsRef.current[id] = el;
  };

  useEffect(() => {
    // 1. Word Reveals
    const seq = [
      {id:"wleaders", delay:680,  op:.13},
      {id:"wdallas",  delay:860,  op:.16},
      {id:"wthe",     delay:980,  op:.92},
      {id:"wb2b",     delay:1080, op:.92},
      {id:"wshaping", delay:1220, op:.88},
      {id:"wbeing",   delay:1340, op:.86},
      {id:"wdoc",     delay:1480, op:1}
    ];

    const timeouts = seq.map((s) => {
      return setTimeout(() => {
        const el = wordsRef.current[s.id];
        if (el) {
          el.style.transition = "opacity 1s cubic-bezier(.16,1,.3,1)";
          el.style.opacity = s.op;
        }
      }, s.delay);
    });

    // 2. Parallax
    let fX=0, fY=0, mX=0, mY=0, nX=0, nY=0;
    let tfX=0, tfY=0, tmX=0, tmY=0, tnX=0, tnY=0;
    let cmx=.5, cmy=.5, tmxR=.5, tmyR=.5;
    let scrollY = 0;
    let rAF;

    const onScroll = () => { scrollY = window.scrollY; };
    const onMouseMove = (e) => {
      tmxR = e.clientX / window.innerWidth;
      tmyR = e.clientY / window.innerHeight;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);

    const pLoop = () => {
      cmx += (tmxR - cmx) * .055;
      cmy += (tmyR - cmy) * .055;
      const dx = cmx - .5;
      const dy = cmy - .5;

      tfX = dx * -48;
      tfY = dy * -32 + scrollY * .6;

      tmX = dx * -16;
      tmY = dy * -10 + scrollY * .35;

      tnX = dx * 32;
      tnY = dy * 22 + scrollY * .18;

      fX += (tfX - fX) * .045;
      fY += (tfY - fY) * .045;
      mX += (tmX - mX) * .045;
      mY += (tmY - mY) * .045;
      nX += (tnX - nX) * .045;
      nY += (tnY - nY) * .045;

      if (dlFarRef.current) dlFarRef.current.style.transform = `translate(${fX.toFixed(1)}px,${fY.toFixed(1)}px)`;
      if (dlMicRef.current) dlMicRef.current.style.transform = `translate(${mX.toFixed(1)}px,${mY.toFixed(1)}px)`;
      if (dlNearRef.current) dlNearRef.current.style.transform = `translate(${nX.toFixed(1)}px,${nY.toFixed(1)}px)`;

      rAF = requestAnimationFrame(pLoop);
    };
    
    rAF = requestAnimationFrame(pLoop);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* FAR LAYER: behind mic */}
      <div className="dl dl-far" ref={dlFarRef}>
        <span className="dw w-leaders" ref={registerWord('wleaders')}>LEADERS</span>
        <span className="dw w-dallas" ref={registerWord('wdallas')}>DALLAS</span>
      </div>

      {/* MIC LAYER */}
      <div className="dl dl-mic" ref={dlMicRef}>
        <div className="mic-wrap">
          <img src={micImg} alt="Microphone" />
        </div>
      </div>

      {/* NEAR LAYER */}
      <div className="dl dl-near" ref={dlNearRef}>
        <span className="dw w-the" ref={registerWord('wthe')}>THE</span>
        <span className="dw w-b2b" ref={registerWord('wb2b')}>B2B</span>
        <span className="dw w-shaping" ref={registerWord('wshaping')}>SHAPING</span>
        <span className="dw w-being" ref={registerWord('wbeing')}>ARE BEING</span>
        <span className="dw w-doc" ref={registerWord('wdoc')}>DOCUMENTED.</span>
      </div>

      <div className="eyebrow">DALLAS – FORT WORTH · SEASON ONE · LIMITED TO TWELVE</div>
      
      <div className="rec">
        <div className="recdot"></div> REC
      </div>

      {/* SEAT UI */}
      <div className="seat-ui">
        <div className="seat-num">04<span style={{ color: 'var(--c25)' }}>/12</span></div>
        <div className="seat-lbl">Seats filled</div>
        <div className="seat-dots">
          <div className="sd on"></div>
          <div className="sd on"></div>
          <div className="sd on"></div>
          <div className="sd on"></div>
          <div className="sd pnd"></div>
          <div className="sd pnd"></div>
          <div className="sd"></div>
          <div className="sd"></div>
          <div className="sd"></div>
          <div className="sd"></div>
          <div className="sd"></div>
          <div className="sd"></div>
        </div>
      </div>

      {/* BOTTOM FOOT */}
      <div className="hero-foot">
        <div className="hero-sub">
          Best in B2B is the definitive video series featuring the executives behind the region's most consequential B2B companies. Participation is by invitation only.
        </div>
        <a href="#request" className="hero-cta">
          Request consideration <span className="arr">→</span>
        </a>
      </div>

      <div className="hero-vign"></div>
      <div className="hero-vign-top"></div>
    </section>
  );
};

export default Hero;
