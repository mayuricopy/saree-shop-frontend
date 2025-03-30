import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={styles.navbar}>
      <h2>The Saree Shop</h2>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Shop</a></li>
        <li><a href="/cart">Cart ({cart.length})</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "#d63384",
    color: "#fff",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
};

export default Navbar;
