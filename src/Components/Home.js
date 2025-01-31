import React from "react";
import Products from "./Products";

const Home = (props) => {
  const { productItem, onAdd } = props;
  return (
    <div className="card col-2">
      <h2>Products</h2>
      <div>
        {productItem.map((productItem) => (
          <Products
            key={productItem.id}
            productItem={productItem}
            onAdd={onAdd}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
