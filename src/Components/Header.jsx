import React from 'react';
import './Header.css';
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src="/images/kdslogo.jpg" alt="" height={'100%'} /> <span>KDS Investments</span>
        </div>
        <div className="social-media"><MdOutlineEmail />  kdsinvestment06@gmail.com</div>
        <div className="social-media"><MdOutlinePhone />  +91 75871-68981</div>
      </div>

    </>
  )
}

export default Header
