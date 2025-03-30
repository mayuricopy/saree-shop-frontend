import React from "react";
import ProductCard from "./components/ProductCard";

const sampleProducts = [
  {
    name: "Banarasi Silk Saree",
    description: "A beautiful silk saree with golden embroidery.",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/81FjtX8S4AL._AC_UL320_.jpg",
  },
  {
    name: "Kanjeevaram Saree",
    description: "A traditional Kanjeevaram saree with rich colors.",
    price: 3000,
    image: "https://example.com/saree2.jpg",
  },
  {
    name: "Chiffon Saree",
    description: "Lightweight and elegant chiffon saree for any occasion.",
    price: 1800,
    image: "https://example.com/saree3.jpg",
  }
];

const Products = () => {
  return (
    <div style={styles.container}>
      <h2>Shop Sarees</h2>
      <div style={styles.grid}>
        {sampleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
};

export default Products;
