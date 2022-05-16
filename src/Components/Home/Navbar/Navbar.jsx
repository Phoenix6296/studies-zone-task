import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <span id="n-title">Placement+</span>
      <div className="n-right">
        <Link to="Login" className="n-link">
          <span>Login</span>
        </Link>
        <Link to="Register" className="n-link">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
