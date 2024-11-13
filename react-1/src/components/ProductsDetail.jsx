import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
// import { AuthContext } from '../components/AuthContext'; // Corrected import for AuthContext
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from './AuthContext';


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
    const navigate = useNavigate();
    const maleProducts = products.filter(product => product.gender === 'male');
    const femaleProducts = products.filter(product => product.gender === 'female');

    const handleCardClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } }); // Fixed template string to use backticks
    };

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
                    {/* Male Products Section */}
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
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                transition: 'transform 0.3s ease-in-out'
                                            }
                                        }}
                                        onClick={() => handleCardClick(product.id)}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={`Product ${product.id}`} // Fixed alt prop to be a valid string
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
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Female Products Section */}
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
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                transition: 'transform 0.3s ease-in-out'
                                            }
                                        }}
                                        onClick={() => handleCardClick(product.id)}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={`Product ${product.id}`} // Fixed alt prop to be a valid string
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
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ProductsDetail;
