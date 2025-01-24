import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <h1>Create an Account</h1>
        <form action="/submit_signup" method="post">
          <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
      </div>
    </>
  )
}

export default Signup
