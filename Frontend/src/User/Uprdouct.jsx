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
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item._id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item Image"
                  className="rounded-t-lg w-full h-72 object-cover"
                />
                <div className="mt-4">
                  <p className="text-xl font-semibold mb-2 text-gray-800">{item.title}</p>
                  <p className="text-gray-600 mb-2">Author: {item.author}</p>
                  <p className="text-gray-600 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-600 font-bold mb-4">Price: ${item.price}</p>
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Link to={`/uitem/${item._id}`} className="text-white no-underline">View Details</Link>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No books available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Uproducts;
