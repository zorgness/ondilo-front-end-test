import React, { useRef } from "react";

const CardFiles = ({ data, icon }) => {
  const cardIcon = useRef();

  const handleMouseEnter = () => {
    cardIcon.current.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    cardIcon.current.style.backgroundColor = "black";
  };

  const { title, date, fileWeight } = data;

  return (
    <div
      className="card-product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon card-icon-files" ref={cardIcon}>
        <img src={icon} alt={"icon"} style={{ width: "24px" }} />
      </div>
      <div className="card-product-infos">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>

      <div className="d-flex align-items-center">
        <p>{fileWeight} KB</p>
        <i className="fa-solid fa-download mx-3"></i>
      </div>
    </div>
  );
};

export default CardFiles;
