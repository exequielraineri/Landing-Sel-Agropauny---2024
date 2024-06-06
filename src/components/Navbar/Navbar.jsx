import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import { useState } from "react";
export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255,255,255,.7)",
      }}
      collapseOnSelect
      expand="lg"
      className={" aparece shadow "}
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
        <Navbar.Toggle
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="responsive-navbar-nav"
        />
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
