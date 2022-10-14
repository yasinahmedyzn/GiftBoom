import React, { useState } from "react";
import { links } from "./data";
import "./navbar.css";
import logo from "../Images/logo.svg";
import { useCart } from "react-use-cart";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const { totalUniqueItems } = useCart();
  return (
    <div>
      <header>
        <div className="logo">
          <h1>
            <a href="/">
              <img src={logo} className="logo-nav" alt="main-logo" />
            </a>
          </h1>
        </div>

        <nav className={`${show ? "mobile-nav" : "list"}`}>
          <ul>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="socialIcons">
          <ul>
            <li>
              <a href={"/cart"}>
                <div className="cart">
                  <span>
                    <i className="fas fa-cart-plus"></i>
                  </span>
                  <span>{totalUniqueItems}</span>
                </div>
              </a>
            </li>
            <li>
              <a href={"/home"}>
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="toggleBtn">
          <button onClick={() => setShow(!show)}>
            {show ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
