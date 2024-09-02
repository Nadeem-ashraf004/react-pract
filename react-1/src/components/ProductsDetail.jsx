// src/pages/ProductsDetail.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';

const products = [
    { id: 1, image: '/p1.png', description: 'Product 1 description', price: '$10' },
    { id: 2, image: '/p2.png', description: 'Product 2 description', price: '$20' },
    { id: 3, image: '/p3.png', description: 'Product 3 description', price: '$30' },
    { id: 4, image: '/p4.png', description: 'Product 4 description', price: '$40' },
    { id: 5, image: '/p5.png', description: 'Product 5 description', price: '$50' },
    { id: 6, image: '/p6.png', description: 'Product 6 description', price: '$60' },
    { id: 7, image: '/p7.png', description: 'Product 7 description', price: '$70' },
    { id: 8, image: '/p8.png', description: 'Product 8 description', price: '$80' },
    { id: 9, image: '/p9.png', description: 'Product 9 description', price: '$90' },
    { id: 10, image: '/p10.png', description: 'Product 10 description', price: '$100' },
    { id: 11, image: '/p11.png', description: 'Product 11 description', price: '$110' },
    { id: 12, image: '/p1.png', description: 'Product 12 description', price: '$120' },
];

const ProductsDetail = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'red', height: '120px', display: 'flex', justifyContent: 'center' }}>
    <Toolbar sx={{ minHeight: '120px' }}>
        <Typography 
            variant="h6" 
            sx={{ 
                flexGrow: 1, 
                textAlign: 'center', 
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: '20px' 
            }}
        >
            All Product Detail
        </Typography>
    </Toolbar>
</AppBar>
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {products.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card 
                                sx={{ 
                                    height: '400px', 
                                    position: 'relative', 
                                    maxWidth: '100%', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        transition: 'transform 0.3s ease-in-out'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={`Product ${product.id}`}
                                    sx={{ height: '200px', objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                                        {product.price}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button 
                                            variant="contained" 
                                            sx={{ 
                                                backgroundColor: 'red', 
                                                color: 'white',
                                                '&:hover': { 
                                                    backgroundColor: 'black', 
                                                    color: 'white' 
                                                }
                                            }}
                                        >
                                            Buy Now
                                        </Button>
                                        <Button 
                                            variant="contained" 
                                            sx={{ 
                                                backgroundColor: 'red', 
                                                color: 'white',
                                                '&:hover': { 
                                                    backgroundColor: 'black', 
                                                    color: 'white'
                                                }
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            backgroundColor: 'red', 
                            color: 'white',
                            '&:hover': { 
                                backgroundColor: 'black', 
                                color: 'white'
                            }
                        }}
                    >
                        View All Products
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default ProductsDetail;
