import React from "react";
import CardDesign from "./Cards/CardDesign";

const Design = () => {
  return (
    <div className="mx-5 my-2 d-flex flex-column gap-2">
      <CardDesign />
      <CardDesign />
      <CardDesign />
    </div>
  );
};

export default Design;
