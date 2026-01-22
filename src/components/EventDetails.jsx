import React from 'react';
import './EventDetails.css';

const EventDetails = ({ title, events }) => {
  return (
    <section className="event-details" id="details">
      <h2 className="section-title">{title}</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            {event.image && (
              <div className="event-image">
                <img src={event.image} alt={event.name} />
              </div>
            )}
            <div className="event-info">
              <h3>{event.name}</h3>
              <div className="event-detail">
                <span className="icon">💍</span>
                <p>{event.venue}</p>
              </div>
              <div className="event-detail">
                <span className="icon">📍</span>
                <p>{event.address}</p>
              </div>
              <div className="event-detail">
                <span className="icon">📅</span>
                <p>{event.date}</p>
              </div>
              <div className="event-detail">
                <span className="icon">🕐</span>
                <p>{event.time}</p>
              </div>
              {event.mapLink && (
                <>
                  {event.qrCode && (
                    <div className="qr-code">
                      <img src={event.qrCode} alt="QR Code" />
                    </div>
                  )}
                  <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
                    Click to open in Google Maps
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventDetails;
