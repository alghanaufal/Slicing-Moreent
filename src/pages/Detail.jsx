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
import SideHome from "../component/SideHome";
import Cars from "../data.json";

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
                <Grid container alignItems="center" sx={{paddingTop:6}}>
                  <Grid item xs={6} textAlign="start">
                    <Typography variant="h4">$99.00/day</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="end">
                    <Button variant="contained" color="primary" sx={{paddingX: 4, paddingY: 3}}>
                      Rent Now
                    </Button>
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
