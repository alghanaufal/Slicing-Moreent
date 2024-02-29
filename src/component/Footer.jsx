import React from "react";
import { Box, Container, Grid, Link, Typography, Divider } from "@mui/material";
import Logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        marginTop: "auto",
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between" sx={{marginY: "20px"}}>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ width: 300, height: 110, marginLeft: "20px" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "80px", height: "24px" }}
              />
              <Typography gutterBottom>
                Our vision is to provide convenience and help increase your
                sales business.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              About
            </Typography>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              How it works
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Featured
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Partnership
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Business Relation
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Community
            </Typography>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Events
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Blog
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Podcast
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Invite a friend
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Socials
            </Typography>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Discord
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Instagram
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Twitter
            </Link>
            <Link
              href="#"
              display="block"
              sx={{ textDecoration: "none", marginBottom: "18px" }}
            >
              Facebook
            </Link>
          </Grid>
        </Grid>
        <Divider />
        <Grid container alignItems="center" sx={{marginY: "20px"}}>
          <Grid item xs={6}>
            <Typography sx={{marginLeft: "20px" , fontWeight: "bold"}}>
              © 2024 Company Co. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={3} >
            <Typography sx={{fontWeight: "bold"}}>Privacy & Policy</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography sx={{fontWeight: "bold"}}>Terms & Condition</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
