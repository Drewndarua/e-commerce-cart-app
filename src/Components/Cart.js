import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.12;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && "Cart Is Empty"}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="column">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x {item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <div className="row">
            <div className="col-2">Item Price</div>
            <div>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div>
            <button onClick={() => alert("Are you sure you want to checkout?")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
