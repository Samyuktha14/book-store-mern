import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaTrash } from "react-icons/fa";

function Myproducts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data); // Log the response data
          const taskData = response.data;
          setItems(taskData);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = (Id) => {
    axios.delete(`http://localhost:4000/itemdelete/${Id}`);
    window.location.assign('/myproducts');
    alert('Item is deleted');
  };

  return (
    <div>
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Your Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div style={{ display: "flex", justifyContent: "flex-end", color: "red" }}>
                <button onClick={() => deleteItem(item._id)} style={{ border: 'none', color: 'red', background: 'none' }}>
                  <FaTrash size={24} />
                </button>
              </div>
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt="Item Image"
                className="rounded-t-lg w-full h-64 object-cover mb-4"
              />
              <div>
                <p className="text-xl font-semibold mb-2 text-gray-800">{item.title}</p>
                <p className="text-gray-600 mb-2">Author: {item.author}</p>
                <p className="text-gray-600 mb-2">Genre: {item.genre}</p>
                <p className="text-blue-600 font-bold mb-4">Price: ${item.price}</p>
                <p className="text-gray-600"><strong>Description:</strong> {item.description.slice(0, 259)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myproducts;
