import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const partners = [
  {
    name: "Kashi Devi Singh",
    description:
      "With over 25 years of experience in Mutual Fund Distribution, Kashi Devi Singh brings a wealth of knowledge and a client-focused approach to our firm. As the Partner, she oversees management of the firm and ensures that our clients receive the highest level of service.",
    image: "images/KASHI_DEVI_SINGHcroped.jpg",
  },
  {
    name: "Ajay Kumar Singh",
    description:
      "Ajay Kumar Singh is a seasoned professional in MFD Fraternity, with experience of over 30 years and specializing in Retirement Planning. As the Partner, he plays a key role bringing key market insights and driving innovation and efficiency in our operations. He currently also serves as the President of IFA Association, Bhilai.",
    image: "/images/AJAY_KUMAR_SINGHcroped.jpg",
  },
  {
    name: "Amey Kumar Singh",
    description:
      "Amey Kumar Singh is a dynamic leader with a passion for Wealth Management. As the Partner, he focuses on digitally integrating this legacy and on boarding clients from pan India, ensuring that our firm remains at the forefront of Wealth Management. He has done his Bachelor’s in Finance and Master’s in Alternative Investment from University of Massachusetts Amherst.",
    image: "/images/AMEY_KUMAR_SINGHcroped.jpg",
  },
];

const AboutPartner = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight={600}>
        Meet the Partners
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {partners.map((partner, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 2,
              }}
            >
              <CardMedia
                component="img"
                height="380"
                width="100%"
                image={partner.image}
                alt={partner.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {partner.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {partner.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutPartner;
