import React from "react";
import { NavLink } from "react-router-dom";
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
        <NavLink exact to="/shop" activeClassName="nav_active">
          Shop
        </NavLink>
        <NavLink exact to="/order" activeClassName="nav_active">
          Order
        </NavLink>
        <NavLink exact to="/manage" activeClassName="nav_active">
          Manage
        </NavLink>
        <NavLink exact to="/manage2" activeClassName="nav_active">
          Manage2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
