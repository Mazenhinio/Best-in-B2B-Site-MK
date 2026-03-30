import React, { useEffect, useRef, useState } from 'react';
import './TheSeries.css';

const TheSeries = () => {
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
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`s-series reveal ${isVisible ? 'active' : ''}`}
    >
      <h2>THIS IS NOT A PODCAST.<br/>THIS IS A RECORD.</h2>
      <p>Every generation of business leaders gets documented — or doesn't.</p>
      <p>The executives who shape industries, build categories, and redefine what B2B marketing can do in the most important corporate market in America deserve more than a LinkedIn post. They deserve a platform built for the weight of what they've built.</p>
      <p>Best in B2B is that platform. One conversation. Filmed on location. Produced with the rigor of broadcast. Distributed to the audience that makes decisions.</p>
      <blockquote>"You don't get to choose whether the market knows your name. You only get to choose whether they hear it from you."</blockquote>
    </section>
  );
};

export default TheSeries;
