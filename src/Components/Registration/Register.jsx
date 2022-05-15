import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span>Registration Form</span>
      <form action="">
        <div>
          <input type="text" name="First Name" />
          <input type="text" name="Last Name" />
        </div>
        <div>
          <input type="number" name="Age" />
          <input type="date" name="Date of Birth" />
        </div>
        <input type="email" name="email" id="" />
        <input  />
      </form>
    </div>
  );
};

export default Register;
