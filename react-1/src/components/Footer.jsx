import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom

const Footer = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation function
  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
      alert('Subscribed successfully!'); // Example action, you can add more functionality here
    }
  };

  return (
    <Box sx={{ bgcolor: '#f8f8f8', p: 4 }}>
      <Grid container spacing={4}>
        {/* Left Section with Logo and Contact Information */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: 'red' }}>F</span>amms
          </Typography>
          <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
            ADDRESS:
          </Typography>
          <Typography variant="body2">
            28 White tower, Street Name New York City, USA
          </Typography>
          <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
            TELEPHONE:
          </Typography>
          <Typography variant="body2">+91 987 654 3210</Typography>
          <Typography variant="body1" fontWeight="bold" sx={{ mt: 2 }}>
            EMAIL:
          </Typography>
          <Typography variant="body2">yourmain@gmail.com</Typography>
        </Grid>

        {/* Menu Links Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold">
            MENU
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </Typography>
          <Typography variant="body2">
            <Link to="/services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
          </Typography>
          <Typography variant="body2">
            <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>Blog</Link>
          </Typography>
          <Typography variant="body2">
            <Link to="/contacts" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </Typography>
        </Grid>

        {/* Account Links Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold">
            ACCOUNT
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Account
          </Typography>
          <Typography variant="body2">Checkout</Typography>
          <Typography variant="body2">Login</Typography>
          <Typography variant="body2">Register</Typography>
          <Typography variant="body2">Shopping</Typography>
          <Typography variant="body2">Widget</Typography>
        </Grid>

        {/* Newsletter Section with Email Validation */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight="bold">
            NEWSLETTER
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Subscribe to our newsletter and get updates.
          </Typography>
          <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
              sx={{ flexGrow: 1, mr: 1 }}
            />
            <Button variant="contained" sx={{
                        backgroundColor: '#F7444E',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'red'}}} onClick={handleSubscribe}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © 202 All Rights Reserved By SaqTech
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
