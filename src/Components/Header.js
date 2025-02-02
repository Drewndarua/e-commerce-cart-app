import React from "react";

function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="Navbar">
      <div>
        <h1>Shop</h1>
      </div>
      <div>
        <a href="#/Cart">
          Cart{""}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        {""}
      </div>
    </header>
  );
}

export default Header;
