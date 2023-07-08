import React from 'react';
import AboutImage from '../images/AboutImage.jpg';
import '../style/AboutUs.css';
 
function AboutUs() {
  return (
    <div className="about-us-container">
      <img src={AboutImage} alt="About Us" className="about-us-image" />
      <div className="about-us-description">
        <h2>About Us</h2>
        <p>
          Our website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.
        </p>
        <p>
          <u><h3>Some of the key features of our website:</h3></u>
          <ul>
            <li>Ease of Navigation</li>
            <li>Fast Load Times</li>
            <li>Clear Policies</li>
            <li>Seamless Checkout Experience</li>
            <li>Design Isn't Distracting from Shopping</li>
            <li>Branded</li>
            <li>Promotes Related Products</li>
            <li>Accurate Product Descriptions</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;



