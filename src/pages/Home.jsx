import React from "react";
import {
  Stack,
  Grid,
  Card,
  CardContent,
  Typography,
  InputLabel,
  FormControl,
  NativeSelect,
  Button,
} from "@mui/material";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import SwapVertIcon from '@mui/icons-material/SwapVert';

import CardList from "../component/CardList";
import Cars from "../data.json";

import Car1 from "../assets/BGCard1.png";
import Car2 from "../assets/BGCard2.png";

export default function Home() {
  return (
    <Stack sx={{ marginTop: "144px", backgroundColor: "#F6F7F9" }}>
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
      <Grid container>
        <Grid>
          <Typography>
            <CircleTwoToneIcon /> Pick-Up
          </Typography>
          <Grid container>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Button sx={{
              backgroundColor: "#3563E9",
              color: "#fff",
              padding: "18px",
              borderRadius: "10px"
            }}>
          <SwapVertIcon/>
          </Button>
        </Grid>
        <Grid>
          <Typography>
            <CircleTwoToneIcon /> Drop-Off
          </Typography>
          <Grid container>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Age
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
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
