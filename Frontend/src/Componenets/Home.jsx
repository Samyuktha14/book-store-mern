// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"Grey"}}>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{color: 'white', textDecoration: "none"}}>BookStore</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login" style={{color: 'white', padding: "10px", textDecoration: "none"}}>User</Nav.Link>
            <Nav.Link as={Link} to="/slogin" style={{color: 'white', padding: "10px", textDecoration: "none"}}>Seller</Nav.Link>
            <Nav.Link as={Link} to="/alogin" style={{color: 'white', padding: "10px", textDecoration: "none"}}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Home;
