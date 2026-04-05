import React, { useEffect, useRef, useState } from 'react';
import './Deliverables.css';

const Deliverables = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    }, { 
      threshold: 0.4,
      rootMargin: "0px 0px -10% 0px"
    });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const deliverables = [
    {
      id: "full-episode",
      title: "01 / Full Episode",
      subtitle: "The Archive Master",
      desc: "Your 45-minute deep dive, mastered in 4K. This is the permanent record of your leadership strategy, formatted for every major archival platform.",
      tags: ["4K MASTER", "45 MIN"],
      platforms: ["YouTube", "Spotify", "Apple Podcasts", "LinkedIn"]
    },
    {
      id: "shorts",
      title: "02 / Short-form Clips",
      subtitle: "Visibility that Compounds",
      desc: "Up to 6 high-impact vertical clips designed for LinkedIn and social distribution. Each clip features dynamic captions designed for clarity and engagement.",
      tags: ["VERTICAL", "60 SEC"]
    },
    {
      id: "guest-cards",
      title: "03 / Guest Cards",
      subtitle: "The Public Announcement",
      desc: "Professional announcement assets for your personal brand. Includes pre-episode 'Coming Soon' and post-episode 'Watch Now' states.",
      tags: ["SOCIAL", "PNG/JPG"]
    },
    {
      id: "quote-graphics",
      title: "04 / Quote Graphics",
      subtitle: "The Strategy Highlight",
      desc: "Static assets highlighting your most disruptive insights. Designed for high-velocity LinkedIn sharing.",
      tags: ["EDITORIAL", "HI-RES"]
    },
    {
      id: "caption-sets",
      title: "05 / Caption Sets",
      subtitle: "The Distribution Kit",
      desc: "Ready-to-publish copy for every asset in your library. No thinking required—just copy, paste, and publish.",
      tags: ["COPYWRITING", "MD"]
    },
    {
       id: "feature-asset",
       title: "06 / Guest Feature Asset",
       subtitle: "Internal Company Profile",
       desc: "A branded one-page digital profile designed for internal forwarding to your board and leadership team. A warm introduction to decision-makers who never saw the public content.",
       tags: ["EDITORIAL", "INTERNAL ONLY"]
    }
  ];

  return (
    <section className="s-deliverables" id="deliverables">
      <div className="del-sticky-grid">
        {/* LEFT SCROLLING RAIL */}
        <div className="del-left-rail">
          <div className="del-intro-header">
             <div className="editorial-label">06 // ASSET LIBRARY</div>
             <h2>Everything delivered. <br/><i>Nothing to manage.</i></h2>
             <p>We handle the entire production lifecycle. You receive a complete asset library ready for distribution.</p>
          </div>

          {deliverables.map((item, i) => (
            <div 
              key={item.id} 
              className={`del-content-block ${activeIndex === i ? 'active' : ''}`}
              ref={el => sectionRefs.current[i] = el}
              data-index={i}
            >
              <span className="del-step-num">0{i+1}</span>
              <h3 className="del-step-title">{item.title}</h3>
              <div className="del-step-subtitle">{item.subtitle}</div>
              <p className="del-step-desc">{item.desc}</p>
              
              <div className="del-tag-cloud">
                {item.tags.map(tag => <span key={tag} className="del-tag">{tag}</span>)}
              </div>
            </div>
          ))}
          
          <div className="del-spacer-bottom"></div>
        </div>

        {/* RIGHT STICKY STAGE */}
        <div className="del-right-stage">
          <div className="del-sticky-container">
            
            {/* PANEL 1: FULL EPISODE */}
            <div className={`del-panel ${activeIndex === 0 ? 'active' : ''}`}>
              <div className="yt-mockup">
                <div className="yt-player-frame">
                   <img src="/YT Video Thumbnail.png" alt="YouTube Thumbnail" className="yt-thumb-img" />
                   <div className="yt-play-btn"></div>
                   <div className="yt-progress"></div>
                </div>
                <div className="yt-meta">
                  <div className="yt-title-bar"></div>
                  <div className="yt-subtitle-bar"></div>
                </div>
              </div>
              <div className="platform-row">
                 <div className="plat-icon yt"></div>
                 <div className="plat-icon spot"></div>
                 <div className="plat-icon apple"></div>
                 <div className="plat-icon li"></div>
              </div>
              <div className="panel-label">REPRESENTATIVE MOCKUP // FULL MASTER</div>
            </div>

            {/* PANEL 2: SHORTS */}
            <div className={`del-panel ${activeIndex === 1 ? 'active' : ''}`}>
               <div className="reel-frame">
                  <video autoPlay muted loop playsInline src="/business-man-mic-and-podcast-recording-for-talk-2026-01-22-21-51-12-utc.mp4" />
                  <div className="reel-captions">"The most valuable B2B insights aren't shared on LinkedIn threads..."</div>
               </div>
               <div className="panel-label">UP TO 6 CLIPS // SOCIAL READY</div>
            </div>

            {/* PANEL 3: GUEST CARDS */}
            <div className={`del-panel ${activeIndex === 2 ? 'active' : ''}`}>
               <div className="guest-cards-stack">
                  <div className="guest-card state-pre">
                     <img src="/Guest Card 1.png" alt="Pre" />
                     <div className="card-overlay">COMING TO BEST IN B2B</div>
                  </div>
                  <div className="guest-card state-post">
                     <img src="/Guest Card 2.png" alt="Post" />
                     <div className="card-overlay">WATCH THE FULL EPISODE</div>
                  </div>
               </div>
               <div className="panel-label">PRE-EPISODE + POST-EPISODE STATES</div>
            </div>

            {/* PANEL 4: QUOTE GRAPHICS */}
            <div className={`del-panel ${activeIndex === 3 ? 'active' : ''}`}>
               <div className="quote-graphic-mock">
                  <div className="quote-bg">
                    <img src="/Top down shot of executives.png" alt="Quote" />
                  </div>
                  <div className="quote-text-overlay">
                     <span className="quote-mark">“</span>
                     <p>Scale isn't a feature of your product. It's a feature of your <i>operating model</i>.</p>
                     <cite>— Season 1 Executive</cite>
                  </div>
               </div>
               <div className="panel-label">EDITORIAL QUOTE ASSET</div>
            </div>

            {/* PANEL 5: CAPTION SETS */}
            <div className={`del-panel ${activeIndex === 4 ? 'active' : ''}`}>
               <div className="caption-mock">
                  <div className="calendar-ui">
                     <div className="cal-day">DISTRIBUTION KIT // MON 09:00 AM</div>
                     <div className="cal-post">
                        <div className="cal-thumb">
                           <img src="/Caption Set Image.png" alt="Clip" />
                        </div>
                        <div className="cal-copy">
                           <p className="cal-text">
                              "The landscape of B2B leadership in DFW is shifting. It’s no longer about who speaks the loudest, but who has the most substance on record.<br/><br/>
                              Honored to be part of Season One of Best in B2B. We’re diving deep into the frameworks that actually scale."
                           </p>
                           <div className="cal-tags">#BestInB2B #DFWBusiness #B2BLeadership</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-label">READY-TO-PUBLISH COPY KIT</div>
            </div>

            {/* PANEL 6: GUEST FEATURE ASSET */}
            <div className={`del-panel ${activeIndex === 5 ? 'active' : ''}`}>
               <div className="feature-profile-card">
                  <div className="profile-header">
                     <img src="/Guest Feature Asset.png" alt="Guest" />
                     <div className="profile-title">
                        <h4>MARCUS JENKINS</h4>
                        <span>CHO AT ENTERPRISE DFW</span>
                     </div>
                  </div>
                  <div className="profile-body">
                     <p className="profile-pull-quote">
                        "Real B2B leverage happens when you stop selling tools and start <i>selling certainty</i>."
                     </p>
                     <div className="profile-issue-meta">
                        <span>SEASON ONE EP. 04</span>
                        <span>BEST IN B2B DALLAS</span>
                     </div>
                  </div>
               </div>
               <div className="panel-label">INTERNAL EXECUTIVE PROFILE // D CEO STYLE</div>
            </div>

          </div>
        </div>
      </div>
      
      <div className="del-value-footer">
        <blockquote className="value-quote">
          "Independent production value: $10,000 – $15,000. There is no invoice."
        </blockquote>
        <cite className="value-cite">— Best in B2B Production Team</cite>
      </div>
    </section>
  );
};

export default Deliverables;
