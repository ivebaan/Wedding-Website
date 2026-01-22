import React from 'react';
import './Hero.css';

const Hero = ({ bride, groom, date, backgroundImage }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="hero-glass-card">
          <p className="hero-subtitle">We are getting married!</p>
          <h1 className="hero-title">
            <span className="hero-name">{groom}</span>
            <span className="hero-ampersand"> & </span>
            <span className="hero-name">{bride}</span>
          </h1>
          <p className="hero-date">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
