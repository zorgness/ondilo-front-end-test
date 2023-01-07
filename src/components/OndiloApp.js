import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
import Header from "./Header";
import Navigation from "./Navigation";
import Search from "./Search";

const OndiloApp = () => {
  return (
    <div className="d-flex bg-info">
      <Navigation />
      {/* <div className="d-flex flex-column"> */}
      <Container>
        <Row className="header-row">
          <Col>
            <Header />
          </Col>
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col>
            <ContentLeft />
          </Col>
          <Col>
            <ContentRight />
          </Col>
        </Row>
      </Container>

      {/* <div className="d-flex flex-wrap justify-content-center"> */}
      {/* <Container>
        <Row>
          <Col>
            <ContentLeft />
          </Col>
          <Col>
            <ContentRight />
          </Col>
        </Row>
      </Container> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default OndiloApp;
