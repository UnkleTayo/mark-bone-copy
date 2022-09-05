import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="Pricing">
      <div className="Pricing-container">
        <div className="Pricing-card">
          <h1 className="Pricing-title">Feature Film Package //650k</h1>

          <div>
            {/* <h4 className="Pricing-subtitle">Full Day</h4> */}
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <p>3-5 Minute Teaser</p>
              <p>Feature Film Package (10 – 12 min)</p>
              <p>
                Full day of filming – (start from prepping of the bride and
                leave approx 1/2 hour after formal dances)
              </p>
              <p>Full Ceremony & Reception</p>
              <p>1 custom Flash drive</p>
            </div>
          </div>
        </div>
        <div className="Pricing-card">
          <h1 className="Pricing-title">Highlight Film Package //450k</h1>

          <div>
            {/* <h4 className="Pricing-subtitle">Full Day</h4> */}
            <div>
              <p>Highlight Film Package (6 – 8 min)</p>
              <p>
                Full day of filming – (start from prepping of the bride and
                leave approx 1/2 hour after formal dances)
              </p>
              <p>2 talented cinematographers</p>
              <p>Full Ceremony & Reception</p>
              <p>1 custom Flash drive</p>
            </div>
          </div>
        </div>
        <div className="Pricing-card">
          <h1 className="Pricing-title">Wedding Trailer Package //300k</h1>

          <div>
            {/* <h4 className="Pricing-subtitle">Full Day</h4> */}
            <div>
              <p>Wedding Trailer Package (3 – 4 min)</p>
              <p>
                Full day of filming – (start from prepping of the bride and
                leave approx 1/2 hour after formal dances)
              </p>
              <p>2 talented cinematographers</p>
              <p>Drone pilot</p>
              <p>Full Ceremony & Reception</p>
              <p>1 custom Flash drive</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Pricing-button">
        <button className="btn">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
