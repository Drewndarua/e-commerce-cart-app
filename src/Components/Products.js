import React from "react";

function Products(props) {
  const { productItem, onAdd } = props;
  return (
    <div className="Products">
      <img
        className="small"
        src={productItem.image}
        alt={productItem.name}></img>
      <h3>{productItem.name}</h3>
      <div>${productItem.price}</div>
      <div>
        <button onClick={() => onAdd(productItem)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Products;
