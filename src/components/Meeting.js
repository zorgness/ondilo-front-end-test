import React from "react";
import Table from "react-bootstrap/Table";

const thStyle = {
  background: "#fee5df",
  borderRadius: "10px",
  height: "72px",
  width: "72px",
};

const Meeting = () => {
  return (
    <div className="mx-5 my-2">
      <div className="d-flex justify-content-between  align-items-baseline">
        <div>
          <h4>Meeting</h4>
        </div>

        <div>
          <h6>
            Aug 3, 2021- Aug 7, 2021 <i class="fa-solid fa-caret-down"></i>
          </h6>
        </div>
      </div>
      {/* <div
        style={{ padding: "16px", background: "#fef9f5", borderRadius: "10px" }}
      > */}
      <Table
        borderless={true}
        style={{ background: "#fef9f5" }}
        className="text-center"
        hover={true}
      >
        <thead>
          <tr>
            <th style={thStyle}>
              Mon
              <br />
              <span>3</span>
            </th>

            <th style={thStyle}>
              Tue
              <br />
              <span>4</span>
            </th>

            <th style={thStyle}>
              Wed
              <br /> <span>5</span>
            </th>

            <th style={thStyle}>
              Thu
              <br /> <span>6</span>
            </th>

            <th style={thStyle}>
              Fri
              <br /> <span>7</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>9:00 AM</td>
            <td>9:00 AM</td>
            <td>9:00 AM</td>
            <td>9:00 AM</td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>2:00 PM</td>
            <td>2:00 PM</td>
            <td>2:00 PM</td>
            <td>2:00 PM</td>
          </tr>
          <tr>
            <td>4:OO PM</td>
            <td>4:OO PM</td>
            <td>4:OO PM</td>
            <td>4:OO PM</td>
            <td>4:OO PM</td>
          </tr>
        </tbody>
      </Table>
      {/* </div> */}
    </div>
  );
};

export default Meeting;
