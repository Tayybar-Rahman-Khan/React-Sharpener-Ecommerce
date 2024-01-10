import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div>
          <img
              className="product-img"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
          <Link to={`/products/${productItem.id}`}>
              <h3 className="product-name">{productItem.name}</h3>
          </Link>
          </div>
          <div className="product-price">Rs {productItem.price}</div>
          <div>
            <button
              className="product-btn"
              onClick={() => handleAddProduct(productItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;




