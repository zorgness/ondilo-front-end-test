import React from "react";
import Form from "react-bootstrap/Form";

const Search = () => {
  return (
    <div className="mx-5 my-4">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </div>
  );
};

export default Search;
