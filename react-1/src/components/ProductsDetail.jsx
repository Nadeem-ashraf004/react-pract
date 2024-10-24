import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';

const products = [
    { id: 1, image: '/p1.png', description: 'Product 1 description', price: '$10', gender: 'male' },
    { id: 2, image: '/p2.png', description: 'Product 2 description', price: '$20', gender: 'male' },
    { id: 3, image: '/p3.png', description: 'Product 3 description', price: '$30', gender: 'male' },
    { id: 4, image: '/p4.png', description: 'Product 4 description', price: '$40', gender: 'male' },
    { id: 5, image: '/p5.png', description: 'Product 5 description', price: '$50', gender: 'female' },
    { id: 6, image: '/p6.png', description: 'Product 6 description', price: '$60', gender: 'female' },
    { id: 7, image: '/p7.png', description: 'Product 7 description', price: '$70', gender: 'female' },
    { id: 8, image: '/p8.png', description: 'Product 8 description', price: '$80', gender: 'female' },
    { id: 9, image: '/p9.png', description: 'Product 9 description', price: '$90', gender: 'female' },
    { id: 10, image: '/p10.png', description: 'Product 10 description', price: '$100', gender: 'male' },
    { id: 11, image: '/p11.png', description: 'Product 11 description', price: '$110', gender: 'male' },
    { id: 12, image: '/p1.png', description: 'Product 12 description', price: '$120', gender: 'female' },
];

const ProductsDetail = () => {
    const maleProducts = products.filter(product => product.gender === 'male');
    const femaleProducts = products.filter(product => product.gender === 'female');

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#F7444E', height: '120px', display: 'flex', justifyContent: 'center' }}>
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
                <Grid container spacing={4}>
                    {/* Male Products Section (Left side) */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                            Male Section
                        </Typography>
                        <Grid container spacing={3}>
                            {maleProducts.map(product => (
                                <Grid item xs={12} sm={6} key={product.id}>
                                    <Card
                                        sx={{
                                            height: '400px',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            '&:hover .button-container': {
                                                bottom: '10px',
                                                opacity: 1,
                                            },
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
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                {product.description}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                                                {product.price}
                                            </Typography>
                                        </CardContent>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: '-40px',
                                                left: 0,
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                opacity: 0,
                                                transition: 'bottom 0.3s ease-in-out, opacity 0.3s ease-in-out',
                                            }}
                                            className="button-container"
                                        >
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        color: 'black'
                                                    }
                                                }}
                                            >
                                                Buy Now
                                            </Button>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#F7444E',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        color: '#F7444E'
                                                    }
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Female Products Section (Right side) */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                            Female Section
                        </Typography>
                        <Grid container spacing={3}>
                            {femaleProducts.map(product => (
                                <Grid item xs={12} sm={6} key={product.id}>
                                    <Card
                                        sx={{
                                            height: '400px',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            '&:hover .button-container': {
                                                bottom: '10px',
                                                opacity: 1,
                                            },
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
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                {product.description}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                                                {product.price}
                                            </Typography>
                                        </CardContent>
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: '-40px',
                                                left: 0,
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                opacity: 0,
                                                transition: 'bottom 0.3s ease-in-out, opacity 0.3s ease-in-out',
                                            }}
                                            className="button-container"
                                        >
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        color: 'black'
                                                    }
                                                }}
                                            >
                                                Buy Now
                                            </Button>
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#F7444E',
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: 'white',
                                                        color: '#F7444E'
                                                    }
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                {/* View More Button */}
                <Box sx={{ textAlign: 'center', mt: 5}}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#F7444E',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                                color: '#F7444E'
                            }
                        }}
                    >
                        View More
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default ProductsDetail;
