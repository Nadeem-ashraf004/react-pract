// Home.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to My Website
      </Typography>
      <Typography variant="body1">
        This is the home page. Use the navigation bar to explore different sections.
      </Typography>
    </Container>
  );
};

export default Home;
