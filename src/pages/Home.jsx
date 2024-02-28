import React from "react";
import { Grid, Card, CardContent, Typography, Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack sx={{ marginTop: "124px"}}>
      <Grid container spacing={2} style={{ padding: "16px" }}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card 1</Typography>
              <Typography>Content of Card 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Card 2</Typography>
              <Typography>Content of Card 2</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
