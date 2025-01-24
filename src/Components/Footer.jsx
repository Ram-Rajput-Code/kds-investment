import React from 'react';
import './Footer.css';
import SocialMedia from './SocialMedia';
const Footer = () => {
  return (
    <>
      <div className="footer-box">
        <div className="ftr-box linksftr">
          <div className='footerSection'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="ftr-box servicesftr">
          <div className='footerSection'>
            <h3>Services</h3>
            <ul>
              <li>Goal Based Planning</li>
              <li>Tax Planning</li>
              <li>NRI Services</li>
            </ul>
          </div>
        </div>
        <div className="ftr-box contactftr">
          <div className='footerSection'>
            <h3>Contact</h3>
            <p>Phone: +91 75871 68981</p>
            <p> Email:  <a href="mailto:kdsinvestment06@gmail.com"> kdsinvestment06@gmail.com</a></p>
            <p>Address: KDS Tower, Near Indian Marriage Palace, Junwani Bhilai</p>
          </div>
        </div>

        <div className="ftr-box footermap">
          <div className='footerSection'>
            {/* <h3>Location</h3> */}
            <div className="map-container">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.277125408044!2d81.31598171606905!3d21.141067739845607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2924ba26613f93%3A0xa14af8eee6121cd!2sKDS%20INVESTMENT!5e0!3m2!1sen!2sin!4v1735728903408!5m2!1sen!2sin" width={'100%'} height={'100%'}></iframe>
            </div>

          </div>
        </div>

      </div>

      <div className="ftr-SocialMedia"> <div className="SocialMedia-footer"><SocialMedia /> </div></div>
    </>
  )
}

export default Footer
