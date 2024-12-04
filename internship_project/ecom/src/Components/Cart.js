import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
console.log(cart)
  // Fetch saved cart data from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      // Ensure price is a number
      const updatedCart = parsedCart.map(item => ({
        ...item,
        price: parseFloat(item.price)  // Convert price to a number
      }));
      setCart(updatedCart);  // Set the cart state
    }
  }, []);  // Only run once on component mount

  // Handle quantity change
  const handleQuantityChange = (itemId, change) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, 1: item.quantity + change };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };
  const handleSubmit = () => {
    // Navigate to another page (e.g., '/cart')
    navigate('/Checkoutform')
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600 py-6">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none">
                      -
                    </button>
                    <span className="mx-3 text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none">
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-800">${(item.price * 1).toFixed(2)}</span>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="ml-4 text-red-500 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
        type='submit'
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          // onClick={ navigate('/Checkoutform')}
          onClick={handleSubmit}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
