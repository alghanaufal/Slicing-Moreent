import React from "react";
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
import SideHome from "../component/SideHome";
import { useState } from "react";
import Car from "../assets/BGCard2.png";
import Cars from "../data.json";
import CardList from "../component/CardList";

export default function Detail() {
  const [value, setValue] = useState(4);
  console.log(value);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <SideHome />
      <Container sx={{ marginTop: "124px", minHeight: "calc(100vh - 248px)" }}>
        <Grid
          container
          spacing={2}
          sx={{ marginTop: "130px", minHeight: "calc(80vh - 248px)" }}
        >
          <Grid item xs={6}>
            <Stack alignItems="center">
              <Grid
                container
                spacing={4}
                sx={{ padding: "36px", maxWidth: "1400px" }}
              >
                {renderCard(
                  Car,
                  "#3563E9",
                  "The Best Platform for Car Rental",
                  "Ease of doing a car rental safely and reliably. Of course at a low price.",
                  "#3563E9"
                )}
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <Box>
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
              </Box>
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
      </Container>
    </>
  );

  function renderCard(
    backgroundImage,
    backgroundColor,
    title,
    description,
    buttonColor
  ) {
    const imageHeight = 260;
    return (
      <Grid item xs={6}>
        <Card
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: backgroundColor,
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
              {title}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginBottom: "8px", color: "#fff" }}
            >
              {description}
            </Typography>
            <Button
              style={{
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
}
