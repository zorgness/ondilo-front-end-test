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
  const handleMouseEnter = (id) => {
    const toSelect = document.querySelectorAll(`.col-table${id}`);

    toSelect.forEach((element, index) => {
      if (index === 0) {
        element.style.background = "#fef9f5";
        element.style.borderStyle = "solid solid none solid ";
      } else if (index === toSelect.length - 1) {
        element.style.borderStyle = "none solid solid solid";
      } else {
        element.style.borderStyle = "none solid none solid";
      }
    });
  };

  const handleMouseLeave = (id) => {
    const toSelect = document.querySelectorAll(`.col-table${id}`);
    toSelect.forEach((element, index) => {
      if (index === 0) {
        element.style.background = "#fee5df";
        element.style.border = "none";
      }
      element.style.border = "none";
    });
  };

  return (
    <div className="m-4">
      <div className="d-flex justify-content-between  align-items-baseline m-3">
        <div>
          <h4>Meeting</h4>
        </div>

        <div>
          <h6>
            Aug 3, 2021- Aug 7, 2021 <i className="fa-solid fa-caret-down"></i>
          </h6>
        </div>
      </div>

      <div
        style={{ background: "#fef9f5", padding: "16px", borderRadius: "10px" }}
      >
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
                    className={`col-table${id}`}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={() => handleMouseLeave(id)}
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
                return (
                  <td
                    key={id}
                    className={`col-table${id}`}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={() => handleMouseLeave(id)}
                  >
                    {hours[0] ?? "_"}
                  </td>
                );
              })}
            </tr>
            <tr>
              {data.map(({ id, hours }) => {
                return (
                  <td
                    key={id}
                    className={`col-table${id}`}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={(e) => handleMouseLeave(id, e)}
                  >
                    {hours[1] ?? "_"}
                  </td>
                );
              })}
            </tr>
            <tr>
              {data.map(({ id, hours }) => {
                return (
                  <td
                    key={id}
                    className={`col-table${id}`}
                    onMouseEnter={() => handleMouseEnter(id)}
                    onMouseLeave={() => handleMouseLeave(id)}
                  >
                    {hours[2] ?? "_"}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Meeting;
