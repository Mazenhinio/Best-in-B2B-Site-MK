import React from 'react';
import './MarketContext.css';

const MarketContext = () => {
  return (
    <section className="s-market" id="market-context">
      <div className="market-container">
        <div className="editorial-label">04 // WHY NOW</div>
        <h2>Dallas–Fort Worth is having its moment. <i>Its leaders should be heard.</i></h2>
        <p className="market-sub">DFW is no longer emerging. It has emerged.</p>
        
        <div className="market-grid">
          <div className="market-stat">
            <div className="stat-head">
              <div className="stat-num">#1</div>
              <div className="stat-label">NORTH AMERICAN<br/>TECH HUB</div>
            </div>
            <p>2025 Market Index. DFW has surpassed every market except one.</p>
          </div>
          <div className="market-stat">
            <div className="stat-head">
              <div className="stat-num">100</div>
              <div className="stat-label">CORPORATE<br/>HEADQUARTERS</div>
            </div>
            <p>Relocated to DFW in six years. An institutional migration.</p>
          </div>
          <div className="market-stat">
            <div className="stat-head">
              <div className="stat-num">$1.6B</div>
              <div className="stat-label">CAPITAL<br/>RAISED</div>
            </div>
            <p>DFW startups alone in 2025. The capital is here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketContext;
