

import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isMobileMenuOpen ? "enable" : ""}`}>
        <li><NavLink className="nav-link" aria-current="page" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink></li>
        <li><a className="nav-link drop-down-navs" aria-current="page" to="#">Services <span>&#9660;</span></a>
          <div className="drop-down-nav">
            <ul>
              <li> <NavLink to="/goal">Goal Based Planning</NavLink> </li>
              <li> <NavLink to="/goaloi">Goal Oriented Investments</NavLink> </li>
              <li> <NavLink to="/strategicfinancialplanning">Strategic Financial Planning</NavLink> </li>
              
            </ul>
          </div>
        </li>
        <li><a className="nav-link drop-down-navs" aria-current="page" to="#">Products <span>&#9660;</span></a>
          <div className="drop-down-nav">
            <ul>
              <li> <NavLink to="/mutual-fund">Mutual Fund</NavLink> </li>
              <li>PMS</li>
              <li>FD</li>
            </ul>
          </div>
        </li>
        <li><NavLink className="nav-link " aria-current="page" to="/nris">NRIs</NavLink></li>
        <li><NavLink className="nav-link " aria-current="page" to="/pms">PMS</NavLink></li>
        <li><NavLink className="nav-link " aria-current="page" to="/workshops">Workshops</NavLink></li>
        {/* <li><NavLink className="nav-link " aria-current="page" to="/calculators">Calculators</NavLink></li> */}
        {/* <li><NavLink className="nav-link " aria-current="page" to="/blog">Blog</NavLink></li> */}
        <li><NavLink className="nav-link " aria-current="page" to="/login">Portfolio Login </NavLink></li>
        <li><NavLink className="nav-link " aria-current="page" to="/inquiry">Inquiry </NavLink></li>

      </ul>
      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
