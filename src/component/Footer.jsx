import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMediaLinks = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
};

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
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Brand Name
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" display="block">
              Features
            </Link>
            <Link href="#" display="block">
              Integrations
            </Link>
            <Link href="#" display="block">
              Pricing
            </Link>
            <Link href="#" display="block">
              FAQ
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" display="block">
              About Us
            </Link>
            <Link href="#" display="block">
              Careers
            </Link>
            <Link href="#" display="block">
              Privacy Policy
            </Link>
            <Link href="#" display="block">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" display="block">
              Public API
            </Link>
            <Link href="#" display="block">
              Documentation
            </Link>
            <Link href="#" display="block">
              Guides
            </Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
