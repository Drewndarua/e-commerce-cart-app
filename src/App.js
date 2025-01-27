import React from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import data from "./Data";
import Home from "./Components/Home";
const App = () => {
  const { productItem } = data;
  return (
    <div className="App">
      <Header />
      <Home productItem={productItem} />
      <Cart />
    </div>
  );
};

export default App;
