// import { useState } from "react";
import "../assets/styles/AdminDashboard.css";
import PropTypes from 'prop-types';

import { FaBell } from "react-icons/fa";

const Header = ({ view, setView }) => {
  // const [view, setView] = useState("Card View");
  return (
    <div className="header">
      <div className="header-right">
        {/* Notification Bell */}
        <FaBell className="notification-icon" />

        {/* Profile Image */}
        <img
          className="profile-image"
          src="/src/assets/images/sample_1.jpg"
          alt="Profile"
        />

        {/* Dropdown Button */}
        <div className="view-selector">
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