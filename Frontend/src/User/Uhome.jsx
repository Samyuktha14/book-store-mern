import React from 'react';
import Unavbar from './Unavbar';
import "./uhome.css";
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer';

const Uhome = () => {
  return (
    <div>
      <Unavbar />

      <div>
        <h1 className='text-center' style={{ fontSize: "40px", padding: "20px" }}><b>Top Recommendations</b></h1>
        
        {/* Recommendations Section */}
        <Row className="justify-content-center">
          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg" alt="Rich Dad Poor Dad" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>RICH DAD<br /> POOR DAD</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg" alt="Think and Grow Rich" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>THINK AND<br /> GROW RICH</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg" alt="Don't Let Her Stay" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>DON'T LET HER STAY</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg" alt="Killing the Witches" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>KILLING THE WITCHES</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Best Sellers Section */}
        <h1 className='text-center' style={{ fontSize: "50px", marginTop: "40px" }}>Best Seller</h1>
        <Row className="justify-content-center">
          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg" alt="Harry Potter" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>HARRY POTTER</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg" alt="Elon Musk" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>ELON MUSK</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg" alt="The Mosquito" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>THE MOSQUITO</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Link to='/uproducts'>
                <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg" alt="Journey on the James" />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>JOURNEY ON THE JAMES</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}

export default Uhome;
