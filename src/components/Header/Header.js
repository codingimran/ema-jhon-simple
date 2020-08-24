import React from "react";
import "tachyons";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className=" header">
      <div className="logo tc mt2 mb3">
        <img className="mw5" src={logo} alt="Logo" />
      </div>
      <nav className="bg-black pa3 f5">
        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
