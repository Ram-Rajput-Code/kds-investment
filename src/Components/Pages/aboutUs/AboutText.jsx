import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";

const aboutData = [
  {
    title: "What Sets Us Apart",
    description:
      "At KDS Investment, we believe in building lasting relationships with our clients. What sets us apart is our commitment to improving financial health and ethical practices. We take pride in understanding our clients' needs and delivering results that exceed expectations."
  },
  {
    title: "Our Commitment",
    description:
      "We are committed to bringing financial literacy to every corner of our surroundings. Whether you’re a fresher, mid-age professional, or progressing towards your retirement, we have a plan for you. Our goal is to provide sustainable growth in your portfolio while keeping risk under control."
  },
  {
    title: "Get in Touch",
    description:
      "Ready to take the next step? We’d love to hear from you! Contact us today to learn more about how we can help you achieve your financial independence."
  }
];

const AboutText = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {aboutData.map((section, index) => (
        <Card key={index} sx={{ mb: 3, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {section.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default AboutText;
