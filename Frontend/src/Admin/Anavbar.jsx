// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './anavbar.css';  // Make sure to import the CSS file

const Anavbar = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "teal" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/ahome' className="navbar-link"><b>BookStore(Admin)</b></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/ahome" className="navbar-link"><b>Home</b></Link>
            <Link to="/users" className="navbar-link">U<b>sers</b></Link>
            <Link to="/sellers" className="navbar-link"><b>Sellers</b></Link>
            <Link to="/" className="navbar-link"><b>Logout</b></Link>
            <h4 style={{ color: "white", paddingTop: "0px" }}>({JSON.parse(get).name})👤</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anavbar;
