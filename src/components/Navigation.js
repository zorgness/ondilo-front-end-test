import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-column flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
