import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Products";
import Cart from "./Cart";
import Checkout from "./Checkout";  // ✅ Import Checkout
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />  {/* ✅ Ensure this is added */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
