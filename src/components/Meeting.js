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
  console.log(data);
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
        hover={true}
      >
        <thead>
          <tr>
            {data.map(({ id, day, date }) => {
              return (
                <th style={thStyle} key={id}>
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
