import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching items: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          setWishlist(response.data);
        })
        .catch((error) => {
          console.error('Error fetching wishlist: ', error);
        });
    }
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      // Find the selected item by itemId
      const selectedItem = items.find((item) => item._id === itemId);
      if (!selectedItem) {
        throw new Error('Selected item not found');
      }

      const { title, itemImage, _id: itemId2 } = selectedItem;
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        return;
      }

      const userId = user.id;
      const userName = user.name;

      await axios.post(`http://localhost:4000/wishlist/add`, { itemId: itemId2, title, itemImage, userId, userName });

      // Update wishlist in state without re-fetching
      setWishlist((prevWishlist) => [...prevWishlist, { itemId: itemId2, title, itemImage }]);
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });

      // Remove item from the wishlist in state
      setWishlist(wishlist.filter((item) => item.itemId !== itemId));
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };

  return (
    <div>
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item._id}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                maxWidth: '300px',  // Increased width
                margin: '0 auto',
              }}
              className="card"
            >
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt={item.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease',
                  objectFit: 'cover',
                  maxHeight: '300px', // Adjusted max height to keep image in proportion
                }}
                className="card-img"
              />
              <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center' }} className="card-title">
                  {item.title}
                </p>
                <p style={{ fontSize: '1rem', color: '#555' }}>Author: {item.author}</p>
                <p style={{ fontSize: '1rem', color: '#555' }}>Genre: {item.genre}</p>
                <p style={{ fontSize: '1.25rem', color: '#2980b9', fontWeight: 'bold' }}>
                  Price: ${item.price}
                </p>

                {isItemInWishlist(item._id) ? (
                  <Button
                    onClick={() => removeFromWishlist(item._id)}
                    style={{
                      backgroundColor: 'red',
                      border: 'none',
                      padding: '8px 16px',
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    Remove from Wishlist
                  </Button>
                ) : (
                  <Button
                    onClick={() => addToWishlist(item._id)}
                    style={{
                      backgroundColor: 'rebeccapurple',
                      border: 'none',
                      padding: '8px 16px',
                      width: '100%',
                      marginBottom: '10px',
                    }}
                  >
                    Add to Wishlist
                  </Button>
                )}

                <Button
                  style={{
                    backgroundColor: 'rebeccapurple',
                    border: 'none',
                    width: '100%',
                    padding: '8px 16px',
                  }}
                >
                  <Link
                    to={`/uitem/${item._id}`}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                    }}
                  >
                    View
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
