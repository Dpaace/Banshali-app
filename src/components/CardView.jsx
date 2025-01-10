// import "./../assets/styles/CardView.css";


import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { globalData } from "../data/globalData";
import "./../assets/styles/CardView.css";

const CardView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle mouse wheel scroll
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      setCurrentIndex((prevIndex) => (prevIndex + 1) % globalData.length);
    } else if (event.deltaY < 0) {
      // Scroll up
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? globalData.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("wheel", handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="card-view">
      <div className="card">
        <img
          src={globalData[currentIndex].profile_image}
          alt={globalData[currentIndex].name}
          className="card-image"
        />
        <div className="card-content">
          <button className="generate-family-tree">Generate Family Tree</button>
          <h2>{globalData[currentIndex].name}</h2>
          <p>{globalData[currentIndex].pustaNumber}</p>
          <button className="info-button">
            <FaInfoCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardView;
