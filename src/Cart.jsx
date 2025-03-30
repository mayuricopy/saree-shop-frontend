import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
