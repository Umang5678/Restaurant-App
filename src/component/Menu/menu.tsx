import React, { useState } from "react";
import "./menu.css";
import menu from "../../assets/menu.jpg";
import menuicon from "../../assets/menuicon.png";

const menuData = {
  "Main Dishes": [
    {
      title: "Chicken Alfredo",
      description: "Ricotta / Goat Cheese / Beetroot",
      half: 20,
      full: 30,
    },
    {
      title: "Fish & Chips",
      description: "Atlantic / Chips / Salad / Tartare",
      half: 36,
      full: 55,
    },
    {
      title: "Ebony Fillet Steak",
      description: "Truffle Mash / Pepper Sauce",
      half: 44,
      full: 88,
    },
  ],
  Desserts: [
    {
      title: "Chocolate Lava Cake",
      description: "Dark Chocolate / Ice Cream",
      half: 8,
      full: 12,
    },
    {
      title: "Cheesecake",
      description: "Cream Cheese / Biscuit Base / Berries",
      half: 10,
      full: 15,
    },
  ],
  "Sea Food": [
    {
      title: "Grilled Salmon",
      description: "Herbs / Lemon / Butter Sauce",
      half: 25,
      full: 40,
    },
    {
      title: "Prawn Tempura",
      description: "Crispy Batter / Dip Sauce",
      half: 22,
      full: 35,
    },
  ],
  Beverage: [
    {
      title: "Mojito",
      description: "Mint / Lemon / Ice",
      half: 6,
      full: 9,
    },
    {
      title: "Cold Coffee",
      description: "Chilled / Creamy",
      half: 5,
      full: 8,
    },
  ],
};

const categories = ["Main Dishes", "Desserts", "Sea Food", "Beverage"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Main Dishes");

  return (
    <div className="menu-container">
      <div className="menu-left">
        <div className="menu-highlight">
          <div className="menu-icon">
            {" "}
            <img src={menuicon} alt="menu " className="menu-im" />
          </div>
          <h2 className="sign">
            <span className="highlight-number">500+</span>
            <br />
            MENU AND DISHES
          </h2>
        </div>
        <img src={menu} alt="menu dish" className="menu-image" />
      </div>

      <div className="menu-right">
        <div className="menu-header">
          <h4 className="food-items-title">FOOD ITEMS</h4>
          <h1>Starters & Main Dishes</h1>
        </div>

        <div className="menu-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={activeTab === cat ? "active" : ""}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-toggle">
          <button>Half</button>
          <button>Full</button>
        </div>

        <div className="menu-list">
          {menuData[activeTab].map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="menu-item-price">
                <span className="price">${item.half}</span>
                <span className="price">${item.full}</span>
              </div>
              <span className="menu-item-note">Extra Free Juice.</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
