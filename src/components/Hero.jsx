import React, { useState, useEffect } from 'react';
import './Hero.css';
import Countdown from './Countdown';
import logo from '../../img/translogo.png';

const Hero = ({ bride, groom, date, backgroundImage, targetDate }) => {
  const fullMessage = "Two hearts, one forever — we can't wait to celebrate with you.";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [pauseRef, setPauseRef] = useState(false);

  useEffect(() => {
    if (pauseRef) {
      const pause = setTimeout(() => {
        setPauseRef(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting) {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (charIndex < fullMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullMessage[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setPauseRef(true);
      }
    }
  }, [charIndex, isDeleting, pauseRef]);

  return (
    <section className="hero">
      {/* ── Cinematic hero image ── */}
      <div className="hero-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-background-overlay">
          {/* Decorative frame corners */}
          <div className="hero-frame">
            <span className="hero-frame-corner hero-frame-tl"></span>
            <span className="hero-frame-corner hero-frame-tr"></span>
            <span className="hero-frame-corner hero-frame-bl"></span>
            <span className="hero-frame-corner hero-frame-br"></span>
          </div>

          <div className="hero-overlay-content">
            <span className="hero-overlay-label">SAVE THE DATE</span>
            <div className="hero-overlay-logo">
              <img
                src={logo}
                alt={`${groom} & ${bride}`}
                className="hero-overlay-logo-img"
              />
            </div>
            <div className="hero-overlay-divider"></div>
            <p className="hero-invited-text">You are invited!</p>
            <p className="hero-reserved-text">We have reserved a seat for you</p>
            <div className="hero-typewriter">
              <p className="hero-typewriter-text">
                {displayedText}
                <span className="hero-typewriter-cursor">|</span>
              </p>
            </div>
            <div className="hero-date-block">
              <div className="hero-date-ornament-line"></div>
              <div className="hero-date-stack">
                <span className="hero-date-month">February</span>
                <span className="hero-date-day">23</span>
                <span className="hero-date-year">2026</span>
              </div>
              <div className="hero-date-ornament-line"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Invitation section ── */}
      <div className="hero-invitation">
        <div className="hero-invitation-inner">
          <div className="hero-ornament">✦</div>
          <p className="hero-together-text">Together with their families & friends</p>
          <div className="hero-divider">
            <span className="hero-divider-line"></span>
            <span className="hero-divider-icon">♥</span>
            <span className="hero-divider-line"></span>
          </div>

          <h1 className="hero-couple-names">
            <span className="hero-name">{groom}</span>
            <span className="hero-ampersand">&</span>
            <span className="hero-name">{bride}</span>
          </h1>

          <p className="hero-getting-married">REQUEST THE PLEASURE OF YOUR COMPANY</p>

          <div className="hero-wedding-date">
            <span className="hero-wedding-date-line"></span>
            <span className="hero-wedding-date-text">{date}</span>
            <span className="hero-wedding-date-line"></span>
          </div>

          <div className="hero-countdown-wrapper">
            <Countdown targetDate={targetDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
