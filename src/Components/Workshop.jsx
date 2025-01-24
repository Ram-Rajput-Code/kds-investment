import React from "react";
import "./Workshop.css"; 
const workshops = [
  {
    name: "Advanced Python Programming",
    date: "March 15, 2025",
    location: "Online",
    duration: "3 Days",
  },
  {
    name: "Leadership & Team Management",
    date: "April 10, 2025",
    location: "Bilaspur, Chhattisgarh",
    duration: "2 Days",
  },
  {
    name: "Flutter App Development",
    date: "May 5, 2025",
    location: "Hybrid (Online + In-person)",
    duration: "5 Days",
  },
];
const steps = [
    {
      step: "1",
      title: "Choose Your Workshop",
      description: "Browse our list of workshops to find the one that suits your needs.",
    },
    {
      step: "2",
      title: "Register Online",
      description: "Complete the registration form and secure your spot easily.",
    },
    {
      step: "3",
      title: "Join the Session",
      description: "Attend the workshop and unlock new opportunities for growth.",
    },
  ];

const testimonials = [
  {
    quote:
      "The workshop on AI Basics was eye-opening! The hands-on projects made it so much easier to understand complex concepts.",
    author: "Ritika Sharma",
  },
  {
    quote:
      "The Digital Marketing workshop transformed the way I approach online advertising. Highly recommended!",
    author: "Rahul Verma",
  },
];

const benefits = [
    {
      icon: "🛠️",
      title: "Hands-On Learning",
      description: "Gain practical, real-world experience through interactive sessions and projects.",
    },
    {
      icon: "👩‍🏫",
      title: "Expert Facilitators",
      description: "Learn from seasoned professionals with years of experience in their fields.",
    },
    {
      icon: "📚",
      title: "Customized Content",
      description: "Workshops tailored to your unique goals and learning needs.",
    },
    {
      icon: "🤝",
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals to expand your professional circle.",
    },
    {
      icon: "📜",
      title: "Certificate of Completion",
      description: "Validate your skills with an official certificate of completion.",
    },
  ];

const Workshop = () => {
  return (
    <>
    <div className="workshopBanner">
        <img src="/images/workshopBanner.avif" alt="/images/workshopBanner" width="100%"/>
    </div>

<div className="workshop-page">
<header className="workshop-header">
  <h1>Workshops</h1>
  <p>
    Join our workshops to gain practical skills, learn from experts, and
    achieve your personal and professional goals.
  </p>
</header>

<section className="upcoming-workshops">
  <h2>Upcoming Workshops</h2>
  <div className="workshop-list">
    {workshops.map((workshop, index) => (
      <div key={index} className="workshop-card">
        <h3>{workshop.name}</h3>
        <p><strong>Date:</strong> {workshop.date}</p>
        <p><strong>Location:</strong> {workshop.location}</p>
        <p><strong>Duration:</strong> {workshop.duration}</p>
      </div>
    ))}
  </div>
</section>

<div className="why-attend-container">
      <h2>Why Attend Our Workshops?</h2>
      <div className="media-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="media-item">
            <div className="media-icon">{benefit.icon}</div>
            <div className="media-content">
              <h3 className="media-title">{benefit.title}</h3>
              <p className="media-description">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

<section className="testimonials">
  <h2>What Participants Say</h2>
  <div className="testimonial-list">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-card">
        <p>"{testimonial.quote}"</p>
        <p>- {testimonial.author}</p>
      </div>
    ))}
  </div>
</section>

<div className="how-to-register-container">
      <h2>How to Register?</h2>
      <div className="card-list">
        {steps.map((step, index) => (
          <div key={index} className="register-card">
            <div className="card-header">
              <span className="step-number">{step.step}</span>
              <h3 className="step-title">{step.title}</h3>
            </div>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
</div>
</>
  )
}

export default Workshop