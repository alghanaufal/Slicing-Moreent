import React from "react";
import {
  Card,
  CardContent,
  Box,
  Grid,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupIcon from "@mui/icons-material/Group";

export default function CardList({ car }) {
  return (
    <Card
      sx={{
        height: "388px",
        width: "304px",
        borderRadius: "15px",
      }}
    >
      <CardContent>
        <Box sx={{ paddingBottom: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              <Typography variant="h5">{car.title}</Typography>
              <Typography variant="body2">{car.description}</Typography>
            </Grid>
            <Grid item xs={2} container justifyContent="flex-end">
              <FavoriteIcon />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{paddingY: 5}}>
        <CardMedia
          component="img"
          alt={car.title}
          image={car.image}
        />
        </Box>
        <Box sx={{ paddingY: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs={2} container justifyContent="center">
              <LocalGasStationIcon />
            </Grid>
            <Grid item xs={2} container justifyContent="center">
              <Typography>{car.gas}L</Typography>
            </Grid>
            <Grid item xs={2} container justifyContent="center">
              <SpeedIcon />
            </Grid>
            <Grid item xs={2} container justifyContent="center">
              <Typography>{car.type}</Typography>
            </Grid>
            <Grid item xs={2} container justifyContent="center">
              <GroupIcon />
            </Grid>
            <Grid item xs={2} container justifyContent="center">
              <Typography>{car.people}People</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
        <Grid container alignItems="center">
          <Grid item xs={6} textAlign="center">
            <Typography variant="h6">${car.price}.00/day</Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <Button variant="contained" color="primary">
              Rent Now
            </Button>
          </Grid>
        </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
