import React from "react";
import "./GalleryPage.scss";
import sample1 from "../assets/pastevent1.jpg";
import sample2 from "../assets/pastevent2.png";
import sample3 from "../assets/pastevent3.png";
// Add more images as needed

const images = [sample1, sample2, sample3]; // Add all image imports here

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <div className="container">
        <h1>Past Event Gallery</h1>
        <p className="intro">
          A glimpse of our previous conferences, workshops, and networking
          sessions.
        </p>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
