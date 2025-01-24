import React, { useState } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
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
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
