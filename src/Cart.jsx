import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
