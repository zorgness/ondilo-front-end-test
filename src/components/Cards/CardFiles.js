import React, { useRef } from "react";
import figma from "../../icons/figma.png";

const CardFiles = () => {
  const cardIcon = useRef();

  const handleMouseEnter = () => {
    cardIcon.current.style.backgroundColor = "white";
  };

  const handleMouseLeave = () => {
    cardIcon.current.style.backgroundColor = "black";
  };
  return (
    <div
      className="card-product"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-icon card-icon-files" ref={cardIcon}>
        <img src={figma} alt={"icon"} style={{ width: "24px" }} />
      </div>
      <div className="card-product-infos">
        <h2>Product name</h2>
        <p>
          Product description with <strong>relevant info</strong> only.
        </p>
      </div>

      <div className="d-flex align-items-center">
        <p>0.6 KB</p>
        <i class="fa-solid fa-download mx-3"></i>
      </div>
    </div>
  );
};

export default CardFiles;
