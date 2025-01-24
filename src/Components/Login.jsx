import React from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form action="#" method="POST" className="login-form">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn">Login</button>
          <p className="signup-text">Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
        </form>
      </div>
    </>
  )
}

export default Login
