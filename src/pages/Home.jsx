import React from "react";
import {
  Stack,
  Grid,
  Button,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

import CardList from "../component/CardList";
import CardHero from "../component/CardHero"; 
import FormRent from "../component/FormRent";
import Cars from "../data.json";

import Car1 from "../assets/BGCard1.png";
import Car2 from "../assets/BGCard2.png";

export default function Home() {
  const pickupOptions = [
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
  ];

  const dropoffOptions = [
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Age",
      name: "age",
      id: "pickup-age",
      defaultValue: 30,
      values: [
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
  ];

  return (
    <Stack sx={{ marginTop: "144px", backgroundColor: "#F6F7F9" }}>
      <Grid container spacing={4} sx={{ padding: "36px" }}>
      <CardHero
          backgroundImage={Car1}
          backgroundColor="#54A6FF"
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          buttonColor="#3563E9"
        />
        <CardHero
          backgroundImage={Car2}
          backgroundColor="#3563E9"
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          buttonColor="#54A6FF"
        />
      </Grid>
      <Grid container spacing={2} sx={{ padding: "36px" }}>
      <FormRent title="Pick-Up" iconColor="#54A6FF" options={pickupOptions} />
        <Grid item sx={{ margin: "0 auto" }}>
          <Button
            sx={{
              backgroundColor: "#3563E9",
              color: "#fff",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "40px",
            }}
          >
            <SwapVertIcon />
          </Button>
        </Grid>
        <FormRent title="Drop-Off" iconColor="#54A6FF" options={dropoffOptions} />
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