import React, { useEffect, useState } from "react";
import "./Hero.css";
import pizzaImg from "../../assets/2.png";
import burgerImg from "../../assets/2.png";
import pastaImg from "../../assets/1.png";

const slides = [
  {
    title: "FRENCH BREAK CHEESY PIZZA",
    description:
      "Almost do am or limits hearts. Resolve parties but why she shewing know.",
    price: "$58",
    bgColor: "#8B0000",
    img: pizzaImg,
  },
  {
    title: "DOUBLE BEEF BURGER",
    description: "Loaded with cheese, beef & spice. A meal to remember!",
    price: "$45",
    bgColor: "#B22222",
    img: burgerImg,
  },
  {
    title: "CREAMY WHITE PASTA",
    description: "Indulge in our rich and creamy Alfredo special.",
    price: "$35",
    bgColor: "#800000",
    img: pastaImg,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="hero" style={{ backgroundColor: slide.bgColor }}>
      <div className="hero__content">
        <button className="hero__deal">
          PURCHASE TODAY. JUST {slide.price}
        </button>
        <h1 className="hero__title">{slide.title}</h1>
        <p className="hero__desc">{slide.description}</p>
        <button className="hero__btn">ORDER NOW</button>
      </div>
      <div className="hero__image">
        <img src={slide.img} alt={slide.title} />
        <div className="hero__badge">50% Off</div>
      </div>
    </div>
  );
};

export default HeroSection;
