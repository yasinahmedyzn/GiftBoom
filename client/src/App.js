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
import GiftCard from "./component/ProCard/GiftCard";
import Flowers from "./component/ProCard/Flowers";
import Gadgets from "./component/ProCard/Gadgets";
import Cart from "./component/Cart/carts";
import Login from "./component/Auth/login";
import Signup from "./component/Auth/signup";
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
            <Route exact path="/product/GiftCard" element={<GiftCard />} />
            <Route exact path="/product/Gadgets" element={<Gadgets />} />
            <Route exact path="/product/Flowers" element={<Flowers />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </CartProvider>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
