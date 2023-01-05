import React from "react";

const NavTab = () => {
  return (
    <ul class="list-inline tabs-underlined">
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
  );
};

export default NavTab;
