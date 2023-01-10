import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

const Search = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, [show]);

  return (
    <div className="d-flex align-items-center justify-content-between mx-4 mt-4 mb-1">
      <div className=" form-input">
        <Form className="d-flex" id="input-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 input-search border-0"
            aria-label="Search"
            style={{ width: "520px", backgroundColor: "#f7f7f7" }}
            ref={inputRef}
          />
        </Form>
      </div>

      <div className="d-flex align-items-center search-mobile-container">
        {show ? (
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input-search border-0"
              aria-label="Search"
              style={{ width: "120px", backgroundColor: "#f7f7f7" }}
              ref={inputRef}
            />
          </Form>
        ) : null}
        <div className="lookup-mobile mx-3">
          <i className="fa-solid fa-magnifying-glass" onClick={handleShow}></i>
        </div>
        <div>
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/41/00/97/1000_F_441009747_IT8Lfot0YFHbzVH6VSPKrxplFTKesed0.jpg"
            alt="avatar"
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
