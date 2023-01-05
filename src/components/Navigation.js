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
          <img src={hamburger} style={{ width: "24px" }} alt="hamburger" />
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
            <Offcanvas.Title className="mt-3 mx-2">O</Offcanvas.Title>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-column flex-grow-1 pe-3 gap-3"
                style={{ marginTop: "80px" }}
              >
                <Nav.Link href="#action1">Profile</Nav.Link>
                <Nav.Link href="#action2">Schedule</Nav.Link>
                <Nav.Link href="#action3">Overview</Nav.Link>
                <Nav.Link href="#action4">Chat</Nav.Link>
                <Nav.Link href="#action5">Settings</Nav.Link>
                <Nav.Link href="#action6" style={{ marginTop: "200px" }}>
                  Logout
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