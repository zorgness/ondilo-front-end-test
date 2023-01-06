import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import hamburger from "./../icons/hamburger-white.png";

function Navigation() {
  const expand = "sm";
  return (
    <>
      <Navbar key={expand} variant="dark" expand={expand} className="mb-3">
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <img
            src={hamburger}
            style={{ width: "24px" }}
            alt="hamburger"
            className="mx-4 my-4"
          />
        </Navbar.Toggle>

        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="start"
            className="bg-black text-white"
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
            ></Offcanvas.Header>
            <Offcanvas.Title className="mt-3 mx-2">
              <i className="fa-solid fa-diamond diamond-red"></i>
              <i className="fa-solid fa-diamond diamond-white"></i>
            </Offcanvas.Title>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-column flex-grow-1 pe-3 gap-3"
                style={{ marginTop: "80px" }}
              >
                <Nav.Link href="#action1">
                  <i className="fa-solid fa-user fa-fw"></i>
                  <span className="mx-1">Profile</span>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <i className="fa-solid fa-calendar-days fa-fw"></i>{" "}
                  <span className="mx-1">Schedule</span>
                </Nav.Link>
                <Nav.Link href="#action3">
                  <i className="fa-solid fa-chart-column fa-fw"></i>{" "}
                  <span className="mx-1">Overview</span>
                </Nav.Link>
                <Nav.Link href="#action4">
                  <i className="fa-brands fa-rocketchat fa-fw"></i>{" "}
                  <span className="mx-1">Chat</span>
                </Nav.Link>
                <Nav.Link href="#action5">
                  <i className="fa-solid fa-gear fa-fw"></i>{" "}
                  <span className="mx-1">Settings</span>
                </Nav.Link>
                <Nav.Link href="#action6" style={{ marginTop: "200px" }}>
                  <i className="fa-solid fa-right-from-bracket fa-fw"></i>{" "}
                  <span className="mx-1">Logout</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
