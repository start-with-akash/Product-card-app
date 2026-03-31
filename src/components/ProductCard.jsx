import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div className="card">
      
       

      <h2>{name}</h2>
      <p>${price}</p>
      <h3> _    _</h3>
      <span className={inStock ? "in" : "out"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
};

export default ProductCard;
