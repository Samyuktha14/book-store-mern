import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';
import './Shome.css'; // Import your custom CSS for styling

function Shome() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data);
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });

      axios
        .get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const totalItems = items.length;
  const totalOrders = orders.length;

  // Define data for the bar chart
  const data = [
    { name: 'Items', value: totalItems, fill: 'blue' },
    { name: 'Orders', value: totalOrders, fill: 'orange' },
  ];

  return (
    <div>
      <Snavbar />
      <br />
      <h3 className="text-3xl font-semibold mb-4 text-center">DashBoard</h3>
      <Card body className="dashboard-card">
        <div className="dashboard-stats">
          <Link to="/myproducts" className="dashboard-link">
            <div className="stat-card bg-green-500">
              Items <br /> <br /> {totalItems}
            </div>
          </Link>
          <Link to="/orders" className="dashboard-link">
            <div className="stat-card bg-yellow-500">
              Total Orders <br /> <br /> {totalOrders}
            </div>
          </Link>
        </div>
        <br />
        <div className="chart-container">
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" barSize={50} />
          </BarChart>
        </div>
      </Card>
      <br />
      <Footer />
    </div>
  );
}

export default Shome;
