import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/footer";
import Electronic from "./component/ProCard/electronics";
import Cart from "./component/Cart/carts";
import { CartProvider } from "react-use-cart";
const App = () => {
  return (
    <div>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/flowers" element={<Electronic />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
