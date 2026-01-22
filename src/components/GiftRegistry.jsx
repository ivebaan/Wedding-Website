import React from 'react';
import './GiftRegistry.css';

const GiftRegistry = ({ title, description, options }) => {
  return (
    <section className="gift-registry" id="gifts">
      <h2 className="section-title">{title}</h2>
      {description && <p className="gift-description">{description}</p>}
      
      {options && options.length > 0 && (
        <div className="gift-options">
          {options.map((option, index) => (
            <div key={index} className="gift-card">
              {option.icon && <span className="gift-icon">{option.icon}</span>}
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              {option.details && (
                <div className="gift-details">
                  {option.details.map((detail, idx) => (
                    <p key={idx}><strong>{detail.label}:</strong> {detail.value}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default GiftRegistry;
