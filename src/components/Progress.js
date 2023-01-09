import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { data } from "../data/dataProgress";

const Progress = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <div className="m-4">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Project Progress</h4>
        </div>

        <div>
          <h4>...</h4>
        </div>
      </div>

      <div
        style={{ background: "#f7f7f7", borderRadius: "10px" }}
        className="p-3"
      >
        <div className="d-flex justify-content-between  align-items-baseline ">
          <div>
            <h6>Illustration Pattern</h6>
          </div>

          <div className="d-flex">
            <i className="fa-solid fa-download mx-3"></i>
            <i className="fa-solid fa-file-pen"></i>
          </div>
        </div>
        <div>
          <div className="d-flex  justify-content-between align-items-center ">
            <div className="doughnut-container position-relative">
              <div className="badge badge-doughnut badge-65 position-absolute rounded-circle">
                <p className="text-black mt-2">{data.datasets[0].data[1]}%</p>
              </div>
              <span className="badge  badge-doughnut badge-35 position-absolute rounded-circle ">
                <p className="text-black mt-2">{data.datasets[0].data[0]}%</p>
              </span>
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                }}
                data={data}
              />
            </div>

            <ul className="doughnut-list">
              <li className="li-cartoon">
                <span className="text-black">
                  <h6>Cartoon Illustration</h6>

                  <p>Modern storytelling</p>
                </span>
              </li>
              <li className="li-abstract">
                <span className="text-black">
                  <h6>Abstact Pattern</h6>

                  <p>Geometric shape</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
