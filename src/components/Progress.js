import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "../data/dataProgress";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

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
          <div className="d-flex align-items-center justify-content-between ">
            {/* <div
              className="avatar d-flex justify-content-center align-items-center"
              style={{ background: "white", verticalAlign: "middle " }}
            >
              <p>35 %</p>
            </div> */}
            <div className="doughnut-container">
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                }}
                data={data}
              />
            </div>

            {/* <Container className="bg-success">
              <Row>
                <Col className="d-flex justify-content-end bubble-container">
                  <div className="bubble bubble-orange mt-1"></div>
                </Col>
                <Col className="">
                  <h5 style={{ fontSize: "12px" }}>Cartoon Illustration</h5>
                  <p style={{ fontSize: "8px" }}>Modern storytelling</p>
                </Col>
              </Row>
              <Row>
                <Col className=" d-flex justify-content-end bubble-container">
                  <div className="bubble bubble-purple mt-1"></div>
                </Col>
                <Col className="">
                  <h5 style={{ fontSize: "12px" }}>Abstact Pattern</h5>

                  <p style={{ fontSize: "8px" }}>Geometric shape</p>
                </Col>
              </Row>
            </Container> */}
            <div className="">
              <ul className="doughnut-list">
                <li>
                  <h6 style={{ fontSize: "12px" }}>Cartoon Illustration</h6>

                  <p style={{ fontSize: "8px" }}>Modern storytelling</p>
                </li>
                <li>
                  <h6 style={{ fontSize: "12px" }}>Abstact Pattern</h6>

                  <p style={{ fontSize: "8px" }}>Geometric shape</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
