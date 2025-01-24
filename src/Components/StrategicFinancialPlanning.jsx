import React from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { FaChartLine, FaPiggyBank, FaBalanceScale, FaHandsHelping } from "react-icons/fa";


const StrategicFinancialPlanning = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: "20px", paddingBottom: "40px" }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundColor: "#f4f4f9",
          textAlign: "center",
          padding: "40px 20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Strategic Financial Planning
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Achieve your short-term and long-term objectives with goal-oriented investments.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: "20px", textTransform: "none" }}
        >
          Get Started
        </Button>
      </div>

      {/* Financial Goals Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Your Path to Financial Success
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" paragraph>
        Whether you're saving for a dream home, planning for retirement, or securing your family's future, our goal-oriented
        investment strategies are tailored to help you achieve your aspirations.
      </Typography>

   

      {/* Call to Action Section */}
      <div
        style={{
          backgroundColor: "#e3f2fd",
          textAlign: "center",
          padding: "30px 20px",
          borderRadius: "8px",
          marginTop: "40px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to Take Control of Your Financial Future?
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Start planning today with expert strategies and tailored investment options.
        </Typography>
        <Button
          variant="contained"
          
         
          size="large"
          style={{ textTransform: "none" }}
        >
          Learn More
        </Button>
      </div>
    </Container>
  );
};

export default StrategicFinancialPlanning;
