import React, { useState, useContext } from 'react';
import { Box, Typography, Button, IconButton, Rating, Avatar, ToggleButtonGroup, ToggleButton, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext'; // Adjust this import based on your project structure
import { useModal } from '../components/ModalContext';
import ProductsDetail from '../components/ProductsDetail'; // Make sure this import is correct
import SignUpModal from '../components/SignUpModal'; // Replace with LoginComponent if that's the login modal

const SingleProductComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const { isLoggedIn } = useContext(AuthContext); // Retrieve login status from AuthContext
  const { openLoginModal, isLoginOpen, closeLoginModal } = useModal(); // Use openLoginModal and closeLoginModal from ModalContext
  const navigate = useNavigate();

  // Function to handle quantity change
  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === 'increment') return prevQuantity + 1;
      return prevQuantity > 1 ? prevQuantity - 1 : 1;
    });
  };

  // Function to handle "Buy Now" click
  const handleBuyNow = () => {
    if (isLoggedIn) {
      navigate('/order-summary'); // Navigate to Order Summary if logged in
    } else {
      openLoginModal(); // Open Login modal if not logged in
    }
  };

  // Function to handle "Add to Cart" click
  const handleAddToCart = () => {
    if (isLoggedIn) {
      // Logic to add product to cart (assuming a function like addToCart exists)
      // addToCart({ product, quantity, size });
      navigate('/cart'); // Navigate to Cart if logged in
    } else {
      openLoginModal(); // Open Login modal if not logged in
    }
  };

  return (
    <Box display="flex" flexDirection="column" p={2} maxWidth="md" mx="auto">
      {/* Image Section */}
      <Box display="flex">
        <Box flex="1" pr={2}>
          <img src="main-image-url.jpg" alt="Product" style={{ width: '100%' }} />
          <Box display="flex" justifyContent="center" mt={1}>
            {['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg', 'thumb4.jpg'].map((thumb, index) => (
              <Avatar key={index} src={thumb} variant="square" sx={{ width: 56, height: 56, margin: '0 4px' }} />
            ))}
          </Box>
        </Box>

        {/* Product Info Section */}
        <Box flex="1">
          <Typography variant="h6">IELGY Women's All Match Loose Korean Style Thick Baseball Jacket</Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body2" ml={1}>53 Ratings | 33 Answered Questions</Typography>
          </Box>
          <Typography variant="h5" color="primary" mt={2}>Rs. 4,590</Typography>
          <Typography variant="body2" color="textSecondary" sx={{ textDecoration: 'line-through' }}>Rs. 4,596</Typography>
          <Typography variant="body2" mt={1}>Color Family: Coffee</Typography>

          {/* Selection Section */}
          <Box mt={2}>
            <Typography variant="body2">Size</Typography>
            <ToggleButtonGroup
              value={size}
              exclusive
              onChange={(e, newSize) => setSize(newSize)}
              sx={{ display: 'flex', gap: 1, mt: 1 }}
            >
              {['S', 'M', 'L'].map((sz) => (
                <ToggleButton key={sz} value={sz} disabled={size === sz}>
                  {sz}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>

            <Box display="flex" alignItems="center" mt={2}>
              <Typography variant="body2">Quantity</Typography>
              <IconButton onClick={() => handleQuantityChange('decrement')}>-</IconButton>
              <TextField
                value={quantity}
                variant="outlined"
                size="small"
                inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                sx={{ width: '40px', mx: 1 }}
              />
              <IconButton onClick={() => handleQuantityChange('increment')}>+</IconButton>
            </Box>
          </Box>

          {/* Action Section */}
          <Box display="flex" gap={2} mt={3}>
            <Button variant="contained" color="primary" onClick={handleBuyNow} sx={{ flex: 1 }}>
              Buy Now
            </Button>
            <Button variant="contained" color="warning" onClick={handleAddToCart} sx={{ flex: 1 }}>
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductComponent;
