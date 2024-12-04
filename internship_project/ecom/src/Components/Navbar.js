import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="bg-blue-600 p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">Ecommerce</div> 
        <div className= "md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="Login" className="text-white hover:text-gray-200">login</a>
          <a href="Signup" className="text-white hover:text-gray-200">Signup</a>
          <a href="Product" className="text-white hover:text-gray-200">Product</a>
          <a href="Checkoutform" className="text-white hover:text-gray-200">CheckoutForm</a>
          <a href="Cart" className="text-white hover:text-gray-200">Cart</a>  
        </div>
        </div>
        </nav>
        </div>
  )
};

export default Navbar
