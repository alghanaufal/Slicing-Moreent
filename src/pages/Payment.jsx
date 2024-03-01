import React from "react";
import {
  Stack,
  Card,
  Grid,
  MenuItem,
  Select,
  Typography,
  TextField,
  CardContent,
} from "@mui/material";
import Car from "../assets/BGCard2.png";

export default function Payment() {
  const pickupOptions = [
    {
      label: "Locations",
      name: "locations",
      id: "pickup-location",
      defaultValue: "default",
      values: [
        { label: "Select your city", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Date",
      name: "date",
      id: "pickup-date",
      defaultValue: "default",
      values: [
        { label: "Select your date", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Time",
      name: "time",
      id: "pickup-time",
      defaultValue: "default",
      values: [
        { label: "Select your time", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
  ];

  const dropoffOptions = [
    {
      label: "Locations",
      name: "locations",
      id: "pickup-location",
      defaultValue: "default",
      values: [
        { label: "Select your city", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Date",
      name: "date",
      id: "pickup-date",
      defaultValue: "default",
      values: [
        { label: "Select your date", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
    {
      label: "Time",
      name: "time",
      id: "pickup-time",
      defaultValue: "default",
      values: [
        { label: "Select your time", value: "default" },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
      ],
    },
  ];

  return (
    <Stack sx={{ marginTop: "144px", backgroundColor: "#F6F7F9" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ padding: 2, borderRadius: 4 }}>
            <Typography>Billing Info</Typography>
            <Typography>Please enter your billing info</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Nama Depan" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Nama Belakang" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ padding: 2, borderRadius: 4 }}>
            <Typography>Billing Info</Typography>
            <Typography>Please enter your billing info</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField fullWidth label="Nama Depan" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Nama Belakang" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ padding: 2, borderRadius: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={pickupOptions[0].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {pickupOptions[0].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={pickupOptions[1].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {pickupOptions[1].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={pickupOptions[2].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {pickupOptions[2].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={dropoffOptions[0].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {dropoffOptions[0].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={dropoffOptions[1].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {dropoffOptions[1].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={6}>
                <Select
                  fullWidth
                  value={dropoffOptions[2].defaultValue}
                  onChange={(event) => console.log(event.target.value)}
                  displayEmpty
                  variant="outlined"
                >
                  {dropoffOptions[2].values.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Card>
        </Grid>
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
                Safety and comfort while driving a futuristic and elegant sports
                car
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
