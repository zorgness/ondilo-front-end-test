import React from "react";
import CardFiles from "./Cards/CardFiles";
import { data } from "../data/dataFiles";
import { importAll } from "../utils/importAll";

const Files = () => {
  const iconsImg = importAll(
    require.context("../icons", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="d-flex flex-column gap-2 bg-success m-4">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Files</h4>
        </div>

        <div>
          <h6>
            View All <i className="fa-solid fa-arrow-right"></i>
          </h6>
        </div>
      </div>
      {data.map((element) => {
        return (
          <CardFiles
            key={element.id}
            data={element}
            icon={iconsImg[`${element.icon}.png`]}
          />
        );
      })}
    </div>
  );
};

export default Files;
