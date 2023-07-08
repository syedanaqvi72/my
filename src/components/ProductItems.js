import React from 'react';
import '../style/productItem.css';
const truncateText = (text, maxLength) => {
  if (!text) return '';
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substr(0, maxLength) + '...';
  }
};

const truncateTitle = (title, maxWords) => {
  if (!title) return '';
  const words = title.split(' ');
  if (words.length <= maxWords) {
    return title;
  } else {
    return words.slice(0, maxWords).join(' ') + '...';
  }
};

const ProductItems = ({ title, description, imageUrl }) => {
  const truncatedTitle = truncateTitle(title, 3);
  const truncatedDescription = truncateText(description, 100);

  return (
    <div className="my-3">
      <div className="card" style={{ width: '18rem', height: '34rem' }}>
        <img
          src={!imageUrl ? 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg' : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: '2.5rem', overflow: 'hidden' }}>
            {truncatedTitle}
          </h5>
          <p className="card-text" style={{ height: '8rem', overflow: 'hidden' }}>
            {truncatedDescription}
          </p>

        </div>
      </div>
    </div>
  );
};

export default ProductItems;
