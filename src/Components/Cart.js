import React from "react";

function Cart(props) {
  const { cartItems } = props;
  return (
    <aside>
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <div>Cart Is Empty</div>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Cart;
