import React from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchLogo = () => {
  return (
    <IconButton>
      <SearchIcon sx={{ color: 'black' }} />
    </IconButton>
  );
}

export default SearchLogo;
