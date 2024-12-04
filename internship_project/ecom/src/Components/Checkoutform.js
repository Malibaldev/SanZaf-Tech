import React, { useState,useEffect } from 'react';
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('checkoutData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     localStorage.setItem('checkoutData', JSON.stringify(formData));
    alert('Checkout data saved!');
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text" id="name"  name="name"  value={formData.name}  onChange={handleChange} required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>  
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"  id="email" name="email" value={formData.email} onChange={handleChange}   required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />  
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Shipping Address
            </label>
            <input
              type="text"  id="address"  name="address"   value={formData.address}  onChange={handleChange}  required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />   
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"  id="city" name="city" value={formData.city} onChange={handleChange} required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />  
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"  id="zip" name="zip" value={formData.zip}   onChange={handleChange}  required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>  
            </div>
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text" id="country" name="country" value={formData.country} onChange={handleChange}   required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/> 
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Credit Card Number
              </label>
              <input
                type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />    
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text" id="expiryDate"name="expiryDate" value={formData.expiryDate} onChange={handleChange}  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>  
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"  id="cvv" name="cvv"  value={formData.cvv} onChange={handleChange} required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
