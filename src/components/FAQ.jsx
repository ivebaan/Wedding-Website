import React, { useState, memo } from 'react';
import './FAQ.css';

const FAQ = ({ title, subtitle, questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="section-header">
        <span className="section-ornament">✦</span>
        {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        <h2 className="section-title">{title}</h2>
        <div className="section-divider">
          <span className="section-divider-line"></span>
          <span className="section-divider-icon">♥</span>
          <span className="section-divider-line"></span>
        </div>
      </div>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'faq-item--open' : ''}`}
          >
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <span className="faq-question-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="faq-question-text">{item.question}</span>
              <span className="faq-icon">
                <span className="faq-icon-bar faq-icon-h"></span>
                <span className="faq-icon-bar faq-icon-v"></span>
              </span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(FAQ);
