
import React, { useState } from 'react';
import { BsFillHandbagFill } from 'react-icons/bs';
import { ReactComponent as HeaderImage } from "./HeaderImage.svg";
import '../style/header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCartClick = () => {
    setCartCount(cartCount + 1);
  };

  const handleHeaderImageClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <header className="header">
      <div className="icon-container">
        <div className="cart-icon" onClick={handleCartClick}>
          <BsFillHandbagFill className="icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <HeaderImage className="header-image" onClick={handleHeaderImageClick} />
      </div>

      {showAlert && (
        <div className="alert-container">
          <div className="alert">
            <button className="close-btn" onClick={handleAlertClose}>
              Close
            </button>
            <form className="signin-form" onSubmit={handleFormSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;



         
