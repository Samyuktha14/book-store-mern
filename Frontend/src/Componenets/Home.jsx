import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  // State to control the visibility of the welcome paragraph
  const [showWelcomeContent, setShowWelcomeContent] = useState(true);

  // Use useLocation hook to detect the current route
  const location = useLocation();

  // Hide the welcome content immediately upon navigation
  const hideContentImmediately = () => {
    setShowWelcomeContent(false);
  };

  // UseEffect to detect route change and hide content when on "User", "Seller", or "Admin" routes
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowWelcomeContent(false); // Hide content when on other routes
    } else {
      setShowWelcomeContent(true); // Show content when on homepage
    }
  }, [location]);

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"Grey"}}>
        <Container>
          <Navbar.Brand>
            <Link 
              to="/" 
              style={{color: 'white', textDecoration: "none"}} 
              onClick={() => setShowWelcomeContent(true)} // Show content immediately when on homepage
            >
              BookStore
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/login" style={{color: 'white', padding: "10px", textDecoration: "none"}} onClick={hideContentImmediately}>User</Nav.Link>
              <Nav.Link as={Link} to="/slogin" style={{color: 'white', padding: "10px", textDecoration: "none"}} onClick={hideContentImmediately}>Seller</Nav.Link>
              <Nav.Link as={Link} to="/alogin" style={{color: 'white', padding: "10px", textDecoration: "none"}} onClick={hideContentImmediately}>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Welcome Content */}
      {showWelcomeContent && (
        <section style={{ backgroundColor: "#f4f4f4", padding: "40px 20px", textAlign: "center" }}>
          <h1><b>Welcome to Our Bookstore </b></h1><h3> - Where Stories Come to Life</h3>
          <p>
            At our Bookstore, we believe in the magic of books and the endless possibilities they offer. <br />
            Whether you’re looking for the latest bestsellers, timeless classics, or hidden gems, our curated collection will transport you into new worlds.
          </p>

          <h3><b>Why Choose Us?</b></h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><strong>Wide Selection:</strong> From fiction to non-fiction, young adult to children's books, we have something for everyone.</li><br />
            <li><strong>Expert Recommendations</strong> Our staff is passionate about books and happy to help you find the perfect read.</li><br />
            <li><strong>Community Hub:</strong> Join us for author events, book clubs, and reading challenges and many  exciting prices .</li>
          </ul>

          <h3><b>Explore Categories:</b></h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><strong>Bestsellers:</strong> Stay ahead of the trends with te most popular books of the moment.</li>,<br />
            <li><strong>New Arrivals:</strong> Discover fresh titles and upcoming authors.</li>,<br />
            <li><strong>Special Offers:</strong> Don’t miss out on exclusive discounts and promotions.</li><br />
          </ul>

          <h3><b>Our Mission</b></h3>
          <p>
            We aim to foster a love for reading and learning, making books more accessible to readers of all ages and backgrounds. 
            Explore our collection and find your next great read today!
          </p>
        </section>
      )}
    </div>
  );
};

export default Home;
