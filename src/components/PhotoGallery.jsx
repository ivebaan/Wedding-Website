import React, { useEffect, useRef } from "react";
import "./PhotoGallery.css";

const PhotoGallery = ({ title, photos }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (!isDraggingRef.current) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      } else {
        scrollPosition = scrollContainer.scrollLeft;
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    // Mouse drag handlers
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      scrollContainer.classList.add("dragging");
      startXRef.current = e.pageX - scrollContainer.offsetLeft;
      scrollLeftRef.current = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      scrollContainer.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      scrollContainer.classList.remove("dragging");
      scrollContainer.style.cursor = "grab";
    };

    // Touch drag handlers — passive where possible
    const handleTouchStart = (e) => {
      isDraggingRef.current = true;
      scrollContainer.classList.add("dragging");
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
      scrollContainer.classList.remove("dragging");
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
    scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);
    scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
    scrollContainer.addEventListener("touchmove", handleTouchMove, { passive: true });
    scrollContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, [photos]);

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
            className="gallery-scroll-container"
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
