import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState("");
  const location = useLocation();

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cartItem") || "[]");
    if (Array.isArray(savedCart)) {
      setCartItems(savedCart);
    }
  };

  useEffect(() => {
    loadCart();
  }, [location.state]); // Reload cart when navigated from shop

  const handleQuantityChange = (index: number, quantity: number) => {
    if (isNaN(quantity) || quantity < 1) return;
    const updated = [...cartItems];
    updated[index].quantity = quantity;
    setCartItems(updated);
    localStorage.setItem("cartItem", JSON.stringify(updated));
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
    localStorage.setItem("cartItem", JSON.stringify(updated));
  };

  const handleApplyCoupon = () => {
    alert(`Coupon "${coupon}" applied (logic not implemented).`);
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-title">Cart Page</h1>
        <p className="breadcrumb">Home &gt; Cart</p>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart Page</h1>
      <p className="breadcrumb">Home &gt; Cart</p>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Remove</th>
            <th>Thumbnail</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <button
                  onClick={() => removeItem(index)}
                  className="remove-btn"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </td>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  className="thumbnail"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/fallback.png";
                  }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, parseInt(e.target.value))
                  }
                />
              </td>
              <td>
                $
                {(
                  parseFloat(item.price.replace("$", "")) * item.quantity
                ).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-actions">
        <input
          type="text"
          placeholder="Coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button className="apply-btn" onClick={handleApplyCoupon}>
          Apply Coupon
        </button>
        <button className="checkout-btn">Checkout</button>
      </div>

      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>${total.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>
                Free shipping
                <br />
                Shipping to Australia. <a href="#">Change address</a>
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
