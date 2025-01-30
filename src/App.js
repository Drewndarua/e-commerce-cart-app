import React, { useState } from "react";
import Header from "./Components/Header";
// import Cart from "./Components/Cart";
import data from "./Data";
import Home from "./Components/Home";

const App = () => {
  const { productItem } = data;
  // const { cartItems, setCartItems } = useState([]);
  return (
    <div className="App">
      <Header />
      <Home productItem={productItem} />
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
};

export default App;
