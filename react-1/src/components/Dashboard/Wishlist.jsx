import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from 'axios';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Fetch user wishlist
    axios.get('/api/user/wishlist')
      .then((response) => setWishlist(response.data))
      .catch(console.error);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Wishlist</Typography>
        {wishlist.length > 0 ? (
          <Grid container spacing={2} sx={{ mt: 1 }}>
            {wishlist.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item._id}>
                <Card>
                  <CardContent>
                    <Typography>{item.productName}</Typography>
                    <Typography>Price: ${item.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No items in wishlist</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default Wishlist;
