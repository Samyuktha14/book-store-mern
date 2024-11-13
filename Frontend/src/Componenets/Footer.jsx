import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer style={{
        backgroundColor: '#2C3E50', // Dark background color
        padding: '20px 0', // Reduced padding to make the container smaller
        textAlign: 'center', 
        color: 'white', // Set the default text color to white
        fontFamily: 'Arial, sans-serif',
        borderTop: '1px solid #BDC3C7', // Light border to separate footer from content
      }}>
        <div style={{
          display: "flex", 
          justifyContent: "center", 
          marginBottom: '15px'
        }}>
          <button id='bt' className='item-center' style={{
            height: "35px", 
            backgroundColor: 'white', // White button color
            color: '#2C3E50', // Text color to match footer background
            border: 'none', 
            borderRadius: '5px', 
            padding: '0 18px', 
            cursor: 'pointer',
            fontSize: '16px',
          }}>
            Contact Us
          </button>
        </div>
        <p style={{
          fontStyle: 'italic', 
          fontSize: '18px', // Larger font size for the quote
          marginBottom: '15px', 
          fontWeight: 'lighter',
          color: '#BDC3C7' // Softer color for the quote text
        }}>
          "Dive into a world of stories – where every book is a gateway to a new adventure!"
        </p>
        <div style={{
          display: 'flex', 
          justifyContent: 'center', 
          fontSize: '14px', 
          color: '#BDC3C7', 
          marginBottom: '15px'
        }}>
          <p style={{
            marginRight: '20px',
            fontWeight: 'lighter'
          }}>
            Call Us: <span style={{ fontWeight: 'bold' }}>127-865-586-67</span>
          </p>
          <p style={{
            marginLeft: '20px', 
            fontWeight: 'lighter'
          }}>
            Copyright &copy; {new Date().getFullYear()} By BookStore. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
