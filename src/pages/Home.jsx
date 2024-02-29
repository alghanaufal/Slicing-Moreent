import React from "react";
import {
  Stack,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CardList from "../component/CardList";
import Cars from "../data.json";

import Car1 from "../assets/BGCard1.png";
import Car2 from "../assets/BGCard2.png";

export default function Home() {
  return (
    <Stack sx={{ marginTop: "144px" }}>
      <Grid container spacing={4} sx={{ padding: "36px" }}>
        {renderCard(
          Car1,
          "#54A6FF",
          "The Best Platform for Car Rental",
          "Ease of doing a car rental safely and reliably. Of course at a low price.",
          "#3563E9"
        )}
        {renderCard(
          Car2,
          "#3563E9",
          "Easy way to rent a car at a low price",
          "Providing cheap car rental services and safe and comfortable facilities.",
          "#54A6FF"
        )}
      </Grid>
      <Grid container spacing={2} sx={{ padding: "36px" }}>
        {Cars.map((car) => (
          <Grid key={car.id} item xs={12} sm={6} md={3}>
            <CardList car={car} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

function renderCard(
  backgroundImage,
  backgroundColor,
  title,
  description,
  buttonColor
) {
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
          <Typography
            variant="h6"
            sx={{ marginBottom: "8px", color: "#fff" }}
          >
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
