import React from "react";

const Header = () => {
  return (
    <header>
      <div className="NavBar">
        <h1 id="logo">Shop</h1>
        <div className="Checkout">
          <a href="/">Cart</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
