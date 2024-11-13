// src/components/Unavbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Unavbar.css';  // Import the CSS file for styling

const Unavbar = () => {
  const user = localStorage.getItem('user');
  const userName = user ? JSON.parse(user).name : "Guest";  // Fallback to "Guest" if no user

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand>
          <Link to='/uhome' className="navbar-brand-link">
            <b>𓂃🖊 BookStore</b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/uhome" className="navbar-link"><b>Home</b></Link>
            <Link to="/uproducts" className="navbar-link"><b>Books</b></Link>
            <Link to="/wishlist" className="navbar-link"><b>Wishlist</b></Link>
            <Link to="/myorders" className="navbar-link"><b>My orders</b></Link>
            <Link to="/" className="navbar-link navbar-logout"><b>Logout</b></Link>
            <h4 className="navbar-user-name">{userName} 👤</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
