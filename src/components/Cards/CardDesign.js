import React, { useRef } from "react";

const CardDesign = ({ data }) => {
  const cardIcon = useRef();

  const handleMouseEnter = () => {
    cardIcon.current.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    cardIcon.current.style.backgroundColor = "#fee5df";
  };

  const { title, icon, start, end, profilesImgUrl } = data;
  return (
    <div
      className="card-product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon card-icon-design" ref={cardIcon}>
        <i className={icon}></i>
      </div>
      <div className="card-product-infos">
        <h2>{title}</h2>
        <p>
          {start} - {end}
        </p>
      </div>

      <div className="card-avatars">
        {profilesImgUrl.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="avatar-profile"
              className="avatar-card"
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDesign;
