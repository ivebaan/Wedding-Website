import React, { useState, memo } from 'react';
import './EventDetails.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlassAlt, faMapMarkerAlt, faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

const EventDetails = ({ title, events }) => {
  // Track current image index for each event
  const [currentImageIndex, setCurrentImageIndex] = useState(
    events.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const handlePrevImage = (eventIndex, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventIndex]: prev[eventIndex] === 0 ? images.length - 1 : prev[eventIndex] - 1
    }));
  };

  const handleNextImage = (eventIndex, images) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventIndex]: prev[eventIndex] === images.length - 1 ? 0 : prev[eventIndex] + 1
    }));
  };

  return (
    <section className="event-details" id="details">
      <div className="section-header">
        <span className="section-ornament">✦</span>
        <h2 className="section-title">{title}</h2>
        <div className="section-divider">
          <span className="section-divider-line"></span>
          <span className="section-divider-icon">♥</span>
          <span className="section-divider-line"></span>
        </div>
      </div>
      <div className="events-grid">
        {events.map((event, index) => {
          const images = Array.isArray(event.image) ? event.image : [event.image];
          const currentIndex = currentImageIndex[index] || 0;
          
          return (
            <div key={index} className="event-card">
              <div className="event-layout">
                {event.image && (
                  <div className="event-image">
                    <img src={images[currentIndex]} alt={event.name} loading="lazy" decoding="async" />
                    {images.length > 1 && (
                      <>
                        <button 
                          className="image-nav-btn prev-btn" 
                          onClick={() => handlePrevImage(index, images)}
                          aria-label="Previous image"
                        >
                          ‹
                        </button>
                        <button 
                          className="image-nav-btn next-btn" 
                          onClick={() => handleNextImage(index, images)}
                          aria-label="Next image"
                        >
                          ›
                        </button>
                        <div className="image-indicators">
                          {images.map((_, imgIndex) => (
                            <span 
                              key={imgIndex} 
                              className={`indicator ${imgIndex === currentIndex ? 'active' : ''}`}
                              onClick={() => setCurrentImageIndex(prev => ({ ...prev, [index]: imgIndex }))}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              <div className="event-info">
                <h3 className="event-name">{event.name}</h3>
                
                <div className="event-detail">
                  <FontAwesomeIcon icon={faWineGlassAlt} />
                  <p>{event.venue}</p>
                </div>
                
                <div className="event-detail">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <p>{event.address}</p>
                </div>
                
                <div className="event-detail">
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>{event.date}</p>
                </div>
                
                <div className="event-detail">
                  <FontAwesomeIcon icon={faClock} />
                  <p>{event.time}</p>
                </div>
                
                {event.qrCode && (
                  <div className="qr-code">
                    <img src={event.qrCode} alt="QR Code for location" />
                  </div>
                )}
                
                {event.mapLink && (
                  <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
                    Click to open in Google Maps
                  </a>
                )}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(EventDetails);
