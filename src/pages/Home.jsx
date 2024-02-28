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
  const backgroundImage = new Image();
  (backgroundImage.src = Car1), Car2;
  const imageHeight = backgroundImage.height;
  
  return (
    <Stack sx={{ marginTop: "144px" }}>
      <Grid container spacing={4} sx={{ padding: "36px" }}>
        <Grid item xs={6}>
          <Card
            style={{
              backgroundImage: `url(${Car1})`,
              backgroundColor: "#54A6FF",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: imageHeight,
              borderRadius: "15px",
            }}
          >
            <CardContent style={{ width: "384px", margin: "16px" }}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: "8px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                The Best Platform for Car Rental
              </Typography>
              <Typography
                variant="h6"
                style={{ marginBottom: "8px", color: "#fff" }}
              >
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </Typography>
              <Button
                style={{
                  backgroundColor: "#3563E9",
                  color: "#fff",
                  padding: "8px 16px",
                }}
              >
                Rental Car
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            style={{
              backgroundImage: `url(${Car2})`,
              backgroundColor: "#3563E9",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: imageHeight,
              borderRadius: "15px",
            }}
          >
            <CardContent style={{ width: "384px", margin: "16px" }}>
              <Typography
                variant="h4"
                style={{
                  marginBottom: "8px",
                  fontWeight: "semibold",
                  color: "#fff",
                }}
              >
                Easy way to rent a car at a low price
              </Typography>
              <Typography
                variant="h6"
                style={{ marginBottom: "8px", color: "#fff" }}
              >
                Providing cheap car rental services and safe and comfortable
                facilities.
              </Typography>
              <Button
                style={{
                  backgroundColor: "#54A6FF",
                  color: "#fff",
                  padding: "8px 16px",
                }}
              >
                Rental Car
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ padding: "36px" }}>
        {Cars.map((car) => (
          <Grid key={car.id} item xs={12} sm={6} md={3}>
            <CardList car={car} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
