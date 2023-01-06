import React from "react";

const NavTab = () => {
  return (
    <div className="mx-5 my-4">
      <ul className="list-inline tabs-underlined">
        <li>
          <a href="/" className="tab-underlined active">
            Recent Added
          </a>
        </li>
        <li>
          <a href="/" className="tab-underlined">
            In Progress
          </a>
        </li>
        <li>
          <a href="/" className="tab-underlined">
            In Review
          </a>
        </li>
        <li>
          <a href="/" className="tab-underlined">
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavTab;
