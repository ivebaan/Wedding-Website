import React from 'react';
import './GuestInfo.css';

const GuestInfo = ({ title, sections }) => {
  return (
    <section className="guest-info" id="guest-info">
      <h2 className="section-title">{title}</h2>
      <div className="info-grid">
        {sections.map((section, index) => (
          <div key={index} className="info-card">
            {section.icon && <span className="info-icon">{section.icon}</span>}
            <h3>{section.title}</h3>
            {section.items && section.items.map((item, idx) => (
              <div key={idx} className="info-item">
                {item.name && <h4>{item.name}</h4>}
                {item.description && <p>{item.description}</p>}
                {item.address && <p className="address">{item.address}</p>}
                {item.phone && (
                  <p className="contact">
                    📞 <a href={`tel:${item.phone}`}>{item.phone}</a>
                  </p>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="info-link">
                    Learn More →
                  </a>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuestInfo;
