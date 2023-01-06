import React from "react";
import Table from "react-bootstrap/Table";
import { data } from "../data/dataMeeting";

const thStyle = {
  background: "#fee5df",
  borderRadius: "10px",
  height: "72px",
  width: "72px",
};

const Meeting = () => {
  const handleMouseEnter = (id, e) => {
    console.log(id);
    e.target.style.background = "#fef9f5";

    e.target.style.border = "1px solid black";
  };

  const handleMouseLeave = (id, e) => {
    console.log(id);
    e.target.style.background = "#fee5df";
    e.target.style.border = "none";
  };

  return (
    <div className="mx-5 my-2">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Meeting</h4>
        </div>

        <div>
          <h6>
            Aug 3, 2021- Aug 7, 2021 <i className="fa-solid fa-caret-down"></i>
          </h6>
        </div>
      </div>

      <Table
        borderless={true}
        style={{ background: "#fef9f5" }}
        className="text-center"
      >
        <thead>
          <tr>
            {data.map(({ id, day, date }) => {
              return (
                <th
                  style={thStyle}
                  key={id}
                  onMouseEnter={(e) => handleMouseEnter(id, e)}
                  onMouseLeave={(e) => handleMouseLeave(id, e)}
                >
                  {day}
                  <br />
                  <span>{date}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map(({ id, hours }) => {
              return <td key={id}>{hours[0] ?? "_"}</td>;
            })}
          </tr>
          <tr>
            {data.map(({ id, hours }) => {
              return <td key={id}>{hours[1] ?? "_"}</td>;
            })}
          </tr>
          <tr>
            {data.map(({ id, hours }) => {
              return <td key={id}>{hours[2] ?? "_"}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Meeting;
