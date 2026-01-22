import React, { useEffect, useRef } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ title, photos }) => {
  const galleryRef = useRef(null);
  const scrollSpeed = 0.5;
  const animationRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let scrollPosition = 0;

    const autoScroll = () => {
      if (!isPausedRef.current) {
        const maxScroll = gallery.scrollWidth / 2;
        
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        gallery.scrollLeft = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    const handleMouseEnter = () => {
      isPausedRef.current = true;
    };

    const handleMouseLeave = () => {
      isPausedRef.current = false;
    };

    gallery.addEventListener('mouseenter', handleMouseEnter);
    gallery.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gallery.removeEventListener('mouseenter', handleMouseEnter);
      gallery.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="photo-gallery" id="gallery">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">Our journey in pictures</p>
      
      <div className="gallery-scroll-container" ref={galleryRef}>
        <div className="gallery-grid">
          {photos.concat(photos).map((photo, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={photo.url} alt={photo.caption || `Photo ${index + 1}`} />
                <div className="gallery-overlay">
                  {photo.caption && <p className="photo-caption">{photo.caption}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="gallery-hint">💡 Hover to pause • Scroll automatically</p>
    </section>
  );
};

export default PhotoGallery;
