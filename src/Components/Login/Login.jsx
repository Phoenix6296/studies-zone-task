import React from "react";
import "../Register/Register.css";
import "./Login.css";
import BannerImage from "../../Assets/bannerImage.svg";

const Login = () => {
  return (
    <div className="register">
      <div className="r-wrapper">
        <span>
          Placement <span>+</span>
        </span>
        <div className="r-container">
          <span id="l-title">Login Details</span>
          <form action="" className="l-form">
            <input type="email" placeholder="Email" id="l-email" required />
            <input type="password" placeholder="Password" required />
            <div className="r-button">
              <button id="r-submit">Login</button>
            </div>
          </form>
        </div>
      </div>
      <img src={BannerImage} alt="" />
    </div>
  );
};

export default Login;
