import React from 'react';
import './OurStory.css';

const OurStory = ({ title, story, image }) => {
  return (
    <section className="our-story" id="our-story">
      <h2 className="section-title">{title}</h2>
      <div className="story-content">
        {image && (
          <div className="story-image">
            <img src={image} alt="Our Story" />
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
