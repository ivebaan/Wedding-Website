import React from 'react';
import './DressCode.css';

const DressCode = ({ title, subtitle, description, colors, image }) => {
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
      
      {image && (
        <div className="dress-code-image">
          <img src={image} alt="Dress Code" />
        </div>
      )}
    </section>
  );
};

export default DressCode;
