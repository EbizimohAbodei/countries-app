import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

const NavBar = () => {
  const favs = useSelector((state) => state.countries.favourites);

  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" className="navBar">
        <Container>
          <Navbar.Brand href="/" className="logo">
            Countries-App
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link href="/countries" className="navLink">
              Countries
            </Nav.Link>
            <Nav.Link href="/favourites" className="navLink">
              Favourites {favs.length > 0 ? `(${favs.length})` : ""}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
