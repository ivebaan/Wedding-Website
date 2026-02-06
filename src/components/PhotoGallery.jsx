import React, { useEffect, useRef, useState } from "react";
import "./PhotoGallery.css";

const PhotoGallery = ({ title, photos }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const autoScroll = () => {
      // Only auto-scroll when not dragging
      if (!isDraggingRef.current) {
        scrollPosition += scrollSpeed;

        // When we've scrolled past the first set of images, reset to beginning
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      } else {
        // Update scroll position when dragging to maintain sync
        scrollPosition = scrollContainer.scrollLeft;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      startXRef.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeftRef.current = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";
      scrollContainer.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startXRef.current) * 2; // Multiply for faster scroll
      scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      scrollContainer.style.cursor = "grab";
      scrollContainer.style.userSelect = "auto";
    };

    // Touch drag handlers for mobile
    const handleTouchStart = (e) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      startXRef.current = e.touches[0].pageX - scrollContainer.offsetLeft;
      scrollLeftRef.current = scrollContainer.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const x = e.touches[0].pageX - scrollContainer.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    // Add event listeners
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
    scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart);
    scrollContainer.addEventListener("touchmove", handleTouchMove);
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
        scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
        scrollContainer.removeEventListener("touchstart", handleTouchStart);
        scrollContainer.removeEventListener("touchmove", handleTouchMove);
        scrollContainer.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [photos]); // Re-run when photos change

  return (
    <section className="photo-gallery" id="gallery">
      <div className="section-header">
        <span className="section-ornament">✦</span>
        <h2 className="section-title">{title}</h2>
        <div className="section-divider">
          <span className="section-divider-line"></span>
          <span className="section-divider-icon">♥</span>
          <span className="section-divider-line"></span>
        </div>
        <p className="section-subtitle">A collection of moments that tell our love story</p>
      </div>

      {photos && photos.length > 0 ? (
        <div className="gallery-outer">
          <div
            className={`gallery-scroll-container ${isDragging ? "dragging" : ""}`}
            ref={scrollRef}
          >
            <div className="gallery-track">
              {/* Duplicate photos for seamless loop */}
              {photos.concat(photos).map((photo, index) => (
                <div key={index} className="gallery-slide">
                  <div className="gallery-image-wrapper">
                    <img
                      src={photo.url}
                      alt={photo.caption || `Photo ${index + 1}`}
                      draggable="false"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="gallery-hint">
            <span className="gallery-hint-arrows">← →</span>
            Drag to explore
          </p>
        </div>
      ) : (
        <p style={{ textAlign: 'center', padding: '2rem' }}>No photos available</p>
      )}

    </section>
  );
};

export default React.memo(PhotoGallery);
