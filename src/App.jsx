import React, { useState } from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TheSeries from './components/TheSeries';
import MarketContext from './components/MarketContext';
import Criteria from './components/Criteria';
import WaitlistForm from './components/WaitlistForm';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Marquee from './components/Marquee';
import VideoShowcase from './components/VideoShowcase';
import WhyThisSeatMatters from './components/WhyThisSeatMatters';
import Deliverables from './components/Deliverables';
import SeriesAbout from './components/SeriesAbout';
import Launching from './components/Launching';

function App() {
  return (
    <div className="app-container">
      <Cursor />
      <Nav />
      <div className="main-content">
        <Hero />
        <Marquee />
        <SeriesAbout />
        <Launching />
        <TheSeries />
        <MarketContext />
        <WhyThisSeatMatters />
        <Deliverables />
        <Criteria />
        <WaitlistForm />
        <FAQ />
        <FooterCTA />
      </div>
    </div>
  );
}
export default App;
