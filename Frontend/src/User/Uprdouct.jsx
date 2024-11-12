import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar'; // Assuming you're using Unavbar for the navigation

const Uproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/uproducts') // Replace with your actual endpoint
      .then((response) => {
        setProducts(response.data); // Assuming the response contains an array of books
      })
      .catch((error) => {
        console.error('Error fetching products: ', error);
      });
  }, []);

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item Image"
                  className="rounded-t-lg"
                  style={{ height: '350px', width: '500px' }}
                />
                <div>
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Author: {item.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold">Price: ${item.price}</p>
                  <button>
                    <Link to={`/uitem/${item._id}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No books available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uproducts;
