// import "./../assets/styles/CardView.css";


import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { globalData } from "../data/globalData";
import "./../assets/styles/CardView.css";
const CardView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = globalData.length;

  // Handle scroll to navigate cards
  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down, show the next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    } else if (event.deltaY < 0) {
      // Scrolling up, show the previous card
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalCards - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    // Attach the scroll event listener to the window
    window.addEventListener("wheel", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("wheel", handleScroll);
    };
  }, [totalCards]);

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
