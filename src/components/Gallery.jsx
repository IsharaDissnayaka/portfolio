import React, { useEffect, useState } from 'react';
import '../style/Gallery.css';

const images = [
  {
    src: '../img/2.jpg',
    title: 'Dialog Innovation Challenge 2023',
    description:
      'Promoted to round two of Dialog Innovation Challenge after being selected into the top 125 out of 1200+ projects from all over Sri Lanka (Currently being carried out)',
  },
  {
    src: '../img/1.jpg',
    title: 'Project Title 2',
    description: 'Short description for project 2.',
  },
  {
    src: '../img/3.jpg',
    title: 'Project Title 3',
    description: 'Short description for project 3.',
  },
  {
    src: '../img/2.jpg',
    title: 'Project Title 4',
    description: 'Short description for project 4.',
  },
  // Add more images as needed
];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1; // Show one image at a time for a slider effect

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <div className="gallery-dark-container">
      {visibleImages.map((image, index) => (
        <div key={index} className="gallery-dark-item">
          <img
            src={image.src}
            alt={image.title}
            className="gallery-dark-img"
          />
          <div className="gallery-dark-overlay">
            <h2 className="gallery-dark-title">{image.title}</h2>
            <p className="gallery-dark-desc">{image.description}</p>
          </div>
        </div>
      ))}
      <div className="gallery-dark-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dark-dot ${idx === startIndex ? 'active' : ''}`}
            onClick={() => setStartIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;