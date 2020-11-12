import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom'


const NavigationBar = () => {
  const id = [1,2,3];
  return (
    <React.Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
        <Navbar.Brand as={Link} to="/">J's Coffee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/Story">Our Story</Nav.Link>
          <Nav.Link as={NavLink} to={`/Shop/`+id[0]}>Shop</Nav.Link>
          <Nav.Link as={NavLink} to="/Locate">Locate Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavigationBar;
