import React, { useEffect, useRef, useState } from 'react';
import './VideoShowcase.css';

const VideoShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  const videos = [
    { base: 'VID-20260331-WA0021' },
    { base: 'VID-20260331-WA0022' },
    { base: 'VID-20260331-WA0023' },
    { base: 'VID-20260331-WA0024' },
    { base: 'VID-20260331-WA0025' },
    { base: 'VID-20260331-WA0026' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRefs.current.forEach(v => {
            if (v) v.play().catch(e => console.log("Playback blocked:", e));
          });
        } else {
          videoRefs.current.forEach(v => {
            if (v) v.pause();
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <div className="sfo-showcase-wrapper">
      <section id="videos-section" ref={sectionRef} className={`s-showcase reveal ${isVisible ? 'active' : ''}`}>
        <div className="show-header">
          <div className="show-label">
            <div className="rec-dot-small"></div>
            <span>PRODUCTION OUTPUT // FEED_07-12</span>
          </div>
          <h2 className="show-title">The Finished Record. <br />Delivered to you.</h2>
        </div>

        <div className="video-grid">
          {videos.map((vid, idx) => (
            <div key={idx} className="video-card">
              <div className="video-aspect">
                <video 
                  ref={el => videoRefs.current[idx] = el}
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                >
                  <source src={`/${vid.base}.webm`} type="video/webm" />
                  <source src={`/${vid.base}.mp4`} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
