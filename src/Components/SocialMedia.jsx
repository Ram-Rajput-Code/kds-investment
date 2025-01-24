
import './SocialMedia.css';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";


export default function SocialMedia() {
  return (

    <div className="main" style={{ padding: '5px' }}>
      <div className="socialMediaIcon">
        <div className="forcircle"><FaFacebookSquare /></div>
        <div className='forcircle'><FaTwitter /></div>
        <div className='forcircle'><TfiYoutube /></div>
        <div className='forcircle'><IoLogoInstagram /></div>
        <div className='forcircle'><FaLinkedinIn /></div>
      </div>
    </div>

  )
}
