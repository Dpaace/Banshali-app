// import { useState } from "react";
import "../assets/styles/AdminDashboard.css";
import PropTypes from 'prop-types';

import sample1 from '/src/assets/public/sample_1.jpg';

import { FaBell } from "react-icons/fa";

const Header = ({ view, setView }) => {
  // const [view, setView] = useState("Card View");
  return (
    <div className="flex justify-end items-center py-[1rem] px-4 lg:px-[10rem] border-[#ddd] border-b">
      <div className=" flex items-center gap-1">
        {/* Notification Bell */}
        <FaBell className="w-6 h-6 lg:h-6 lg:w-6 p-[0.3rem] rounded-md border border-[#ccc] bg-[#f9f9f9]" />

        {/* Profile Image */}
        <img
          className="profile-image"
          src={sample1}
          alt="Profile"
        />

        {/* Dropdown Button */}
        <div className="hidden lg:flex items-center">
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="view-dropdown"
          >
            <option value="Card View">Card View</option>
            <option value="Table View">Table View</option>
          </select>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
};

export default Header;






// const Header = () => {
//   const [view, setView] = useState("Card View");

//   return (
//     <div className="header">
//       <div className="header-right">
//         {/* Notification Bell */}
//         <FaBell className="notification-icon" />

//         {/* Profile Image */}
//         <img className="profile-image" src="/src/assets/admin/images/man_sample_1.jpg" alt="Profile" />

//         {/* Dropdown Button */}
//         <div className="view-selector">
//           <select
//             value={view}
//             onChange={(e) => setView(e.target.value)}
//             className="view-dropdown"
//           >
//             <option value="Card View">Card View</option>
//             <option value="Table View">Table View</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };