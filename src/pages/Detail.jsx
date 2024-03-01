import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
  Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import CardList from "../component/CardList";
import CardHero from "../component/CardHero";
import SideHome from "../component/SideHome";
import Cars from "../data.json";

import Car from "../assets/BGCard2.png";

export default function Detail() {
  const [value, setValue] = useState(4);
  console.log(value);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <SideHome />
      <Container
        sx={{
          marginTop: "124px",
          marginRight: "0",
          minHeight: "calc(100vh - 248px)",
        }}
      >
        <Grid sx={{ marginTop: "130px", minHeight: "calc(80vh - 248px)" }}>
          <Grid
            container
            spacing={4}
            sx={{ padding: "36px", maxWidth: "1400px" }}
          >
            <Grid item xs={6}>
              <Card
                sx={{
                  backgroundImage: `url(${Car})`,
                  backgroundColor: "#54A6FF",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 360,
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
                    The Best Platform for Car Rental
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "8px", color: "#fff" }}
                  >
                    Ease of doing a car rental safely and reliably. Of course at
                    a low price.
                  </Typography>
                  <Button
                    sx={{
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
              <Card>
                <Grid container>
                  <Grid item xs={11}>
                    <Typography variant="h5">Nissan GT - R</Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <FavoriteIcon color="error" />
                  </Grid>
                </Grid>
                <Stack direction="row">
                  <Rating size="small" value={value} onChange={handleChange} />
                  <Typography variant="subtitle2">440+ Reviewer</Typography>
                </Stack>
                <Typography marginTop={2} variant="subtitle2">
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track"
                </Typography>
                <Grid container my={4}>
                  <Grid item xs={3}>
                    Type Car
                  </Grid>
                  <Grid item xs={3}>
                    Sport
                  </Grid>
                  <Grid item xs={3}>
                    Capacity
                  </Grid>
                  <Grid item xs={3}>
                    2 Person
                  </Grid>
                  <Grid item xs={3}>
                    Steering
                  </Grid>
                  <Grid item xs={3}>
                    Manual
                  </Grid>
                  <Grid item xs={3}>
                    Gasoline
                  </Grid>
                  <Grid item xs={3}>
                    70L
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ padding: "36px" }}>
            {Cars.map((car) => (
              <Grid key={car.id} item xs={12} sm={6} md={4}>
                <CardList car={car} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}