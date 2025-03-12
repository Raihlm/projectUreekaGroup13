import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"
 
const Login = () => {
  return (
    <div className="signup-container">
      <div className="header"></div>
      <h1>Let's Get Started!</h1>
      <div className="signup-box">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />

        <Link to="/Homepage">
          <button>Login</button>
        </Link>

        <a href="#" className="forgot-password">Forgot password?</a>
      </div>
    </div>
  );
};

export default Login;
