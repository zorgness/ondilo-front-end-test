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
    <div className="mx-5 my-2">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Project Progress</h4>
        </div>

        <div>
          <h4>...</h4>
        </div>
      </div>

      <div
        style={{ background: "#f7f7f7", padding: "24px", borderRadius: "10px" }}
      >
        <div className="d-flex justify-content-between  align-items-baseline">
          <div>
            <h6>Illustration Pattern</h6>
          </div>

          <div className="d-flex">
            <i className="fa-solid fa-download mx-3"></i>
            <i className="fa-solid fa-file-pen"></i>
          </div>
        </div>
        <div>
          {/* <div className="d-flex flex-column flex-start m-4">
            <div className="d-flex flex-column">
              <p style={{ fontSize: "12px" }}>Cartoon Illustration</p>

              <p style={{ fontSize: "8px" }}>Modern storytelling</p>
            </div>

            <div className="d-flex flex-column">
              <p style={{ fontSize: "12px" }}>Abstact Pattern</p>

              <p style={{ fontSize: "8px" }}>Geometric shape</p>
            </div>
          </div> */}

          <div className="d-flex align-items-center">
            {/* <div
              className="avatar d-flex justify-content-center align-items-center"
              style={{ background: "white", verticalAlign: "middle " }}
            >
              <p>35 %</p>
            </div> */}
            <div style={{ height: "180px", width: "180px" }}>
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                }}
                data={data}
              />
            </div>

            <Container className="mx-4">
              <Row>
                {/* <Col>
                  <p style={{ color: "rgba(255,85,41,255)" }}>.</p>
                </Col> */}
                <Col>
                  <p style={{ fontSize: "12px" }}>Cartoon Illustration</p>
                  <p style={{ fontSize: "8px" }}>Modern storytelling</p>
                </Col>
              </Row>
              <Row>
                {/* <Col>
                  <p style={{ color: "rgba(59,33,50,255)" }}>.</p>
                </Col> */}
                <Col>
                  <p style={{ fontSize: "12px" }}>Abstact Pattern</p>

                  <p style={{ fontSize: "8px" }}>Geometric shape</p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
