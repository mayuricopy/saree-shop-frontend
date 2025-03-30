import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.item}>
                {item.name} - ₹{item.price}
                <button style={styles.button} onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
          <button style={styles.checkoutButton} onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    backgroundColor: "#f8f8f8",
    padding: "10px",
    margin: "5px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  checkoutButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Cart;

