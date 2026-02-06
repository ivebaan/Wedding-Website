import React, { memo } from 'react';
import './RSVP.css';

const RSVP = ({ title, description, contactInfo, deadline }) => {
  return (
    <section className="rsvp" id="rsvp">
      <div className="section-header">
        <span className="section-ornament">✦</span>
        <h2 className="section-title">{title}</h2>
        <div className="section-divider">
          <span className="section-divider-line"></span>
          <span className="section-divider-icon">♥</span>
          <span className="section-divider-line"></span>
        </div>
      </div>
      {description && <p className="rsvp-description">{description}</p>}

      <div className="rsvp-form-link">
        <p className="rsvp-form-label">Kindly confirm your attendance</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdOy5pu7mnBUAoO5dsjAS4pdnqtKQ5XaoOMKSzBNaBv4m7hKg/viewform"
          className="rsvp-form-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
        <p className="rsvp-form-note">You will be redirected to a short form</p>
      </div>

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

export default memo(RSVP);
