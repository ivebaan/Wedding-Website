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
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
      scrollContainer.removeEventListener("touchstart", handleTouchStart);
      scrollContainer.removeEventListener("touchmove", handleTouchMove);
      scrollContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="photo-gallery" id="gallery">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">Our journey in pictures</p>

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
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default PhotoGallery;
