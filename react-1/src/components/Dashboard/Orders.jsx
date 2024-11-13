import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState({ pending: [], delivered: [] });

  useEffect(() => {
    // Fetch user orders
    axios.get('/api/user/orders')
      .then((response) => {
        const pendingOrders = response.data.filter(order => order.status === 'Pending');
        const deliveredOrders = response.data.filter(order => order.status === 'Delivered');
        setOrders({ pending: pendingOrders, delivered: deliveredOrders });
      })
      .catch(console.error);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Order History</Typography>
        
        <Typography variant="h6" sx={{ mt: 2 }}>Pending Orders</Typography>
        {orders.pending.length > 0 ? orders.pending.map((order) => (
          <Box key={order._id} sx={{ mt: 1 }}>
            <Typography>Order ID: {order._id}</Typography>
            <Typography>Total: ${order.orderTotal}</Typography>
            <Divider sx={{ my: 1 }} />
          </Box>
        )) : <Typography>No pending orders</Typography>}

        <Typography variant="h6" sx={{ mt: 2 }}>Delivered Orders</Typography>
        {orders.delivered.length > 0 ? orders.delivered.map((order) => (
          <Box key={order._id} sx={{ mt: 1 }}>
            <Typography>Order ID: {order._id}</Typography>
            <Typography>Total: ${order.orderTotal}</Typography>
            <Typography>Delivered on: {new Date(order.deliveryDate).toLocaleDateString()}</Typography>
            <Divider sx={{ my: 1 }} />
          </Box>
        )) : <Typography>No delivered orders</Typography>}
      </CardContent>
    </Card>
  );
};

export default Orders;
