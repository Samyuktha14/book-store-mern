import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Snavbar.css'; // Import your custom CSS file

const Snavbar = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand>
          <Link to='/shome' className="navbar-brand">
            𓂃🖊 BookStore(Seller)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/shome" className="nav-link">
              <b>Home</b>
            </Link>
            <Link to="/myproducts" className="nav-link">
              <b>My Products</b>
            </Link>
            <Link to="/addbook" className="nav-link">
              <b>Add Books</b>
            </Link>
            <Link to="/orders" className="nav-link">
              <b>Orders</b>
            </Link>
            <Link to="/" className="nav-link">
              <b>Logout</b>
            </Link>
            <h4 className="user-name">
              ({JSON.parse(get).name})👤
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Snavbar;
