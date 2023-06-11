import { useState } from "react";
import "./GalleryStyles.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const GalleryComponent = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handlePreviousPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = () => {
    setSelectedPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const selectedPhoto = photos[selectedPhotoIndex];

  return (
    <div className="photo-gallery">
      <div className="main-photo">
        <img src={selectedPhoto} alt="Main" />
      </div>
      <div className="sidebar">
        <button className="left" onClick={handlePreviousPhoto}>
          <BsChevronLeft size="24" />
        </button>
        <div className="images">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`sidebar-photo ${
                index === selectedPhotoIndex ? "active" : ""
              }`}
              onClick={() => handlePhotoClick(index)}
            >
              <img src={photo} alt={`Photo ${index}`} />
            </div>
          ))}
        </div>
        <button className="right" onClick={handleNextPhoto}>
          <BsChevronRight size="24" />
        </button>
      </div>
    </div>
  );
};

export default GalleryComponent;
