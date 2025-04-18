import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center text-primary mb-4">Login to ClickNCart</h3>
        
        <form>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">Username</label>
            <input type="Username" className="form-control" id="email" placeholder="Enter Username" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>

        <div className="text-center">
          <p className="mb-0">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
