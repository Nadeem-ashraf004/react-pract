import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left-side Button */}
        <Button color="inherit" component={Link} to="/left-button-action">
         Home
        </Button>

        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
        
        </Typography>

        {/* Right-side Buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/user-data-table">
            User Data Table
          </Button>
          <Button color="inherit" component={Link} to="/multi-step-form">
            MultiStepForm
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
