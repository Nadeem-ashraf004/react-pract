// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.title}
            />
            <CardContent>
                <Typography variant="h4" component="div">
                    {product.title}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    ${product.price}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductDetail;
