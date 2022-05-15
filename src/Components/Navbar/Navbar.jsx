import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span id="n-title">Placement+</span>
      <div className="n-right">
        <a href="www.google.com">
          <span>Courses</span>
        </a>
        <a href="www.google.com">
          <span>Login</span>
        </a>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
