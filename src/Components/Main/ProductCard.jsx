import React from 'react';
import '../../App.css';

const ProductCard = ({ product }) => {
  const { image, name, description, price, detailsLink } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-image" />
      <h3 className="product-card-name">{name}</h3>
      <p className="product-card-description">{description}</p>
      <p className="product-card-price">${price}</p>
      <a href={detailsLink} className="product-card-button">Ver Detalles</a>
    </div>
  );
};

export default ProductCard;
