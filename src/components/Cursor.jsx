import React, { useEffect } from 'react';

const Cursor = () => {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const curring = document.getElementById('curring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cur) {
        cur.style.left = mouseX + 'px';
        cur.style.top = mouseY + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (curring) {
        curring.style.left = ringX + 'px';
        curring.style.top = ringY + 'px';
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animationFrameId = requestAnimationFrame(animateRing);

    const interactiveSelectors = 'a, button, input, .faq-item, .hero-cta';
    
    // Add hover states for interactive elements
    const handleMouseEnter = () => cur?.classList.add('big');
    const handleMouseLeave = () => cur?.classList.remove('big');

    const attachInteractives = () => {
      document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Attach initially and try again after a short delay to catch lazily rendered components
    attachInteractives();
    const timeoutId = setTimeout(attachInteractives, 1000);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cur"></div>
      <div id="curring"></div>
      <div className="grain" aria-hidden="true"></div>
    </>
  );
};

export default Cursor;
