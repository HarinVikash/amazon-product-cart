
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      {showProduct && (
        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
        />
      )}

      <div className="controls">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="color">Product colour</label>

            <select
              id="color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="city">Delivery city</label>

            <input
              id="city"
              type="text"
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
              placeholder="Enter delivery city"
            />
          </div>
        </div>

        <div className="button-row">
          <button
            className="add-button"
            onClick={() => setQuantity((q) => q + 1)}
          >
            Add to Cart
          </button>

          <button
            onClick={() =>
              setQuantity((q) => Math.max(0, q - 1))
            }
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct((v) => !v)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
