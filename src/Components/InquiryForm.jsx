import React, { useState } from 'react';
import './InquiryForm.css'; // Importing the CSS file for styling
import emailjs from "emailjs-com";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   const { name, email, message } = formData;

    // Send email using EmailJS
    emailjs
      .send(
        "service_qd9j1qm", // Your EmailJS service ID (e.g., Gmail)
        "template_1vbytbm", // Your EmailJS template ID
        {
          name,
          email,
          message,
        },
        "NNfKEyE1RhVlIoRbG" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent successfully!");

          // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (

    <>
      <div className="inquiry-main">


        <div className="inquiry-form-container">
          <h2>Inquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>

        <div className="inq-map-container">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.277125408044!2d81.31598171606905!3d21.141067739845607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2924ba26613f93%3A0xa14af8eee6121cd!2sKDS%20INVESTMENT!5e0!3m2!1sen!2sin!4v1735728903408!5m2!1sen!2sin" width={'100%'} height={'100%'}></iframe>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
