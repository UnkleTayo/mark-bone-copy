import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="Pricing">
      <div className="Pricing-container">
        <div className="Pricing-card">
          <h1 className="Pricing-title">Pricing</h1>

          <div>
            <h4 className="Pricing-subtitle">Full Day</h4>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <p>3-5 Minute Teaser</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              </p>
              <p>USB stick and Packaging</p>
              <p>Tavel and accommodation in France</p>
            </div>
          </div>
        </div>
        <div className="Pricing-card">
          <h1 className="Pricing-title">Pricing</h1>

          <div>
            <h4 className="Pricing-subtitle">Full Day</h4>
            <div>
              <p>Lorem, ipsum dolor sit amet consectetur</p>
              <p>3-5 Minute Teaser</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              </p>
              <p>USB stick and Packaging</p>
              <p>Tavel and accommodation in France</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="btn">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
