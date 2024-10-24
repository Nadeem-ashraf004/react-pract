// src/pages/About.jsx
import React from 'react';
import { Container, Box, Typography, Card, CardContent, AppBar, Toolbar } from '@mui/material';

const Blog = () => {
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
                        OUR BLOG
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '60px', mb: 4 }}>
                    Why Shop With Us
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 4 }}>
                    <Card sx={{ width: '30%', height: '200px', backgroundColor: '#C1E1C1' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Fast Delivery
                            </Typography>
                            <Typography>
                                Variations of passages of Lorem Ipsum available.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '30%', height: '200px', backgroundColor: '#C1E1C1' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Free Shipping
                            </Typography>
                            <Typography>
                                Variations of passages of Lorem Ipsum available.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '30%', height: '200px', backgroundColor: '#C1E1C1' }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                Best Quality
                            </Typography>
                            <Typography>
                                Variations of passages of Lorem Ipsum available.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{
                    mt: 4, // Adds space between the cards and the image
                    width: '100%',  // Full width
                    overflow: 'hidden',
                }}>
                    <img src="/arrival-bg.png" alt="Arrival" style={{ width: '90%', height: '100%' }} />
                </Box>
            </Container>
        </>
    );
};

export default Blog;
