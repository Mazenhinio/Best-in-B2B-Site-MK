import React, { useEffect, useRef, useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
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

  const handleKeyDown = (e, nextStep) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value.trim() !== '') {
        setStep(nextStep);
      }
    }
  };

  useEffect(() => {
    // Only focus if we are past step 1 (meaning the user started typing)
    if (step > 1) {
      const el = document.getElementById(`wlf-${step}`);
      if (el) el.focus();
    }
  }, [step]);

  return (
    <section id="request" ref={sectionRef} className={`s-waitlist reveal ${isVisible ? 'active' : ''}`}>
      <div className="wl-header">REQUEST INVITATION</div>
      <div className="wl-sub">
        Twelve seats per season. The intake protocol requires initial verification. Hit enter to proceed.
      </div>
      <form className="wl-protocol" onSubmit={(e) => e.preventDefault()}>
        <div className={`wl-field ${step >= 1 ? 'active' : ''}`}>
          <label>Executive Name <span>[ENTER]</span></label>
          <input 
            type="text" 
            id="wlf-1" 
            placeholder="John Doe" 
            onKeyDown={(e) => handleKeyDown(e, 2)} 
            disabled={step !== 1} 
          />
        </div>
        <div className={`wl-field ${step >= 2 ? 'active' : ''}`}>
          <label>Company <span>[ENTER]</span></label>
          <input 
            type="text" 
            id="wlf-2" 
            placeholder="Acme Corp" 
            onKeyDown={(e) => handleKeyDown(e, 3)} 
            disabled={step !== 2} 
          />
        </div>
        <div className={`wl-field ${step >= 3 ? 'active' : ''}`}>
          <label>Corporate Email <span>[ENTER]</span></label>
          <input 
            type="email" 
            id="wlf-3" 
            placeholder="jdoe@acme.com" 
            onKeyDown={(e) => handleKeyDown(e, 4)} 
            disabled={step !== 3} 
          />
        </div>
        <div className={`wl-field ${step >= 4 ? 'active' : ''}`}>
          <label>City <span>[ENTER]</span></label>
          <input 
            type="text" 
            id="wlf-4" 
            placeholder="Dallas, TX" 
            onKeyDown={(e) => handleKeyDown(e, 5)} 
            disabled={step !== 4} 
          />
        </div>
        <div className={`wl-submit ${step >= 5 ? 'active' : ''}`}>
          <button type="button" onClick={() => alert("Form Submitted!")}>
            SUBMIT FOR CONSIDERATION <span className="arr">→</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default WaitlistForm;
