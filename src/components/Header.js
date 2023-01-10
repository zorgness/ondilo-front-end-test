import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-baseline mx-4 mt-4 mb-1">
      <div>
        <h2 className="header-label">Schedule</h2>
      </div>

      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="transparent"
            className="border-0"
            id="dropdown-basic"
          >
            Aug 5, 2021
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Aug 5, 2021</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Aug 6, 2021</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Aug 7, 2021</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
