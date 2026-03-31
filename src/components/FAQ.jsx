import React, { useEffect, useRef, useState } from 'react';
import './FAQ.css';

const FAQ = () => {
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

  const toggleFAQ = (e) => {
    const item = e.currentTarget;
    const body = item.querySelector('.faq-body');
    const wasOpen = body.style.height !== '0px' && body.style.height !== '';

    // Close all others
    document.querySelectorAll('.faq-body').forEach(b => {
      b.style.height = '0px';
      b.parentElement.classList.remove('open');
    });

    if (!wasOpen) {
      body.style.height = body.scrollHeight + 'px';
      item.classList.add('open');
    }
  };

  return (
    <section ref={sectionRef} className={`s-faq reveal ${isVisible ? 'active' : ''}`}>
      <div className="faq-h">What you're probably wondering.</div>
      
      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">Is this actually invitation only, or is everyone accepted?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            Genuinely invitation only. We review every profile and extend invitations selectively. Season One has twelve seats. When they are filled, the waitlist closes.
          </div>
        </div>
      </div>

      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">What does the actual recording look like?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            We arrive at your location with a full dual-camera crew. Setup takes roughly thirty minutes and happens before you're in the room. When you sit down, it is a conversation — not an interview, not a performance. You've received the questions in advance. The entire recording is 45 minutes. We pack up and leave. You never think about production again.
          </div>
        </div>
      </div>
      
      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">The show is new. Why does it matter?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            Because the executives who helped build Rolling Stone, Fast Company, and D CEO into institutions were not famous when they first appeared in them. Being first in a well-produced, focused publication is a position — not a risk. Season One guests are the founding record of the most consequential B2B leadership community in DFW. That position will not be available in Season Two.
          </div>
        </div>
      </div>

      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">Who is behind this?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            Best in B2B is an independent editorial series produced in Dallas–Fort Worth. The production team has worked with B2B companies across the US, Middle East, and South Asia. The show's editorial decisions — who is invited, what is asked, how the content is produced — are made independently of any commercial relationship.
          </div>
        </div>
      </div>

      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">What exactly do I receive?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            A broadcast-quality full episode distributed across Spotify, Apple Podcasts, YouTube, and LinkedIn. Eight short-form video clips formatted for LinkedIn. Three to five ready-to-publish caption sets. Branded quote graphics. An episode transcript. A guest feature asset to share internally. Estimated independent production value: $10,000 to $15,000. Your cost: zero.
          </div>
        </div>
      </div>

      <div className="faq-item" onClick={toggleFAQ}>
        <div className="faq-head">
          <div className="faq-q">Am I expected to promote it?</div>
          <div className="faq-cross">+</div>
        </div>
        <div className="faq-body" style={{height: 0}}>
          <div className="faq-a">
            No. We provide the assets. Most guests share because the content reflects well on them. There is no minimum, no ask, no follow-up pressure. The content belongs to you. Use it however you see fit.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
