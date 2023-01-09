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
    <div className="d-flex">
      <Navigation />

      <Container>
        <Row className="header-row">
          <Col>
            <Header />
          </Col>
          <Col>
            <Search />
          </Col>
        </Row>
        <Row lg={2}>
          <Col>
            <ContentLeft />
          </Col>
          <Col>
            <ContentRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OndiloApp;
