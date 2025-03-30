import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    width: "250px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#d63384",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  },
};

export default ProductCard;

