import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="r-container">
        <span>Registration Form</span>
        <form action="">
          <div className="r-inputs">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="r-inputs">
            <input type="number" placeholder="Age" />
            <input type="date" placeholder="Date of Birth" required />
          </div>
          <div className="r-inputs">
            <input type="email" placeholder="Email" id="r-email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <div className="r-button">
            <button>Upload Resume!</button>
            <button id="r-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;