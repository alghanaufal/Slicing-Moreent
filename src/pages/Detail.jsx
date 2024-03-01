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
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

import CardList from "../component/CardList";
import SideHome from "../component/SideHome";
import Cars from "../data.json";

import Profil from "../assets/Profil.png";
import Car from "../assets/BGCard2.png";
import Preview1 from "../assets/View 1.png";
import Preview2 from "../assets/View 2.png";
import Preview3 from "../assets/View 3.png";

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
          backgroundColor: "#F6F7F9",
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
                  backgroundColor: "#3563E9",
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
                    Sports car with the best design and acceleration
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "8px", color: "#fff" }}
                  >
                    Safety and comfort while driving a futuristic and elegant
                    sports car
                  </Typography>
                </CardContent>
              </Card>
              <Grid container spacing={2} sx={{ marginY: 2 }}>
                <Grid item xs={4}>
                  <img
                    src={Preview1}
                    alt="Photo 1"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={Preview2}
                    alt="Photo 2"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <img
                    src={Preview3}
                    alt="Photo 3"
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ height: 480, padding: 3 }}>
                <Box sx={{ paddingBottom: 2, lineHeight: 3 }}>
                  <Grid container>
                    <Grid item xs={11}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Nissan GT - R
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <FavoriteIcon color="error" />
                    </Grid>
                  </Grid>
                  <Stack direction="row">
                    <Rating
                      size="small"
                      value={value}
                      onChange={handleChange}
                    />
                    <Typography variant="subtitle2">440+ Reviewer</Typography>
                  </Stack>
                </Box>
                <Typography marginTop={2} variant="h6" sx={{ lineHeight: 2 }}>
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track"
                </Typography>
                <Grid container my={4} sx={{ lineHeight: 3 }}>
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Type Car
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="end">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Sport
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Capacity
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="end">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      2 Person
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Steering
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="end">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Manual
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="center">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      Gasoline
                    </Typography>
                  </Grid>
                  <Grid item xs={3} textAlign="end">
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: 2,
                      }}
                    >
                      70L
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={{ paddingTop: 6 }}>
                  <Grid item xs={6} textAlign="start">
                    <Typography variant="h4">$99.00/day</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="end">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ paddingX: 4, paddingY: 3 }}
                    >
                      Rent Now
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              marginX: 4,
              padding: 4,
              borderRadius: "10px",
            }}
          >
            <Grid container alignItems="center" columnSpacing={1}>
              <Grid item>
                <Typography variant="h6" fontWeight={600} paddingRight={2}>
                  Reviews
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="white"
                  sx={{
                    backgroundColor: "#3563E9",
                    fontSize: 14,
                    fontWeight: 700,
                    paddingX: "16px",
                    paddingY: "5px",
                    borderRadius: "4px",
                  }}
                >
                  13
                </Typography>
              </Grid>
            </Grid>
            {[...new Array(2)].map((_, index) => (
              <Grid
                container
                columnSpacing={1}
                sx={{ paddingTop: 2 }}
                key={index}
              >
                <Grid item>
                  <img
                    src={Profil}
                    alt="profil"
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </Grid>
                <Grid container item xs={11} spacing={0}>
                  <Grid container justifyContent="space-between" item>
                    <Grid item>
                      <Typography variant="subtitle1" fontWeight={700}>
                        Alex Stanton
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        21 July 2022
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    item
                  >
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        CEO at Bukalapak
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Rating name={`read-only-${index}`} value={4} readOnly />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="text.secondary">
                      We are very happy with the service from the MORENT App.
                      Morent has a low price and also a large variety of cars
                      with good and comfortable facilities. In addition, the
                      service provided by the officers is also very friendly and
                      very polite.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: 4 }}
            >
              <Typography variant="subtitle1" fontWeight={600}>
                Show All
              </Typography>
              <ExpandMoreRoundedIcon />
            </Grid>
          </Box>
          ;
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
