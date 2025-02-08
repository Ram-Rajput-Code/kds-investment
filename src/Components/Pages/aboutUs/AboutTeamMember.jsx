import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const team = [
  {
    name: "Lavan Kumar Sahu",
    designation: "Operational Head",
    description:
      "With 17 years of expertise, Lavan Kumar Sahu ensures smooth operations, process efficiency, and high service standards. His strategic mindset and problem-solving skills enhance productivity and client experience.",
    image:
      "/images/LAVAN_KUMAR_SAHU_OPERATIONAL_HEAD-17_YEARS_OF_EXPERIENCEcroped.jpg",
  },
  {
    name: "Sandeep Kumar Sarkar",
    designation: "Business Associate",
    description:
      "Sandeep Kumar Sarkar specializes in client relations and business growth, providing tailored investment solutions. His market insights and commitment to financial success make him a key asset to the firm.",
    image: "/images/SANDEEP_KUMAR_SARKAR_BUSINESS_ASSOCIATEcroped.jpg",
  },
  {
    name: `Aditya Singh`,
    designation: "Relationship Manager",
    description:
      "Aditya Singh focuses on client satisfaction, offering personalized financial guidance and investment strategies. His proactive approach and strong communication skills build lasting trust with clients.",
    image: "/images/ADITYA_SINGH_RELATIONSHIP_MANAGERcroped.jpg",
  },
];

const AboutTeamMember = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center" fontWeight={600}>
        Other Team Members
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {team.map((team, index) => (
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
                image={team.image}
                alt={team.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {team.name}
                </Typography>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  {team.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {team.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutTeamMember;
