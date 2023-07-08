import React from 'react';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h4>Address</h4>
        <p>Plot#552 A1 township, Peco Road, Lahore.</p>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <h4>Support</h4>
        <h4>Performances</h4>
      </div>
      <div className="footer-column">
        <h4>Information</h4>
        <p>  Our website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
      </div>
      <div className="footer-content">
        <p>© 2023 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
