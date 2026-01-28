import React from 'react';
import './RSVP.css';

const RSVP = ({ title, description, contactInfo, deadline }) => {
  return (
    <section className="rsvp" id="rsvp">
      <h2 className="section-title">{title}</h2>
      {description && <p className="rsvp-description">{description}</p>}
      
      <div className="rsvp-content">
        {contactInfo && (
          <div className="contact-info">
            <h3>Contact Information</h3>
            {contactInfo.email && (
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            )}
            {contactInfo.phone && (
              <p>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            )}
            {contactInfo.messenger && (
              <p>
                <strong>Messenger:</strong>{' '}
                <a href={`https://m.me/${contactInfo.messenger}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.messenger}
                </a>
              </p>
            )}
          </div>
        )}
        
        {deadline && (
          <div className="rsvp-deadline">
            <p><strong>RSVP Deadline:</strong> {deadline}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
