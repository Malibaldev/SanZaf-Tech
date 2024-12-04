import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-24 m-8">
    <div className="max-w-7xl mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-4">Ecommerce</h3>  
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
       </div>
        </div>
        </footer>
  )
}

export default Footer
