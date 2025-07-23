import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shop.css";
import img from "../../assets/1.png";
import imgg from "../../assets/2.png";

const foodItems = [
  {
    name: "Margherita Pizza",
    category: "CHEESE, PIZZA",
    price: "$12.00",
    image: img,
  },
  {
    name: "Beef Burger",
    category: "CREAMY, BURGER",
    price: "$5.00",
    oldPrice: "$8.00",
    sale: true,
    image: imgg,
  },
  {
    name: "Grilled Flank Steak",
    category: "BEEF, STEAK",
    price: "$14.00",
    image: img,
  },
  {
    name: "Barbecue Chicken",
    category: "BBQ, MEAT",
    price: "$8.00",
    image: imgg,
  },
  {
    name: "Vegetable Roll",
    category: "FOOD, ROLL",
    price: "$25.00",
    image: img,
  },
  {
    name: "Creamy Pasta",
    category: "PASTA, SPICY",
    price: "$13.00",
    oldPrice: "$18.00",
    sale: true,
    image: img,
  },
  {
    name: "Chicken Shawarma",
    category: "MEAT, SHAWARMA",
    price: "$3.00",
    image: img,
  },
  {
    name: "Fish Fry",
    category: "SEAFOOD, FISH",
    price: "$10.00",
    image: img,
  },
  {
    name: "Sizzling Noodles",
    category: "NOODLES, SPICY",
    price: "$9.00",
    image: img,
  },
  {
    name: "Chicken Tikka",
    category: "MEAT, BBQ",
    price: "$11.00",
    image: img,
  },
];

const itemsPerPage = 8;

const Shop = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(foodItems.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = foodItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  const handleAddToCart = (item: any) => {
    let existingCart;
    try {
      const stored = localStorage.getItem("cartItem");
      existingCart = Array.isArray(JSON.parse(stored || "[]"))
        ? JSON.parse(stored!)
        : [];
    } catch {
      existingCart = [];
    }

    const index = existingCart.findIndex(
      (i: any) => i.name === item.name && i.category === item.category
    );

    if (index >= 0) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cartItem", JSON.stringify(existingCart));
    navigate("/cart", { state: { fromShop: true } });
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Special Food</h1>

      <div className="shop-controls">
        <div className="layout-toggle">
          <button className="active">🔳</button>
          <button>📋</button>
        </div>
        <div className="results-info">
          Showing {startIndex + 1}–{startIndex + currentItems.length} of{" "}
          {foodItems.length} results
        </div>
        <select className="sort-dropdown">
          <option>Sort by Relevant</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {currentItems.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} className="product-image" />
            <p className="category">{item.category}</p>
            <h3>{item.name}</h3>
            <p className="price">
              {item.oldPrice && (
                <span className="old-price">{item.oldPrice}</span>
              )}{" "}
              {item.price}
            </p>
            {item.sale && <span className="sale-tag">SALE</span>}
            <button
              onClick={() => handleAddToCart(item)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
