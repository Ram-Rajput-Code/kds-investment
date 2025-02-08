import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Container, Box } from "@mui/material";
import { motion } from "framer-motion";

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

const AboutPartner2 = () => {
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
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 380,
                  overflow: "hidden",
                }}
              >
                {/* Card Image */}
                <CardMedia
                  component="img"
                  height="380"
                  width="100%"
                  image={partner.image}
                  alt={partner.name}
                  sx={{
                    transition: "0.3s ease",
                    filter: "brightness(100%)",
                    "&:hover": { filter: "brightness(50%)" },
                  }}
                />
                
                {/* Overlay with Motion Typography */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 },
                    textAlign: "center",
                    padding: 2,
                    overflow: "hidden",
                  }}
                >
                  {/* Animated Typography Sliding from Bottom to Top */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Typography variant="h6" fontWeight={900}>
                      {partner.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "white", fontFamily: "sans-serif", lineHeight: 2 }}
                    >
                      {partner.description}
                    </Typography>
                  </motion.div>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutPartner2;
