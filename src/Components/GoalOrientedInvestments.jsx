

import React from "react";
import "./GoalOrientedInvestments.css"; // Add a CSS file for styling
import { Card, CardContent, Typography, List, ListItem, Container } from "@mui/material";
import { FaChartLine, FaPiggyBank, FaBalanceScale, FaHandsHelping,FaUmbrellaBeach,FaToolbox } from "react-icons/fa";
import { MdMonitor, MdOutlineAttachMoney } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiUnbalanced } from "react-icons/gi";
import { RiFocus3Line } from "react-icons/ri";
import { li } from "framer-motion/client";

const investmentGoals = [
  {
    title: "Maximize Compounding",
    description: "Start early and watch your investments grow exponentially over time.",
    icon: <FaChartLine size={50} color="teal" />,
  },
  {
    title: "Navigate Short-Term Volatility",
    description: "Stay focused on your long-term goals, despite market ups and downs.",
    icon: <RiFocus3Line size={50} color="purple" />,
  },
  {
    title: "Start with Affordable SIPs",
    description: "Begin your investment journey with SIPs that suit your budget.",
    icon: <FaPiggyBank size={50} color="blue" />,
  },
  
  {
    title: "Achieve Financial Independence",
    description: "Plan your investments to secure a stress-free financial future.",
    icon: <FaHandsHelping size={50} color="orange" />,
  },
];

const middleAgedGoals = [
  {
    title: "Segregate Short and Long-Term Goals",
    description: "Understand and prioritize your financial needs to maintain balance.",
    icon: <GoGoal size={50} color="purple" />,
  },
  
  {
    title: "Create an Emergency Corpus",
    description: "Build a safety net to handle unforeseen financial challenges.",
    icon: <FaPiggyBank size={50} color="blue" />,
  },
  {
    title: "Key to Reducing Volatility: Asset Allocation",
    description: "Diversify your investments to mitigate market risks.",
    icon: <MdOutlineAttachMoney size={50} color="green" />,
  },
  {
    title: "Balance Mental & Financial Well-Being",
    description: "Strategize your investments to support family & personal well-being.",
    icon: <GiUnbalanced size={50} color="orange" />,
  },
];

const seniorCitizenGoals = [
  {
    title: "Monitor Your Portfolio Periodically",
    description: "Keep track of your investments to ensure alignment with your goals.",
    icon: <MdMonitor size={50} color="red" />,
  },
  {
    title: "Smooth Process and Hands-On Service",
    description: "Enjoy a hassle-free experience with our dedicated support.",
    icon: <FaToolbox size={50} color="orange" />,
  },
  {
    title: "Customized and Personalized Investment Strategy",
    description: "Tailored investment plans to suit your unique needs and goals.",
    icon: <MdOutlineAttachMoney size={50} color="green" />,
  },
  {
    title: "Strategic Approach for a Stress-Free Retirement",
    description: "Plan your golden years with a strategy that ensures peace of mind.",
    icon: <FaUmbrellaBeach size={50} color="purple" />,
  },
];

const renderGoals = (goals) =>
  // goals.map((goal, index) => (
  //   <Card key={index} style={{ maxWidth: 260, margin: "10px", textAlign: "center" }}>
  //     <div style={{ margin: "20px auto" }}>{goal.icon}</div>
  //     <CardContent>
  //       <Typography gutterBottom variant="h5">
  //         {goal.title}
  //       </Typography>
  //       <Typography variant="body2" color="textSecondary">
  //         {goal.description}
  //       </Typography>
  //     </CardContent>
  //   </Card>
  // ));
  
 goals.map((goal, index)=>(
    <div className="goi">
    <ul style={{ width:"520px" }}><li>{goal.icon}</li>
    <li><h3>{goal.title}</h3></li>
    <li>{goal.description}</li>
    <br /><hr /><br /><br />
    </ul>
    </div>
  ));

  
const GoalOrientedInvestments = () => {
  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
         <h2> Goal-Oriented Investments</h2>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <h3>Designed with Gen Z in mind, because the best time to start is now.</h3>
        </Typography>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left", columnGap:"110px", marginTop: "20px"}}>
          {renderGoals(investmentGoals)}
          
        </div>
        <div className="goi-content">
          <div style={{ marginTop: "40px" }}>
         <Typography variant="h6" gutterBottom>
           <h3>Why Start Now?</h3>
         </Typography>
         
          
         <ul>
           <li>Don’t wait for the perfect moment. The best time to start is now.</li> <hr className="thin-hr"/>

           <li>Maximize compounding by investing early.</li> <hr className="thin-hr"/>
           <li>Start with affordable SIPs to build a habit of saving.</li> <hr className="thin-hr"/>
           <li>Learn to navigate short-term market volatility.</li> <hr className="thin-hr"/>
           <li>Achieve financial independence with disciplined investing.</li> <hr className="thin-hr"/>
         </ul>
         
         </div>
       </div>

       


        <Typography variant="h4" align="center" style={{ marginTop: "40px" }}>
          <h2>Goal-Oriented Investments for Middle-Aged Individuals</h2>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <h3>The most crucial age for individuals as it demands an important balance between taking care of parents and planning your child's future.</h3>
        </Typography>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left", columnGap:"110px", marginTop: "20px" }}>
          {renderGoals(middleAgedGoals)}
        </div>
        <div className="goi-content">
        <div style={{ marginTop: "40px" }}>
         <Typography variant="h6" gutterBottom>
           <h3>Key Steps for Middle-Aged Investment Planning</h3>
         </Typography>
         <ul>
           <li>Segregate your short and long-term goals.</li> <hr className="thin-hr"/>
           <li>Draft an investment plan according to your current financial situation.</li><hr className="thin-hr"/>
           <li>Create a do-it-yourself emergency corpus.</li><hr className="thin-hr"/>
           <li>Key to reduce volatility: asset allocation.</li><hr className="thin-hr"/>
           <li>Balance your mental and financial well-being with kids' investments.</li><hr className="thin-hr"/>
         </ul>
       </div>
       </div>

        <Typography variant="h4" align="center" style={{ marginTop: "40px" }}>
         <h2> Goal-Oriented Investments for Senior Citizens</h2>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <h3>To be financially carefree, start planning now. Rising costs of living and increased life expectancy need alignment with your financial needs.</h3>
        </Typography>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "left", columnGap:"110px", marginTop: "20px" }}>
          {renderGoals(seniorCitizenGoals)}
        </div>
        <div className="goi-content">
        <div style={{ marginTop: "40px" }}>
         <Typography variant="h6" gutterBottom>
           <h3>Key Steps for Stress-Free Retirement</h3>
         </Typography>
         <ul>
           <li>Monitor your portfolio periodically.</li><hr className="thin-hr"/>
           <li>Enjoy smooth processes and hands-on services.</li><hr className="thin-hr"/>
           <li>Adopt a customized and personalized investment strategy.</li><hr className="thin-hr"/>
           <li>Follow a strategic approach to turn your retirement stress-free.</li><hr className="thin-hr"/>
           <li>Align your rising living costs with your financial needs.</li><hr className="thin-hr"/>
         </ul>
       </div>
       </div>
      </Container>
    </>
  );
};

export default GoalOrientedInvestments;
