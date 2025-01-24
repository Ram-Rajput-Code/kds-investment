import React from 'react';
import { FaSearchDollar, FaChartBar, FaCogs, FaBalanceScale, FaFlagUsa, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { BiCustomize } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { TbTax } from "react-icons/tb";
import { PiPlantBold } from "react-icons/pi";
import './Home.css';
const Home = () => {
  return (
    <>
      <div className="HomeBodyBanner">

        {/* <h1>KDS INVESTMENT  <br /> Driven by Investment</h1>
        <div className="HomeBodyBannerText">
          <div className="HomeBodyBannerText1">Achieve Financial Freedom</div>
          <div className="HomeBodyBannerText1">A Systematic Approach <br /> to Reach Your Life Goal</div>
        </div> */}
        {/* <img src="/images/kdsbodybanner.jpg" alt="" /> */}
      </div>



      <div className="container">
        <h1>PILLARS TO BUILD FINANCIAL FREEDOM</h1>
        <div className="grid">
          <div className="grid-item"><BiCustomize size={'30'} />
            <h2>  Customizing Investments</h2>
            <p>Achieve your short-term and long-term financial goals with tailored investment strategies.</p>
          </div>
          <div className="grid-item"><GiReceiveMoney size={'30'} color='green' />
            <h2>Boutique Wealth Management</h2>
            <p>Offering services like portfolio management, AIF, and a wide range of asset classes managed by experienced fund managers.</p>
          </div>
          <div className="grid-item"><FaFlagUsa size={'30'} color='red' />
            <h2>Investment Services for NRIs</h2>
            <p>Providing specialized investment services for NRIs, including the recently added GIFT City options.</p>
          </div>
          <div className="grid-item"><HiLightBulb size={'30'} color='orange' />
            <h2>Investor Awareness Programs</h2>
            <p>Organizing programs to educate and empower investors with valuable financial insights.</p>
          </div>
        </div>
      </div>
      {/* PILLARS TO BUILD FINANCIAL FREEDOM */}

      <div className="fourstepapproachcontainer">
        <h1>Our 4 Step Approach</h1>
        <div className="fourstepapproach">
          <div className="approach"> <FaSearchDollar size={80} color="#0073e6" /> <p>Understand your Current Financial Hurdle and Goal ! </p></div>
          <div className="approach"> <FaChartBar size={80} color="#0073e6" /> <p>Reviewing Existing Portfolio if Any & Risk Profile for You  </p></div>
          <div className="approach"> <FaCogs size={80} color="#0073e6" /> <p>Customize Solution with Asset Allocation</p></div>
          <div className="approach"> <FaBalanceScale size={80} color="#0073e6" /><p>Strategically and Tactically Reviewing and Rebalancing Your Portfolio</p></div>
        </div>
      </div>
      {/* fourstepapproach */}


      <h1 className="whykdsheading">Why KDS</h1>
      <div className="whycontainer">
        <div className="whycard educate">
          <FaGraduationCap size={30} />
          <h2>Educate & Empower</h2>
          <p>To educate and empower people about their finances.</p>
        </div>
        <div className="whycard tax">
          <TbTax size={30} />
          <h2>Tax Planning</h2>
          <p>Helping individuals with tax planning.</p>
        </div>
        <div className="whycard investment">
          <FaChartLine size={30} />
          <h2>Investment Solutions</h2>
          <p>Solving your investment hurdles.</p>
        </div>
        <div className="whycard portfolio">
          <PiPlantBold size={30} />
          <h2>Sustainable Portfolio</h2>
          <p>Creating a stable, sustainable, and simple portfolio for you and your next generation.</p>
        </div>
      </div>
      {/* why-kds-container */}
    </>
  )
}

export default Home
