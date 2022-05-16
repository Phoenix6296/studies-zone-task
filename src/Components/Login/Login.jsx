import React from "react";
import "./Login.css";
import BannerImage from "../../Assets/bannerImage.svg";

const Login = () => {
  return (
    <>
      <div className="register">
        <span>
          Placement <span>+</span>
        </span>
        <div className="r-container">
          <span>Login Details</span>
          <form action="">
            <div className="r-inputs">
              <input type="email" placeholder="Email" id="r-email" required />
              <input type="password" placeholder="Password" required />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
      <img src={BannerImage} alt="" />
    </>
  );
};

export default Login;
