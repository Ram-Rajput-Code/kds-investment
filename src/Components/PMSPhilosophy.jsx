import React from "react";
import "./PMSPhilosophy.css"; // For styling
import { color } from "framer-motion";

const pillars = [
  {
    title: "In-Depth Research",
    description:
      "Our dedicated research team delivers high-quality, ethical, and robust insights, driving informed decisions aligned with your financial goals.",
    image: "/images/InDepthResearch.avif", // Replace with appropriate image paths
  },
  {
    title: "Independent Analysis",
    description:
      "We stand independently, choosing stocks based purely on performance and avoiding any bias or external influence.",
    image: "/images/IndependentAnalysis.png",
  },
  {
    title: "Tailored Portfolios",
    description:
      "Each client receives a customized portfolio based on their risk profile and preferences, ensuring unique asset allocation.",
    image: "/images/TailoredPortfolios.jpg",
  },
  {
    title: "No Model Templates",
    description:
      "Portfolios are built dynamically, combining large-cap, mid-cap, and small-cap stocks as dictated by market needs.",
    image: "/images/NoModelTemplates.jpeg",
  },
  {
    title: "Active Management",
    description:
      "We actively manage your portfolio with regular adjustments to achieve optimal performance and alpha returns.",
    image: "/images/ActiveManagement.jpeg",
  },
  {
    title: "Proprietary Algorithms",
    description:
      "Our unique, automated algorithm assesses risk profiles and optimizes portfolio management as per market trends.",
    image: "/images/ProprietaryAlgorithms.jpg",
  },
];

const PMSPhilosophy = () => {
  return (
    
    <div className="philosophy-page">
        <div className="InvestmentPhilosophyBanner">
        <img src="/images/InvestmentPhilosophyBanner.png" alt="InvestmentPhilosophyBanner" width="100%"/>
    </div>
      <header className="philosophy-header">
        <h1>Our Investment Philosophy</h1>
        <p>
          Guided by principles of research, independence, and customization, we
          deliver personalized investment solutions tailored to your goals.
        </p>
      </header>
      <div className="card-container">
        {pillars.map((pillar, index) => (
          <div key={index} className="card">
            <img
              src={pillar.image}
              alt={pillar.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PMSPhilosophy;
