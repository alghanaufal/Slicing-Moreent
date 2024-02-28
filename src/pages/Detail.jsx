import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import SideHome from "../component/SideHome";

export default function Home() {
  return (
    <Container sx={{ marginTop: "124px", minHeight: "calc(100vh - 248px)" }}>
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
      <SideHome />
    </Container>
  );
}
