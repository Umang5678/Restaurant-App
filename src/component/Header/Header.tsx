import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Header.css";
import logo from "../../assets/img.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand">FOODU</h1>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/pages" className="nav-link">
          Pages
        </Link>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/blog" className="nav-link">
          Blog
        </Link>
        <Link to="/shop" className="nav-link">
          Shop
        </Link>
      </nav>

      {/* Cart Icon */}
      {/* Cart Icon */}
      <div className="header-cart">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">1</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
