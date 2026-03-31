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
      <div className="wl-header">The seat is yours to claim — or leave for someone else.</div>
      <div className="wl-sub" style={{fontStyle: 'italic'}}>
        Season One invitations are being extended now.
      </div>
      <div className="wl-layout">
        <div className="wl-left">
          <p>Submit your information below. Every profile is reviewed by a human being, not a filter. If we believe there is a fit for Season One, we will reach out within 72 hours.</p>
          <p>If we do not reach out, it means the season is full or the timing isn't right — not that the door is permanently closed.</p>
          <p>We do not follow up with sales emails. We do not add you to a newsletter. We contact you once, with an answer.</p>
        </div>
        <div className="wl-right">
          {step < 6 ? (
            <form className="wl-protocol" onSubmit={(e) => e.preventDefault()}>
              <div className={`wl-field ${step >= 1 ? 'active' : ''}`}>
                <label>Full Name <span>[ENTER]</span></label>
                <input type="text" id="wlf-1" placeholder="Jane Doe" onKeyDown={(e) => handleKeyDown(e, 2)} />
              </div>
              <div className={`wl-field ${step >= 2 ? 'active' : ''}`}>
                <label>Title <span>[ENTER]</span></label>
                <input type="text" id="wlf-2" placeholder="CMO" onKeyDown={(e) => handleKeyDown(e, 3)} />
              </div>
              <div className={`wl-field ${step >= 3 ? 'active' : ''}`}>
                <label>Company <span>[ENTER]</span></label>
                <input type="text" id="wlf-3" placeholder="Acme Corp" onKeyDown={(e) => handleKeyDown(e, 4)} />
              </div>
              <div className={`wl-field ${step >= 4 ? 'active' : ''}`}>
                <label>Business Email <span>[ENTER]</span></label>
                <input type="email" id="wlf-4" placeholder="jane@acme.com" onKeyDown={(e) => handleKeyDown(e, 5)} />
              </div>
              <div className={`wl-field ${step >= 5 ? 'active' : ''}`}>
                <label>City within DFW <span>[ENTER]</span></label>
                <input type="text" id="wlf-5" placeholder="Dallas, TX" onKeyDown={(e) => handleKeyDown(e, 6)} />
              </div>
            </form>
          ) : step === 6 ? (
            <div className="wl-submit-phase">
               <button className="wl-btn-final" onClick={() => setStep(7)}>
                Submit for Consideration
              </button>
              <div className="wl-meta">Reviewed personally within 72 hours<br/>Season One · Twelve guests · Dallas–Fort Worth</div>
            </div>
          ) : (
            <div className="wl-success-box">
              <div className="rec-dot-small"></div>
              <h3>Your profile has been received.</h3>
              <p>If there is a fit for Season One, you will hear from us within 72 hours. No follow-up needed on your end.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
