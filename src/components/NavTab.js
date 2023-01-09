import React from "react";

const Tab = ({ label, onClick, isActive }) => {
  return (
    <li className="">
      <a
        href="/"
        className={`tab-underlined ${isActive ? "active" : ""}`}
        onClick={(event) => onClick(event, label)}
      >
        {label}
      </a>
    </li>
  );
};

const NavTab = () => {
  const labels = ["Recent Added", "In Progress", "In Review ", " Completed"];
  const [currentLabel, setCurrentLabel] = React.useState(labels[0]);
  const handleClick = (event, label) => {
    event.preventDefault();
    setCurrentLabel(label);
  };

  return (
    <ul className="list-inline tabs-underlined m-4 justify-content-between">
      {labels.map((label, index) => {
        return (
          <Tab
            key={index}
            label={label}
            isActive={label === currentLabel}
            onClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default NavTab;
