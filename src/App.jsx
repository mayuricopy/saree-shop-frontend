import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Products from "./Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
