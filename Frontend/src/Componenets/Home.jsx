import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Home.css';  // Import the CSS for hover effect

const Home = () => {
  const [showWelcomeContent, setShowWelcomeContent] = useState(true);
  const [activeCard, setActiveCard] = useState(null); // Track which card is active
  const [showBooks, setShowBooks] = useState(false);  // Track whether to show books below
  const location = useLocation();
  const navigate = useNavigate();

  const hideContentImmediately = () => {
    setShowWelcomeContent(false);
  };

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowWelcomeContent(false);
    } else {
      setShowWelcomeContent(true);
    }
  }, [location]);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId); // Toggle the active card
  };

  const handleStartExploringClick = () => {
    // Show the same books below
    setShowBooks(true);
    
    // Redirect to the signup page
    navigate("/signup");
  };
  

  return (
    <div>
      {/* Navbar with Teal Background */}
      <Navbar expand="lg" style={{ backgroundColor: '#007b7f' }} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff' }}>
            <b>𓂃🖊 BookStore</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login" onClick={hideContentImmediately} className="navbar-link">
                <b>User</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/slogin" onClick={hideContentImmediately} className="navbar-link">
                <b>Seller</b>
              </Nav.Link>
              <Nav.Link as={Link} to="/alogin" onClick={hideContentImmediately} className="navbar-link">
                <b>Admin</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Welcome Content */}
      {showWelcomeContent && (
        <section className="content-container">
          <h1>Welcome to Our Bookstore</h1>
          <h4>Where Stories Come to Life</h4>
          <p>
            At our Bookstore, we believe in the magic of books and the endless possibilities they offer. <br />
            Whether you’re looking for the latest bestsellers, timeless classics, or hidden gems, our curated collection will transport you into new worlds.
          </p>
          
          <h3>Explore Categories:</h3>
          {/* Card-like Boxes */}
          <div className="card-container">
            <div className={`card ${activeCard === 1 ? 'open' : ''}`} onClick={() => handleCardClick(1)}>
              <h4>Best Sellers</h4>
              <p>Discover the most popular books of the moment, from fiction to non-fiction.</p>
            </div>
            <div className={`card ${activeCard === 2 ? 'open' : ''}`} onClick={() => handleCardClick(2)}>
              <h4>New Arrivals</h4>
              <p>Fresh titles from the hottest new authors. Be the first to read them!</p>
            </div>
            <div className={`card ${activeCard === 3 ? 'open' : ''}`} onClick={() => handleCardClick(3)}>
              <h4>Special Offers</h4>
              <p>Exclusive discounts and promotions for our loyal readers.</p>
            </div>
          </div>

          <h3>Our Mission</h3>
          <p>
            We aim to foster a love for reading and learning, making books more accessible to readers of all ages and backgrounds. 
            Explore our collection and find your next great read today!
          </p>

          

          {/* "Start Exploring" Button */}
          <div className="cta-button-container">
            <button className="cta-button" onClick={handleStartExploringClick}>
              Start Exploring
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
