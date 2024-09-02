// src/components/StoreLogo.jsx
import React from 'react';
import { Box } from '@mui/material';
import logo from './public/logo.png'
const StoreLogo = () => {
  return (
    <Box sx={{ 
        flexGrow: 1,
        backgroundImage: `url(${logo})`, 
         }} >
      
    </Box>
  );
}

export default StoreLogo;
