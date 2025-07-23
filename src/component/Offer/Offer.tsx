import React, { useEffect, useState } from "react";
import "./offer.css";
import img from "../../assets/1.png";

const Offer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="offer-section">
      <div className="offer-content">
        <div className="offer-text">
          <span className="limited-offer">LIMITED OFFER</span>
          <h1 className="offer-title">
            DELICIOUS
            <br />
            BURGER
          </h1>
          <p className="offer-description">
            It is a long established fact that a reader will be distracted
            <br />
            lorem the readable content of a page when looking
          </p>
          <div className="countdown">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <small>DAYS</small>
            </div>
            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <small>HOURS</small>
            </div>
            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <small>MINUTES</small>
            </div>
            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <small>SECONDS</small>
            </div>
          </div>
        </div>
        <div className="offer-image">
          <img src={img} alt="Delicious Burger" />
          <div className="offer-badge">
            <span>UP TO</span>
            <strong>50%</strong>
            <span>OFF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
