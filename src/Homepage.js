import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="nav">
          <Link to="/signup"> {/* ✅ Use lowercase paths */}
            <button className="Signup-button">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </header>
      <main className="main-content">
        <h1>Welcome to</h1>
        <h2>AreYouStunted</h2>
        <div className="content">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              Is to provide people, mainly parents, doctors, and local
              hospitals, the means to quickly identify stunting in a child for
              free.
            </p>
          </div>
          <img src="/doctor.jpg" alt="Doctor with patient" className="image" /> {/* ✅ Ensure correct image path */}
        </div>
        <div className="content">
          <img src="/baby.jpg" alt="Happy baby" className="image" />
          <div className="card">
            <h3>Our Vision</h3>
            <p>
              A world where every individual, regardless of background or
              income, has access to free, reliable tools to detect and prevent
              stunting, ensuring healthier futures for children and
              communities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
