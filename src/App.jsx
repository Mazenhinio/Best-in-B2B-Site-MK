import React, { useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TheSeries from './components/TheSeries';
import MarketContext from './components/MarketContext';
import TheFormat from './components/TheFormat';
import Criteria from './components/Criteria';
import WaitlistForm from './components/WaitlistForm';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import VideoLoader from './components/VideoLoader';
import Marquee from './components/Marquee';
import VideoShowcase from './components/VideoShowcase';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <Cursor />
      
      {!hasEntered && <VideoLoader onComplete={() => setHasEntered(true)} />}

      {hasEntered && (
        <div style={{ animation: 'fi 1s ease forwards' }}>
          <Nav />
          <Hero />
          <Marquee />
          <TheSeries />
          <MarketContext />
          <TheFormat />
          <VideoShowcase />
          <Criteria />
          <WaitlistForm />
          <FAQ />
          <FooterCTA />
        </div>
      )}
    </>
  );
}

export default App;


