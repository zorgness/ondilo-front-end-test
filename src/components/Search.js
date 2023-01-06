import React from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className=" d-flex ">
      <div className="mx-4 my-4">
        <Form className="d-flex" id="input-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 input-search bg-light border-0"
            aria-label="Search"
            style={{ width: "280px" }}
          />
        </Form>
      </div>
      <div className="mx-4 my-4">
        <img
          src="https://thumbs.dreamstime.com/b/female-user-profile-avatar-woman-character-screen-saver-emotions-website-mobile-app-design-vector-199248695.jpg"
          alt="avatar"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Search;
