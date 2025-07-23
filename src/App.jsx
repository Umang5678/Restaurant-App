import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Menu from "./component/Menu/menu";
import Offer from "./component/Offer/Offer";
import Shop from "./component/Shop/Shop";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <Offer />
            </>
          }
        />

        {/* Shop page route */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
      <Cart />
    </Router>
  );
}

export default App;
