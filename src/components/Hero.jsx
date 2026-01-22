import React, { useState, useEffect } from 'react';
import './Hero.css';
import logoTrans from '../../img/translogo.png';

const Hero = ({ bride, groom, date, backgroundImage, weddingDateTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(weddingDateTime) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDateTime]);

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="hero-glass-card">
          <p className="hero-subtitle">We are getting married!</p>
          <div className="hero-logo-container">
            <img src={logoTrans} alt="Wedding Logo" className="hero-logo" />
          </div>
          <p className="hero-date">{date}</p>
          
          <div className="hero-countdown">
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="countdown-label">days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
