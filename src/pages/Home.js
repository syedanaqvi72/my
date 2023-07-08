          
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Home.css';
import HomeImage from '../images/HomeImage.jpg';
import Footer from '../components/Footer';


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="caption">
                <h2>Ecommerce HTML Template</h2>
                <div className="line-dec"></div>
                <p>
                  Pixie HTML Template can be converted into your desired CMS theme. Total <strong>5 pages</strong> included. You can use this Bootstrap v4.1.3 layout for any CMS. Please tell your friends about <a rel="nofollow" href="https://www.facebook.com.tooplate/">Tooplate</a> free template site. Thank you. Photo credit goes to <a rel="nofollow" href="https://www.pexels.com">Pexels websites</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img src={HomeImage} alt="picture" className="home-image" />

      <div className="buttons-container">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary me-md-2" type="button">
            All Product
          </button>
          <button className="btn btn-primary" type="button">
            All Categories
          </button>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </div>
          
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;



