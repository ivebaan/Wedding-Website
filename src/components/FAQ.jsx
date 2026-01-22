import React, { useState } from 'react';
import './FAQ.css';

const FAQ = ({ title, subtitle, questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      {subtitle && <p className="faq-subtitle">{subtitle}</p>}
      <h2 className="section-title">{title}</h2>
      <div className="faq-container">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '▲' : '▼'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
