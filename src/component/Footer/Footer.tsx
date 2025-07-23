import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, IoCall, IoMail } from "react-icons/io5";
import img from "../../assets/img.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col logo-section">
          <div className="logo">
            <img src={img} alt="Foodu Logo" />
            <h2>FOODU</h2>
          </div>
          <p>
            Discover culinary delights, recipes and inspiration in our food
            haven.
          </p>
          <div className="timing">
            <p>
              <strong>MON - FRI</strong> 8:00 AM - 6:00 PM
            </p>
            <p>
              <strong>SATURDAY</strong> 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div className="footer-col explore">
          <h3>Explore</h3>
          <ul>
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col contact">
          <h3>Contact Info</h3>
          <p>
            <IoLocationSharp /> 175 10h Street, Office 375 Berlin, De 21562
          </p>
          <p>
            <IoCall /> +123 34598768
            <br />
            +554 34598734
          </p>
          <p>
            <IoMail /> food@restan.com
          </p>
        </div>

        <div className="footer-col newsletter">
          <h3>Newsletter</h3>
          <p>
            Join our subscribers list to get the latest news and special offers.
          </p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe ↗</button>

          <div className="social-label">
            <h4>Social Media:</h4>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 Foodu. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
