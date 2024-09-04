import React from 'react';
import { Button } from '@mui/material';
import Home from './Home';
import About from './About';
import ProductDetail from './components/ProductDetail';
import { Router } from 'react-router-dom';

const NavbarButton = ({ label }) => {
  return (
    <Button color="inherit" sx={{ color: 'black', margin: '0 1rem' }}>
      {label}
    </Button>
    
  );
}

export default NavbarButton;
