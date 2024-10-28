// SingleProductDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CardMedia, Grid, IconButton, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from './CartContext'; // Ensure this path is correct
import { useAuth } from './AuthContext'; // Ensure this path is correct

const SingleProductDetail = () => {
    const { id } = useParams();
    const { cartItems } = useCart();
    const { isSignedIn, signIn, signOut } = useAuth(); // Use the useAuth hook
    const navigate = useNavigate();

    const product = cartItems.find(item => item.id === parseInt(id));

    if (!product) {
        return <Typography>No product selected.</Typography>;
    }

    const {
        images = [],
        price,
        title,
        description,
    } = product;

    const [selectedImage, setSelectedImage] = useState(images[0] || '');
    const [quantity, setQuantity] = useState(1);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleAddToCart = () => {
        // Add to cart logic here
    };

    const handleBuyNow = () => {
        navigate('/checkout', { state: { productId: id, quantity } });
    };

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Product Image */}
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={selectedImage}
                        alt={product.title}
                        sx={{ maxHeight: 500, width: '100%', objectFit: 'cover' }}
                    />
                </Grid>

                {/* Product Details */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                        {product.description}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#F7444E', mb: 3 }}>
                        ${price.toFixed(2)}
                    </Typography>

                    {/* Quantity Selector */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Typography variant="body1" sx={{ mr: 2 }}>
                            Quantity:
                        </Typography>
                        <IconButton onClick={decrementQuantity} disabled={quantity <= 1}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="body1" sx={{ mx: 2 }}>
                            {quantity}
                        </Typography>
                        <IconButton onClick={incrementQuantity}>
                            <AddIcon />
                        </IconButton>
                    </Box>

                    {/* Buttons */}
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ backgroundColor: 'black', color: 'white', flex: 1 }}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#F7444E', color: 'white', flex: 1 }}
                            onClick={handleBuyNow}
                        >
                            Buy Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SingleProductDetail;
