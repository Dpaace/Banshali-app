import { useState, useEffect, useRef } from "react";
import { globalData } from "../data/globalData";
import "./../assets/styles/CardView.css";

const CardView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0); // For touch events
  const [touchMoveX, setTouchMoveX] = useState(0); // For touch events
  const isCooldown = useRef(false); // Cooldown for scroll and drag

  // Handle wheel scrolling
  const handleWheel = (e) => {
    if (isCooldown.current) return;

    const deltaY = e.deltaY;
    if (deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (deltaY < 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }

    isCooldown.current = true;
    setTimeout(() => {
      isCooldown.current = false;
    }, 1000); // 3-second cooldown
  };

  // Handle mouse drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    document.querySelector(
      ".card-container"
    ).style.transform = `translateX(${-currentIndex * 100 + (moveX / window.innerWidth) * 100}%)`;
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    const endX = e.clientX;
    if (startX - endX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (endX - startX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }

    document.querySelector(
      ".card-container"
    ).style.transform = `translateX(${-currentIndex * 100}%)`;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchMoveX(e.touches[0].clientX - touchStartX);
    document.querySelector(
      ".card-container"
    ).style.transform = `translateX(${-currentIndex * 100 + (touchMoveX / window.innerWidth) * 100}%)`;
  };

  const handleTouchEnd = () => {
    if (touchMoveX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (touchMoveX < -50) {
      setCurrentIndex((prevIndex) =>
        prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    setTouchMoveX(0);
    document.querySelector(
      ".card-container"
    ).style.transform = `translateX(${-currentIndex * 100}%)`;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex]);

  return (
    <div
      className="card-view"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="card-container"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: isDragging ? "none" : "transform 0.5s ease-in-out",
        }}
      >
        {globalData.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.profile_image}
              alt={item.name}
              className="card-image"
            />
            <div className="card-content">
              <button className="generate-family-tree">Generate Family Tree</button>
              <h2 className="card-title">{item.name}</h2>
              <p className="card-subtitle">{item.pustaNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
