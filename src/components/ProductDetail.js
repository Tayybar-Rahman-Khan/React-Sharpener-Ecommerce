import React from 'react';
import { useParams } from 'react-router-dom';
import './Font/Detail.css'

const ProductDetail = ({ productItems }) => {
  const { id } = useParams();
  const selectedProduct = productItems.find(item => item.id === id);

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const { name, image, price, description, review } = selectedProduct;

  return (
    <div className="product-detail">
      <div className="image-section">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="info-section">
        <p className="product-name"> {name}</p>
        <p className="product-price">Price: Rs {price}</p>
        <p className="product-description">{description}</p>
        <p className="product-review">{review}</p>
      </div>
    </div>
  );
};

export default ProductDetail;