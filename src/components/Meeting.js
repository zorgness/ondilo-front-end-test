import React from "react";
import Table from "react-bootstrap/Table";
import { data } from "../data/dataMeeting";
import Dropdown from "react-bootstrap/Dropdown";

const Meeting = () => {
  const handleMouseEnter = (id) => {
    const cellsToSelect = document.querySelectorAll(`.col-table${id}`);
    const thWrapper = document.querySelector(`.th-wrapper${id}`);

    thWrapper.style.background = "transparent";

    cellsToSelect.forEach((element, index) => {
      element.style.border = "2px solid black";
      if (index === 0) {
        element.style.borderStyle = "solid solid none solid ";
      } else if (index === cellsToSelect.length - 1) {
        element.style.borderStyle = "none solid solid solid";
      } else {
        element.style.borderStyle = "none solid none solid";
      }
    });
  };

  const handleMouseLeave = (id) => {
    const cellsToSelect = document.querySelectorAll(`.col-table${id}`);
    const thWrapper = document.querySelector(`.th-wrapper${id}`);

    thWrapper.style.background = "#fee5df";

    cellsToSelect.forEach((element) => {
      element.style.border = "2px solid transparent";
    });
  };

  return (
    <div className="m-4">
      <div className="d-flex justify-content-between  align-items-baseline mb-1">
        <div>
          <h4>Meeting</h4>
        </div>

        <div>
          {/* <h6>
            Aug 3, 2021- Aug 7, 2021 <i className="fa-solid fa-caret-down"></i>
          </h6> */}
          <Dropdown>
            <Dropdown.Toggle
              variant="transparent"
              className="border-0"
              id="dropdown-basic"
            >
              Aug 3, 2021- Aug 7, 2021
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                Aug 3, 2021- Aug 7, 2021{" "}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Aug 10, 2021- Aug 14, 2021{" "}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Aug 17, 2021- Aug 21, 2021{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <Table borderless={true} className="text-center" responsive="sm">
        <thead>
          <tr>
            {data.map(({ id, day, date }) => {
              return (
                <th
                  className={`col-table${id}`}
                  key={id}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={() => handleMouseLeave(id)}
                >
                  <div className={`th-wrapper th-wrapper${id}`}>
                    {day}
                    <br />
                    <span>{date}</span>
                  </div>
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
