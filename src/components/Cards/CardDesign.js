import React, { useRef } from "react";

const CardDesign = () => {
  const cardIcon = useRef();

  const handleMouseEnter = () => {
    cardIcon.current.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    cardIcon.current.style.backgroundColor = "#fee5df";
  };
  return (
    <div
      className="card-product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon card-icon-design" ref={cardIcon}>
        <i className="fa-solid fa-palette"></i>
      </div>
      <div className="card-product-infos">
        <h2>Product name</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>

      <div className="card-avatars m-2">
        <img
          src="https://source.unsplash.com/random/profile"
          alt="avatar-profile"
          className="avatar-card"
        />
        <img
          src="https://source.unsplash.com/random/profile"
          alt="avatar-profile"
          className="avatar-card"
        />
        <img
          src="https://source.unsplash.com/random/profile"
          alt="avatar-profile"
          className="avatar-card"
        />
      </div>
    </div>
  );
};

export default CardDesign;
