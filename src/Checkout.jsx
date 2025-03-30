import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("✅ Order Placed Successfully! 🎉 Thank you for shopping.");
    navigate("/"); // Redirect to the home page after checkout
  };

  return (
    <div style={styles.container}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some sarees first!</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cart.map((item, index) => (
              <li key={index} style={styles.item}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
          <button style={styles.button} onClick={handlePayment}>
            Place Order
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
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Checkout;
