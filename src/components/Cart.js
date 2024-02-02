import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <ul className="list-group">
        {cartItems.map((items) => (
          <li className="list-group-item">{items}</li>
        ))}
        {cartItems.length ? (
          <li
            className="list-group-item list-group-item-danger"
            onClick={handleClearCart}
          >
            Clear all items
          </li>
        ) : (
          <li class="list-group-item list-group-item-primary">
            Your cart is empty.. add some items!
          </li>
        )}

        {/* Wrong way to use map { cartItems.map( (arg) => arg ) } */}
      </ul>
    </div>
  );
};

export default Cart;
