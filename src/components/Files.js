import React from "react";
import CardDesign from "./Cards/CardDesign";

const Files = () => {
  return (
    <div className="mx-5 my-2 d-flex flex-column gap-2">
      <h4>Files</h4>
      <CardDesign />
      <CardDesign />
      <CardDesign />
    </div>
  );
};

export default Files;
