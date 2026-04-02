import React, { useEffect, useRef, useState } from 'react';
import './WaitlistForm.css';

const WaitlistForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    <section id="request" ref={sectionRef} className="s-waitlist active">
      <div className="wl-container">
        <div className="wl-header-box">
          <div className="editorial-label">08 // APPLICATION</div>
          <h2 className="wl-title">The record is being written.</h2>
          <p className="wl-sub">Submit your details to be considered for Season One.</p>
        </div>

        <div className="wl-form-stage">
          {!isSubmitted ? (
            <form className="wl-protocol" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <div className="wl-field">
                <label className="wl-num">01</label>
                <input type="text" placeholder="NAME" autoComplete="off" required />
              </div>
              <div className="wl-field">
                <label className="wl-num">02</label>
                <input type="text" placeholder="TITLE" autoComplete="off" required />
              </div>
              <div className="wl-field">
                <label className="wl-num">03</label>
                <input type="text" placeholder="COMPANY" autoComplete="off" required />
              </div>
              <div className="wl-field">
                <label className="wl-num">04</label>
                <input type="email" placeholder="BUSINESS EMAIL" autoComplete="off" required />
              </div>
              <div className="wl-field">
                <label className="wl-num">05</label>
                <input type="text" placeholder="CITY" autoComplete="off" required />
              </div>

              <div className="wl-submit-phase">
                <button type="submit" className="wl-btn-final">
                  SUBMIT FOR CONSIDERATION
                </button>
                <div className="wl-micro">Invitations are sent on a rolling basis.</div>
              </div>
            </form>
          ) : (
            <div className="wl-success-box">
              <div className="rec-dot-small"></div>
              <h3>PROFILE RECEIVED.</h3>
              <p>If there is a fit for Season One, you will hear from the production team within 72 hours.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
