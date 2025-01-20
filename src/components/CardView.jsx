// import { useState, useEffect, useRef } from "react";
// import { globalData } from "../data/globalData";
// import "./../assets/styles/CardView.css";

// const CardView = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [touchStartX, setTouchStartX] = useState(0); // For touch events
//   const [touchMoveX, setTouchMoveX] = useState(0); // For touch events
//   const isCooldown = useRef(false);

//   // Handle wheel scrolling
//   const handleWheel = (e) => {
//     if (isCooldown.current) return;

//     const deltaY = e.deltaY;
//     if (deltaY > 0) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     } else if (deltaY < 0) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex > 0 ? prevIndex - 1 : prevIndex
//       );
//     }

//     isCooldown.current = true;
//     setTimeout(() => {
//       isCooldown.current = false;
//     }, 1000); // 3-second cooldown
//   };

//   // Handle mouse drag
//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;
//     const moveX = e.clientX - startX;
//     document.querySelector(
//       ".card-container"
//     ).style.transform = `translateX(${-currentIndex * 100 + (moveX / window.innerWidth) * 100}%)`;
//   };

//   const handleMouseUp = (e) => {
//     setIsDragging(false);
//     const endX = e.clientX;
//     if (startX - endX > 50) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     } else if (endX - startX > 50) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex > 0 ? prevIndex - 1 : prevIndex
//       );
//     }

//     document.querySelector(
//       ".card-container"
//     ).style.transform = `translateX(${-currentIndex * 100}%)`;
//   };

//   // Handle touch events for mobile
//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchMoveX(e.touches[0].clientX - touchStartX);
//     document.querySelector(
//       ".card-container"
//     ).style.transform = `translateX(${-currentIndex * 100 + (touchMoveX / window.innerWidth) * 100}%)`;
//   };

//   const handleTouchEnd = () => {
//     if (touchMoveX > 50) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex > 0 ? prevIndex - 1 : prevIndex
//       );
//     } else if (touchMoveX < -50) {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < globalData.length - 1 ? prevIndex + 1 : prevIndex
//       );
//     }
//     setTouchMoveX(0);
//     document.querySelector(
//       ".card-container"
//     ).style.transform = `translateX(${-currentIndex * 100}%)`;
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleWheel);
//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [currentIndex]);

//   return (
//     <div
//       className="card-view"
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={() => setIsDragging(false)}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//     >
//       <div
//         className="card-container"
//         style={{
//           transform: `translateX(${-currentIndex * 100}%)`,
//           transition: isDragging ? "none" : "transform 0.5s ease-in-out",
//         }}
//       >
//         {globalData.map((item, index) => (
//           <div key={index} className="card snap-center">
//             <img
//               src={item.profile_image}
//               alt={item.name}
//               className="card-image"
//             />
//             <div className="card-content">
//               <button className="generate-family-tree">Generate Family Tree</button>
//               <h2 className="card-title">{item.name}</h2>
//               <div className="card-subtitle">
//                 <p className="card-subtitle-text">Pusta no. {item.pustaNumber}</p>
//               </div>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardView;



// import { useState, useEffect, useRef } from "react";
// import { globalData } from "../data/globalData";

// const CardView = () => {

//   return (
//     <div
//       className="flex w-full h-full py-1 lg:w-2/5 lg:h-[90%] overflow-hidden snap-mandatory snap-x scrollbar-hide overflow-x-scroll transform transition-transform duration-1000 ease-in-out "

//     >
//       {globalData.map((item, index) => (
//         <div
//           key={index}
//           className="relative min-w-full h-full  snap-center"

//         >
//           <img
//             src={item.profile_image}
//             alt={item.name}
//             className="w-full h-full object-cover select-none"
//           />
//           <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent text-white text-center z-10 select-none">
//             <button className="absolute top-4 left-4 bg-purple-700/70 text-white px-4 py-2 rounded-lg text-sm cursor-pointer z-20 hover:bg-white hover:text-purple-700">
//               Generate Family Tree
//             </button>
//             <h2 className="text-2xl font-bold mb-4 ml-5 z-20">{item.name}</h2>
//             <div className="flex justify-center items-center ml-5 bg-green-100 rounded-full h-10 w-32 mb-10 z-20">
//               <p className="text-green-700 text-sm font-normal">
//                 Pusta no. {item.pustaNumber}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>




//   );
// };

// export default CardView;

import { useRef } from "react";
import { globalData } from "../data/globalData";


const CardView = () => {
  const containerRef = useRef(null);

  // Scroll to the left
  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  // Scroll to the right
  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-full lg:w-2/5 lg:h-[90%] overflow-hidden">
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 bg-gray-50 p-2 opacity-50 text-white rounded-full z-20 "
        onClick={scrollLeft}
      >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000" alt="left" />
      </button>
      <button
        className="absolute right-0 top-1/2  bg-gray-50 opacity-50 p-2 text-white  rounded-full z-20 "
        onClick={scrollRight}
      >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=61&format=png&color=000000" alt="right" />
      </button>

      {/* Card Container */}
      <div
        ref={containerRef}
        className="flex w-full h-full overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
      >
        {globalData.map((item, index) => (
          <div
            key={index}
            className="relative min-w-full h-full overflow-hidden snap-center"
          >
            <img
              src={item.profile_image}
              alt={item.name}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent text-white text-center z-10 select-none">
              <button className="absolute top-4 left-4 bg-purple-700/70 text-white px-4 py-2 rounded-lg text-sm cursor-pointer z-20 hover:bg-white hover:text-purple-700">
                Generate Family Tree
              </button>
              <h2 className="text-2xl font-bold ml-5 mb-4 z-20">{item.name}</h2>
              <div className="flex justify-center items-center bg-[#E9FFEF] text-[#409261] text-base font-normal rounded-full h-10 w-32 ml-5 mb-10 z-20">
                Pusta no. {item.pustaNumber}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardView;




