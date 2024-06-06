import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const NavbarComponent = () => {
  return (
    <Navbar
      style={{ zIndex: "1", backdropFilter: "blur(5px)" }}
      collapseOnSelect
      expand="lg"
      className="bg-transparent"
    >
      <Container>
        <Navbar.Brand className="fw-bold">
          <Link to={"/"}>Sel Agropauny</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto menu-links">
            <Nav.Link>
              <Link to={"/"}>Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/servicios"}>Servicios</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/nosotros"}>Nosotros</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/galeria"}>Galeria</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
