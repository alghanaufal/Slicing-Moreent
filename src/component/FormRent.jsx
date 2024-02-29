import React from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  FormControl,
  NativeSelect,
} from "@mui/material";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

export default function FormRent({ title, iconColor, options }) {
  return (
    <Grid item>
      <Card
        sx={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          width: "552px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CircleTwoToneIcon sx={{ marginRight: "8px", color: iconColor }} />{" "}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>{" "}
        </Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          {options.map((option, index) => (
            <Grid key={index} item sx={{ flex: 1 }}>
              <FormControl fullWidth>
                <Typography variant="standard" sx={{ fontWeight: "bold" }}>
                  {option.label}
                </Typography>
                <NativeSelect
                  defaultValue={option.defaultValue}
                  inputProps={{
                    name: option.name,
                    id: option.id,
                  }}
                >
                  {option.values.map((value, idx) => (
                    <option key={idx} value={value.value}>
                      {value.label}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Grid>
  );
}
