import React from "react";
import CardDesign from "./Cards/CardDesign";
import { data } from "../data/dataDesign";

const Design = () => {
  return (
    <div className="mx-5 my-2 d-flex flex-column gap-2">
      {data.map((element) => {
        return <CardDesign key={element.id} data={element} />;
      })}
    </div>
  );
};

export default Design;
