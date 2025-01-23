import { useRef, useState } from "react";
import { globalData } from "../data/globalData";
import FamilyTreeModal from "./FamilyTreeModal";

const CardView = () => {
  const containerRef = useRef(null);
  const [selectedFamily, setSelectedFamily] = useState(null);

  // Handle the click to generate the family tree
  const handleGenerateFamilyTree = (family) => {
    console.log("Selected Family Data:", family); // Debugging selected family data
    setSelectedFamily(family); // Set the selected family to display in the modal
  };

  // Scroll the container to the left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll the container to the right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full h-full lg:w-2/5 lg:h-[90%] overflow-hidden">
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 opacity-50 text-white rounded-full z-20 hover:opacity-75"
        onClick={scrollLeft}
      >
        <img
          className="w-6 h-6"
          src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
          alt="Scroll Left"
        />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 opacity-50 text-white rounded-full z-20 hover:opacity-75"
        onClick={scrollRight}
      >
        <img
          className="w-6 h-6"
          src="https://img.icons8.com/?size=100&id=61&format=png&color=000000"
          alt="Scroll Right"
        />
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
              src={item.photo_url || "https://via.placeholder.com/150"}
              alt={item.name}
              className="w-full h-full object-cover select-none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black/90 via-black/20 to-transparent text-white text-center z-10 select-none">
              <button
                onClick={() => handleGenerateFamilyTree(item)}
                className="absolute top-4 left-4 bg-purple-700/70 text-white px-4 py-2 rounded-lg text-sm cursor-pointer z-20 hover:bg-white hover:text-purple-700"
              >
                Generate Family Tree
              </button>
              <h2 className="text-2xl font-bold ml-5 mb-4 z-20">{item.name}</h2>
              <div className="flex justify-center items-center bg-[#E9FFEF] text-[#409261] text-base font-normal rounded-full h-10 w-32 ml-5 mb-10 z-20">
                Pusta no. {item.pusta_number}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Family Tree Modal */}
      {selectedFamily && (
        <FamilyTreeModal
          familyData={selectedFamily}
          onClose={() => setSelectedFamily(null)}
        />
      )}
    </div>
  );
};

export default CardView;
