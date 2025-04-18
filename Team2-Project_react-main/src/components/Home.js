// src/components/Home.js
import React from "react";
import logo from "./logohome.jpg"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div className="container text-center">
        <div className="card p-5 shadow-lg bg-light bg-opacity-75">
          <h1 className="mb-3 text-primary">Welcome to ClickNCart</h1>
          <p className="lead">Browse products, login or register to get started.</p>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <Link to="/login">
              <button className="btn btn-outline-primary px-4">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary px-4">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
