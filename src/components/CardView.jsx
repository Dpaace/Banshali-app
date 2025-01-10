// import { useState, useEffect } from "react";
// import { FaInfoCircle } from "react-icons/fa";
// import { globalData } from "../data/globalData";
// import "./../assets/styles/CardView.css";

// const CardView = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalCards = globalData.length;

//   // Handle scroll to navigate cards
//   const handleScroll = (event) => {
//     if (event.deltaY > 0) {
//       // Scrolling down, show the next card
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
//     } else if (event.deltaY < 0) {
//       // Scrolling up, show the previous card
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? totalCards - 1 : prevIndex - 1
//       );
//     }
//   };

//   useEffect(() => {
//     // Attach the scroll event listener to the window
//     window.addEventListener("wheel", handleScroll);
//     return () => {
//       // Clean up the event listener when the component unmounts
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, [totalCards]);

//   return (
//     <div className="card-view">
//       <div className="card">
//         <img
//           src={globalData[currentIndex].profile_image}
//           alt={globalData[currentIndex].name}
//           className="card-image"
//         />
//         <div className="card-content">
//           <button className="generate-family-tree">Generate Family Tree</button>
//           <h2>{globalData[currentIndex].name}</h2>
//           <p>{globalData[currentIndex].pustaNumber}</p>
//           <button className="info-button">
//             <FaInfoCircle />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default CardView;


// import { useState, useEffect } from "react";
// import { FaInfoCircle } from "react-icons/fa";
// import { globalData } from "../data/globalData";
// import "./../assets/styles/CardView.css";

// const CardView = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const totalCards = globalData.length;

//   const handleScroll = (event) => {
//     if (event.deltaY > 0) {
//       // Scroll down
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
//     } else if (event.deltaY < 0) {
//       // Scroll up
//       setCurrentIndex((prevIndex) =>
//         prevIndex === 0 ? totalCards - 1 : prevIndex - 1
//       );
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll);
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, [totalCards]);

//   return (
//     <div className="card-view">
//       <div
//         className="card"
//         style={{
//           transform: `translateY(${currentIndex * -100}%)`,
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         <img
//           src={globalData[currentIndex].profile_image}
//           alt={globalData[currentIndex].name}
//           className="card-image"
//         />
//         <div className="card-content">
//           <button className="generate-family-tree">Generate Family Tree</button>
//           <h2 className="card-title">{globalData[currentIndex].name}</h2>
//           <p className="card-subtitle">{globalData[currentIndex].pustaNumber}</p>
//           <button className="info-button">
//             <FaInfoCircle />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardView;

// import { useState, useEffect } from "react";
// import { FaInfoCircle } from "react-icons/fa";
// import { globalData } from "../data/globalData";
// import "./../assets/styles/CardView.css";

// const CardView = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track which card is visible

//   const handleWheel = (e) => {
//     if (e.deltaY > 0) {
//       // Scroll Right
//       setCurrentIndex((prevIndex) =>
//         prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     } else if (e.deltaY < 0) {
//       // Scroll Left
//       setCurrentIndex((prevIndex) =>
//         prevIndex > 0 ? prevIndex - 1 : prevIndex
//       );
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel); // Add scroll listener
//     return () => {
//       window.removeEventListener("wheel", handleWheel); // Cleanup on unmount
//     };
//   }, []);

//   return (
//     <div className="card-view">
//       <div
//         className="card-container"
//         style={{
//           transform: `translateX(${-currentIndex * 100}%)`, // Move container left or right
//           transition: "transform 0.5s ease-in-out", // Smooth animation
//         }}
//       >
//         {globalData.map((item, index) => (
//           <div key={index} className="card">
//             <img
//               src={item.profile_image}
//               alt={item.name}
//               className="card-image"
//             />
//             <div className="card-content">
//               <button className="generate-family-tree">
//                 Generate Family Tree
//               </button>
//               <h2 className="card-title">{item.name}</h2>
//               <p className="card-subtitle">{item.pustaNumber}</p>
//               <button className="info-button">
//                 <FaInfoCircle />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardView;

import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { globalData } from "../data/globalData";
import "./../assets/styles/CardView.css";

const CardView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0); // Track initial touch point
  const [touchEnd, setTouchEnd] = useState(0); // Track final touch point

  // Handle desktop scrolling
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.deltaY < 0) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX); // Store the X-coordinate of the touch
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX); // Store the X-coordinate of the touch

    // Determine swipe direction
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) =>
        prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
    if (touchEnd - touchStart > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  useEffect(() => {
    // Add scroll event listener for desktop
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      className="card-view"
      onTouchStart={handleTouchStart} // Mobile touch start
      onTouchEnd={handleTouchEnd} // Mobile touch end
    >
      <div
        className="card-container"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
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
              <button className="generate-family-tree">
                Generate Family Tree
              </button>
              <h2 className="card-title">{item.name}</h2>
              <p className="card-subtitle">{item.pustaNumber}</p>
              <button className="info-button">
                <FaInfoCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;
