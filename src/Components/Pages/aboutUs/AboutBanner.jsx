import React from "react";
import { Box, Typography } from "@mui/material";

const AboutBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/aboutbanner1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(35%)", // Darkens the image
          zIndex: -1,
        }}
      />{" "}
      <Box sx={{ display: "grid", justifyContent: "center" }}>
        <Typography
          variant="h3"
          sx={{ maxWidth: "80%", display: "flex", margin: "auto" }}
          className="text-center"
        >
          Welcome to KDS Investment
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "80%", display: "flex", margin: "auto" }}
          className="text-center"
        >
          A trusted partner dedicated to delivering financial freedom to our
          clients. Founded on the principles of trust, collaboration, and
          innovation, we strive to provide customized finance solutions that
          meet the unique needs of our clients.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutBanner;
