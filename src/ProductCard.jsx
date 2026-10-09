import { useEffect } from "react";
import "./App.css";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <div className="product-card">
      <img
        className="product-image"
        src="https://placehold.co/300x400/eef1f4/232f3e?text=Wireless+Mouse"
        alt="Wireless Mouse"
      />

      <div className="product-details">
        <h2>{productName}</h2>

        <p className="price">
          ₹{price} <span style={{ fontSize: 15 }}>per item</span>
        </p>

        <div className="product-info">
          <div>Colour: <strong>{selectedColor}</strong></div>
          <div>Deliver to: <strong>{deliveryCity}</strong></div>
        </div>

        <div className="cart-info">
          <div>Cart Quantity: {quantity}</div>

          <p className="total">
            Total Amount: ₹{quantity * price}
          </p>

          <div>
            {quantity === 0
              ? "Cart is empty"
              : "Product added to cart"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
