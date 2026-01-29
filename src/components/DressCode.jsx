import React from 'react';
import './DressCode.css';

const DressCode = ({ title, subtitle, description, colors, images }) => {
  return (
    <section className="dress-code" id="dress-code">
      <h2 className="section-title">{title}</h2>
      <h3 className="dress-code-subtitle">{subtitle}</h3>
      {description && <p className="dress-code-description">{description}</p>}
      
      {colors && colors.length > 0 && (
        <div className="color-palette">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-circle"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      )}
      
      {images && images.length > 0 && (
        <div className="dress-code-images">
          {images.map((image, index) => (
            <div key={index} className="dress-code-image">
              <img src={image} alt={`Dress Code ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
      
      <div className="qr-codes-section">
        <p className="qr-section-title">Scan for More Outfit Inspiration</p>
        <div className="qr-codes-container">
          <div className="qr-code-item">
            <div className="qr-code-wrapper">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://pin.it/2Lna663A2" 
                alt="QR Code for Women's Outfit Inspiration" 
                className="qr-code-image"
              />
            </div>
            <p className="qr-code-label">For Women</p>
          </div>
          <div className="qr-code-item">
            <div className="qr-code-wrapper">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://pin.it/5YADzuEKs" 
                alt="QR Code for Men's Outfit Inspiration" 
                className="qr-code-image"
              />
            </div>
            <p className="qr-code-label">For Men</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
