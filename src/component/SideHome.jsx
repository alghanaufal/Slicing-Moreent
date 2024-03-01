import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  Slider,
  Typography,
  Drawer,
} from "@mui/material";
import { useState } from "react";

export default function SideHome() {
  const [skills, setSkills] = useState([]);
  const [capacity, setCapacity] = useState([]);
  // console.log({capacity})

  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      //kalau belum ada pada array, maka salin sebelumnya dan tambahkan ke event.target.value
      setSkills([...skills, event.target.value]);
    } else {
      // kalau sudah ada dalam array, kita hapus dan kita mengembalikan skills yang tidak sama dengan skill yg tidak dicentang saat ini
      setSkills(skills.filter((skills) => skills !== event.target.value));
    }
  };
  const handleCapacityChange = (event) => {
    const index = capacity.indexOf(event.target.value);
    if (index === -1) {
      //kalau belum ada pada array, maka salin sebelumnya dan tambahkan ke event.target.value
      setCapacity([...capacity, event.target.value]);
    } else {
      // kalau sudah ada dalam array, kita hapus dan kita mengembalikan capacity yang tidak sama dengan skill yg tidak dicentang saat ini
      setCapacity(
        capacity.filter((capacity) => capacity !== event.target.value)
      );
    }
  };

  return (
    <Drawer anchor="left" variant="permanent">
      <Box sx={{ marginTop: "134px", paddingX:"30px" }}>
        <Box>
          <FormControl>
            <Typography variant="subtitle2">TYPE</Typography>
            <FormGroup>
              <FormControlLabel
                label="Sport (10)"
                value="sport"
                control={
                  <Checkbox
                    checked={skills.includes("sport")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="SUV (12)"
                value="suv"
                control={
                  <Checkbox
                    checked={skills.includes("suv")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="MPV (16)"
                value="mpv"
                control={
                  <Checkbox
                    checked={skills.includes("mpv")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Sedan (20)"
                value="sedan"
                control={
                  <Checkbox
                    checked={skills.includes("sedan")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Coupe (14)"
                value="coupe"
                control={
                  <Checkbox
                    checked={skills.includes("coupe")}
                    onChange={handleSkillChange}
                  />
                }
              />
              <FormControlLabel
                label="Hatchback (14)"
                value="hatchback"
                control={
                  <Checkbox
                    checked={skills.includes("hatchback")}
                    onChange={handleSkillChange}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>

        <Box>
          <FormControl>
            <Typography variant="subtitle2">CAPACITY</Typography>
            <FormGroup>
              <FormControlLabel
                label="2 Person (10)"
                value="2"
                control={
                  <Checkbox
                    checked={capacity.includes("2")}
                    onChange={handleCapacityChange}
                  />
                }
              />
              <FormControlLabel
                label="4 Person (14)"
                value="4"
                control={
                  <Checkbox
                    checked={capacity.includes("4")}
                    onChange={handleCapacityChange}
                  />
                }
              />
              <FormControlLabel
                label="6 Person (12)"
                value="6"
                control={
                  <Checkbox
                    checked={capacity.includes("6")}
                    onChange={handleCapacityChange}
                  />
                }
              />
              <FormControlLabel
                label="8 or More (16)"
                value="8"
                control={
                  <Checkbox
                    checked={capacity.includes("8")}
                    onChange={handleCapacityChange}
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </Box>

        <Box sx={{ width: 150 }}>
          <Typography variant="subtitle2">PRICE</Typography>
          <Slider
            defaultValue={60}
            aria-label="Default"
            // valueLabelDisplay="auto"
            size="medium"
            max={100}
          />
          <Typography>Max.$100.00</Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
