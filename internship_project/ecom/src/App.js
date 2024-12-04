import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProductListing from './Components/Product';
import Checkoutform from './Components/Checkoutform';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/#" element={<home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Checkoutform" element={<Checkoutform/>} />
        <Route path="/Product" element={<ProductListing/>} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
