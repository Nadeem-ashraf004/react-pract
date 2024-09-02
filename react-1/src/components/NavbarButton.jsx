import React from 'react';
import { Button } from '@mui/material';

const NavbarButton = ({ label }) => {
  return (
    <Button color="inherit" sx={{ color: 'black', margin: '0 1rem' }}>
      {label}
    </Button>
  );
}

export default NavbarButton;
