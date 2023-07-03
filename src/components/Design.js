import React from "react";
import CardDesign from "./Cards/CardDesign";
import { data } from "../data/dataDesign";

const Design = () => {
  return (
    <div className="d-flex flex-column gap-3 m-4">
      {data.map((element) => {
        return <CardDesign key={element.id} data={element} />;
      })}
    </div>
  );
};

export default Design;
