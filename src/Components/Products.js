import React from "react";

const Products = (props) => {
  const { productItem } = props;
  return (
    <div>
      <img
        className="small"
        src={productItem.image}
        alt={productItem.name}></img>
      <h3>{productItem.name}</h3>
      <div>${productItem.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
