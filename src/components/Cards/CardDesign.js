import React, { useRef } from "react";

const CardDesign = () => {
  const cardIcon = useRef();
  const icon = useRef();

  const handleMouseEnter = () => {
    cardIcon.current.style.backgroundColor = "white";
    icon.current.style.color = "black";
  };

  const handleMouseLeave = () => {
    cardIcon.current.style.backgroundColor = "salmon";
    icon.current.style.color = "white";
  };
  return (
    <div
      className="card-product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon" ref={cardIcon}>
        <i class="fa-solid fa-palette" ref={icon}></i>
      </div>
      <div className="card-product-infos">
        <h2>Product name</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>
    </div>
  );
};

export default CardDesign;
