


import React from "react";
import './MutualFund.css';
import { FaMoneyCheckAlt, FaPiggyBank, FaBalanceScale, FaCoins, FaCalculator } from "react-icons/fa";

const MutualFund = () => {
  const fundOptions = [
    {
      title: "Equity Funds",
      description: "Invest in top-performing equity mutual funds to gain competitive returns.",
      icon: <FaMoneyCheckAlt />,
    },
    {
      title: "Debt Funds",
      description: "Add a layer of safety to your portfolio with debt funds and fixed returns.",
      icon: <FaPiggyBank />,
    },
    {
      title: "Hybrid Funds",
      description: "Balance between equity and debt with hybrid funds and diversification.",
      icon: <FaBalanceScale />,
    },
    {
      title: "Gold Funds",
      description: "Include alternative asset class in your portfolio with this precious metal.",
      icon: <FaCoins />,
    },
  ];

  const investmentOptions = [
    {
      title: "SIP Mutual Funds",
      buttonLabel: "Calculate Now",
      icon: <FaCalculator />,
    },
    {
      title: "Lumpsum Mutual Funds",
      buttonLabel: "Calculate Now",
      icon: <FaCalculator />,
    },
    {
      title: "SWP Mutual Funds",
      description: "Enjoy your sunset years with financial confidence.",
      icon: <FaCalculator />,
    },
  ];

  return (
    <>
      <div className="mutual-fund-banner">

      </div>
      <div className="mutual-fund-page">
        <header className="m-header">
          <h1>Investing in Mutual Funds</h1>
          <p>Your gateway to efficient and effective investing</p>
        </header>

        <section className="intro">
          <h2>Achieve Your Financial Goals</h2>
          <ul>
            <li>Invest in a variety of assets such as stocks, bonds, and commodities</li>
            <li>Benefit from the experience of expert fund managers</li>
            <li>Invest as per your goals, risk appetite, and tenure</li>
            <li>Enjoy tax benefits by investing in specific mutual funds</li>
            <li>Experience active or passive investing</li>
          </ul>
          <button className="cta-button">Get in Touch</button>
        </section>

        <section className="offerings">
          <h2>Our Mutual Fund Offerings</h2>
          <div className="fund-options">
            {fundOptions.map((fund, index) => (
              <div className="fund-card" key={index}>
                <div className="fund-icon">{fund.icon}</div>
                <h3>{fund.title}</h3>
                <p>{fund.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="investment-types">
          <h2>Invest via</h2>
          <div className="investment-options">
            {investmentOptions.map((investment, index) => (
              <div className="investment-card" key={index}>
                <div className="investment-icon">{investment.icon}</div>
                <h3>{investment.title}</h3>
                {investment.description && <p>{investment.description}</p>}
                {investment.buttonLabel && (
                  <button className="calc-button">{investment.buttonLabel}</button>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

    </>
  );
};

export default MutualFund;
