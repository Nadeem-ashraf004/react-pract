import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <Container sx={{ textAlign: 'center', paddingTop: '50px' }}>
                <Typography variant="body1" color="textSecondary">
                    There are no items in this cart
                </Typography>
                <Button
                    variant="outlined"
                    color="warning"
                    onClick={() => navigate('/products')}
                >
                    CONTINUE SHOPPING
                </Button>
            </Container>
        );
    }

    return (
        <Container>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Your Cart
                </Typography>
                {cartItems.map((item, index) => (
                    <Box key={index} sx={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                        <Typography>{item.name}</Typography>
                        <Typography>Price: ${item.price}</Typography>
                    </Box>
                ))}
                <Button variant="contained" color="secondary" onClick={clearCart}>
                    Clear Cart
                </Button>
            </Box>
        </Container>
    );
};

export default Cart;
