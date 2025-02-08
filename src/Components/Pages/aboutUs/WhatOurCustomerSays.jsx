import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { MdFormatQuote } from "react-icons/md";
import { FcRating } from "react-icons/fc";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis blanditiis facere, cum voluptates aut repellat nisi.",
  },
  {
    id: 2,
    text: "Nihil sunt vitae harum esse rem quaerat natus eum omnis ut placeat excepturi? Animi.",
  },
  {
    id: 3,
    text: "Cum voluptates aut repellat nisi, nihil sunt vitae harum esse rem quaerat natus eum omnis ut placeat excepturi? Animi.",
  },
];

const WhatOurCustomerSays = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <hr />
      <Typography variant="h4" gutterBottom sx={{ marginTop: 3 }}>
        What Our Customers Say
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Card
              sx={{
                border: "1.5px dashed rgb(11, 191, 207)",
                transition: "0.5s",
                textAlign: "center",
                padding: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                ":hover": {
                  border: "1.5px solid rgb(11, 191, 207)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">
                  <MdFormatQuote />
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {testimonial.text}
                </Typography>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <FcRating key={i} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default WhatOurCustomerSays;
