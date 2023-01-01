import "../styles/MiniCarousel.css"
import React, { useState } from 'react';

const MiniCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    const { images } = props;
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  const handleNextClick = () => {
    const { images } = props;
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  };

  const { images } = props;

  return (
    <div className="mini-carousel-container">
      <img src={images[currentIndex]} alt="carousel" />
      <div className="arrows">
        <button onClick={handleNextClick}>
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" fill="white" />
          </svg>
        </button>
        <button onClick={handlePreviousClick}>
          <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z" fill="white" transform="rotate(180 24 40)" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MiniCarousel;