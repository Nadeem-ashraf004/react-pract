import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile details
    axios.get('/api/user/profile').then((response) => setUser(response.data)).catch(console.error);
  }, []);

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Profile Details</Typography>
        <Typography>Name: {user.firstName} {user.lastName}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Joined: {new Date(user.createdAt).toLocaleDateString()}</Typography>
        {/* Add more user details as necessary */}
      </CardContent>
    </Card>
  );
};

export default Profile;
