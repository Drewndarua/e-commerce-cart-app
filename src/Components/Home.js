import React from "react";

const Home = (props) => {
  const { productItem } = props;
  return (
    <div className="card col-2">
      <h2>Products</h2>
      <div>
        {productItem.map((productItem) => (
          <Products key={productItem.id} productItem={productItem}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
