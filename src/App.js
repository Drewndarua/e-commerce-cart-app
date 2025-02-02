import React, { useState } from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import data from "./Data";
import Home from "./Components/Home";

const App = () => {
  const { productItem } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (productItem) => {
    const exist = cartItems.find((x) => x.id === productItem.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === productItem.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...productItem, qty: 1 }]);
    }
  };
  const onRemove = (productItem) => {
    const exist = cartItems.find((x) => x.id === productItem.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== productItem.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === productItem.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
      <Header counterCartItems={cartItems.length} />
      <Home onAdd={onAdd} productItem={productItem} />
      <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
    </div>
  );
};

export default App;
