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

  const [seatCount, setSeatCount] = React.useState(0);

  useEffect(() => {
    // 1. Word Reveals (keep existing)
    const seq = [
      {id:"wthe",     delay:680,  op: 0.45},
      {id:"wexec",    delay:800,  op: 1},
      {id:"wdef",     delay:920,  op: 1},
      {id:"wb2b",     delay:1040, op: 1},
      {id:"win",      delay:1160, op: 0.45},
      {id:"wdallas",  delay:1280, op: 1},
      {id:"ware",     delay:1400, op: 0.45},
      {id:"wbeing",   delay:1520, op: 0.45},
      {id:"wdoc",     delay:1640, op: 1}
    ];

    const wordTimeouts = seq.map((s) => {
      return setTimeout(() => {
        const el = wordsRef.current[s.id];
        if (el) {
          el.style.transition = "opacity 1s cubic-bezier(.16,1,.3,1)";
          el.style.opacity = s.op;
        }
      }, s.delay);
    });

    // 2. Seat Filling Animation (NEW)
    const totalFilled = 4;
    const duration = 1200; // ms
    const step = duration / totalFilled;
    
    const seatInterval = setInterval(() => {
      setSeatCount(prev => {
        if (prev < totalFilled) return prev + 1;
        clearInterval(seatInterval);
        return prev;
      });
    }, step);

    // 3. Parallax (keep existing)
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
      tfX = dx * -48; tfY = dy * -32 + scrollY * .6;
      tmX = dx * -16; tmY = dy * -10 + scrollY * .35;
      tnX = dx * 32;  tnY = dy * 22 + scrollY * .18;
      fX += (tfX - fX) * .045; fY += (tfY - fY) * .045;
      mX += (tmX - mX) * .045; mY += (tmY - mY) * .045;
      nX += (tnX - nX) * .045; nY += (tnY - nY) * .045;
      if (dlFarRef.current) dlFarRef.current.style.transform = `translate(${fX.toFixed(1)}px,${fY.toFixed(1)}px)`;
      if (dlMicRef.current) dlMicRef.current.style.transform = `translate(${mX.toFixed(1)}px,${mY.toFixed(1)}px)`;
      if (dlNearRef.current) dlNearRef.current.style.transform = `translate(${nX.toFixed(1)}px,${nY.toFixed(1)}px)`;
      rAF = requestAnimationFrame(pLoop);
    };
    rAF = requestAnimationFrame(pLoop);

    return () => {
      wordTimeouts.forEach(clearTimeout);
      clearInterval(seatInterval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rAF);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      {/* FAR LAYER: behind mic */}
      <div className="dl dl-far" ref={dlFarRef}>
        <span className="dw w-exec" ref={registerWord('wexec')}>EXECUTIVES</span>
        <span className="dw w-dallas" ref={registerWord('wdallas')}>DALLAS</span>
        <span className="dw w-being" ref={registerWord('wbeing')}>BEING</span>
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
        <span className="dw w-def" ref={registerWord('wdef')}>DEFINING</span>
        <span className="dw w-b2b" ref={registerWord('wb2b')}>B2B</span>
        <span className="dw w-in" ref={registerWord('win')}>IN</span>
        <span className="dw w-are" ref={registerWord('ware')}>ARE</span>
        <span className="dw w-doc" ref={registerWord('wdoc')}>DOCUMENTED.</span>
      </div>

      <div className="hero-corner-ui">
        <div className="ui-left">
          <div className="seat-ui-corner">
            <div className="suc-lbl">SEATS FILLED</div>
            <div className="suc-num">{String(seatCount).padStart(2, '0')}<span style={{ color: 'var(--c25)' }}>/12</span></div>
            <div className="suc-dots">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={`sd ${i < seatCount ? 'on' : ''}`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="ui-right">
          <div className="status-marker-corner">
            <div className="smc-pulse"></div>
            <div className="smc-text">
              SEASON ONE IS UNDERWAY <br/>
              <span>THE WAITLIST IS OPEN</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rec">
        <div className="recdot"></div> REC
      </div>



      <div className="hero-vign"></div>
      <div className="hero-vign-top"></div>
    </section>
  );
};

export default Hero;
