import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFillHandbagFill } from 'react-icons/bs';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <h1>Product Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <Link to={`/SingleProduct/${product.id}`} className="product-link">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
                onClick={handleAddToCart}
              />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="cart-icon" onClick={handleAddToCart}>
        <BsFillHandbagFill className="icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </div>
  );
}

export default ProductPage;
