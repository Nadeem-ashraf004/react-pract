// Login.jsx
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
