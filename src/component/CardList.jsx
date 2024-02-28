import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function CardList ({ car }) {
  return (
    <Card>
      <CardMedia component="img" alt={car.title} height="140" image={car.image} />
      <CardContent>
        <Typography variant="h5">{car.title}</Typography>
        <Typography variant="body2">{car.description}</Typography>
        <Button variant="contained" color="primary">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
};