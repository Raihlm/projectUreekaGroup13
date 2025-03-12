import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Let's get started!</h1>
      <div className="signup-box">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <Link to="/">
          <button>Sign In</button>
        </Link>

      </div>
    </div>
  );
};

export default Signup;
