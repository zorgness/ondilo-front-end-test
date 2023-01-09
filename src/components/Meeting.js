import React from "react";
import Table from "react-bootstrap/Table";
import { data } from "../data/dataMeeting";

const thStyle = {
  background: "#fee5df",

  borderRadius: "10px",
  padding: "10px 0",
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

      <Table
        borderless={true}
        style={{
          background: "#fef9f5",
          borderRadius: "10px",
          padding: "16px",
          // borderSpacing: "24px 8px",
          // borderCollapse: "collapse",
          // overflow: "hidden",
          // display: "table",
        }}
        className="text-center"
      >
        {/* <colgroup>
          <col class="bg-success"></col>
          <col span="2" class="bg-info"></col>
          <col span="2" class="bg-danger"></col>
        </colgroup> */}

        <thead>
          <tr>
            {data.map(({ id, day, date }) => {
              return (
                <th
                  style={thStyle}
                  className={`col-table${id}`}
                  key={id}
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
                  style={{
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
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
  );
};

export default Meeting;
