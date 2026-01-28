import React, { useState, useEffect } from 'react';
import './OurStory.css';

const OurStory = ({ title, story, image }) => {
  // Convert single image to array, or use array if already an array
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="our-story" id="our-story">
      <h2 className="section-title">{title}</h2>
      <div className="story-content">
        {images && images.length > 0 && (
          <div className="story-image">
            <div className="image-slideshow">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Our Story ${index + 1}`}
                  className={index === currentImageIndex ? 'active' : ''}
                />
              ))}
            </div>
            {images.length > 1 && (
              <div className="slideshow-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <div className="story-text">
          <p>{story}</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
