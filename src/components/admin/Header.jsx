import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <button>Card View</button>
      </div>
      <div className="header-right">
        <button className="filter-button">Filter</button>
        <button className="add-button">+ Add New</button>
      </div>
    </div>
  );
};

export default Header;
