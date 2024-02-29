import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

export default function CardHero({
  backgroundImage,
  backgroundColor,
  title,
  description,
  buttonColor,
}) {
  const imageHeight = 360;
  return (
    <Grid item xs={6}>
      <Card
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: backgroundColor,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: imageHeight,
          borderRadius: "15px",
        }}
      >
        <CardContent sx={{ width: "384px", margin: "16px" }}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "8px",
              fontWeight: "semibold",
              color: "#fff",
            }}
          >
            {title}
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "8px", color: "#fff" }}>
            {description}
          </Typography>
          <Button
            sx={{
              backgroundColor: buttonColor,
              color: "#fff",
              padding: "8px 16px",
            }}
          >
            Rental Car
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
