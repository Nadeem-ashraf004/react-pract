import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Typography, Card, CardContent } from '@mui/material';
import Profile from './Profile';
import Orders from './Orders';
import Wishlist from './Wishlist';

const UserDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ width: '80%', margin: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Profile" />
        <Tab label="Orders" />
        <Tab label="Wishlist" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tabIndex === 0 && <Profile />}
        {tabIndex === 1 && <Orders />}
        {tabIndex === 2 && <Wishlist />}
      </Box>
    </Box>
  );
};

export default UserDashboard;
