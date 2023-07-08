import React from 'react';
import logo from '../images/logo.png';
import '../style/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/products">Product</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;


        



