import React from "react";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-baseline m-4">
      <div>
        <h2>Schedule</h2>
      </div>

      <div>
        <h6>
          Aug 5, 2021 <i className="fa-solid fa-caret-down"></i>
        </h6>
      </div>
    </div>
  );
};

export default Header;
