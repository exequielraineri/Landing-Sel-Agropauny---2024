import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
export const NavbarComponent = () => {
  return (
    <Navbar
      style={{ zIndex: "1", backdropFilter: "blur(5px)" }}
      collapseOnSelect
      expand="lg"
      className="bg-transparent shadow rounded-3"
    >
      <Container>
        <Navbar.Brand className="fw-bold">
          <Link
            to={"/"}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="./pauny-sin-fondo.png"
              width={30}
              height={30}
              className="shadow me-2  bg-light"
              style={{
                objectFit: "cover",
                borderRadius: "1000px",
              }}
            ></img>
            Sel Agropauny
          </Link>
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
