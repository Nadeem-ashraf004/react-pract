import React from 'react';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ShoppingLogo = () => {
  return (
    <IconButton>
      <ShoppingCartIcon sx={{ color: 'black' }} />
    </IconButton>
  );
}

export default ShoppingLogo;
