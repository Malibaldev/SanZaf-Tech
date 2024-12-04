import React from "react";
import { useState } from "react";
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/300",
    price: "3000",
    description: "This is a description of Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/300",
    price: "40.0",
    description: "This is a description of Product 2.",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/300",
    price: "5000",
    description: "This is a description of Product 3.",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/300",
    price: "6000",
    description: "This is a description of Product 4.",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://via.placeholder.com/300",
    price: "6000",
    description: "This is a description of Product 4.",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://via.placeholder.com/300",
    price: "6000",
    description: "This is a description of Product 4.",
  },
];
const ProductListing = () => {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  console.log(savedCart)
    return savedCart ? JSON.parse(savedCart) : [];
  });
  // console.log(cart)
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    console.log(updatedCart)
    // setCart(updatedCart);
     localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // console.log(updatedCart)
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Product Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"> 
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                <span className="text-lg font-semibold text-gray-900">{product.quanaity}</span>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
