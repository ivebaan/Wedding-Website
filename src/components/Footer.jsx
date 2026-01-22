import React from 'react';
import './Footer.css';

const Footer = ({ couple, date, contactInfo }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {couple && (
          <h3 className="footer-title">{couple.groom} & {couple.bride}</h3>
        )}
        {date && <p className="footer-date">{date}</p>}
        
        {contactInfo && (
          <div className="footer-contact">
            <p>For questions, please contact:</p>
            {contactInfo.email && (
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            )}
            {contactInfo.phone && (
              <p>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            )}
          </div>
        )}
        
        <p className="footer-copyright">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
