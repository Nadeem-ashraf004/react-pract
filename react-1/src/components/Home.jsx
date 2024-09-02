// src/pages/Home.jsx
import React, { useState } from 'react';
import { Container, Box, Typography, Button, Pagination } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProductsDetail from './ProductsDetail'; // Import the ProductsDetail component

const items = [
  {
    headline: 'Sale 20% Off On Everything',
    description: 'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.',
    buttonText: 'Shop Now'
  },
  {
    headline: 'Sale 20% Off On Everything',
    description: 'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.',
    buttonText: 'Shop Now'
  },
  {
    headline: 'Sale 20% Off On Everything',
    description: 'Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.',
    buttonText: 'Shop Now'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container sx={{ width: '100%', padding: 0 }}>
      <Box
        sx={{
          position: 'relative',
          height: '580px',
          backgroundImage: 'url(/slider-bg.jpg)', // Path to your image in the public directory
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          color: 'white',
          textAlign: 'left',
          paddingLeft: '5%',
          overflow: 'hidden',
        }}
      >
        <Carousel
          autoPlay
          indicators={false}
          navButtonsAlwaysInvisible={true}
          onChange={(index) => setActiveIndex(index)}
          sx={{ width: '100%', maxWidth: '600px' }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '100%',
                position: 'relative',
                opacity: activeIndex === index ? 1 : 0,
                transform: `translateX(${activeIndex === index ? '0%' : '100%'})`,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
              }}
            >
              <Typography
                sx={{
                  color: 'red',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '60px',
                  transform: `translateX(${activeIndex === index ? '0%' : '100%'})`,
                  transition: 'transform 1s ease-in-out',
                }}
              >
                {item.headline.split(' ')[0]}{' '}
                <span style={{ color: 'black' }}>{item.headline.split(' ').slice(1).join(' ')}</span>
              </Typography>
              <Typography
                sx={{
                  color: 'black',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  mb: 3,
                  transform: `translateX(${activeIndex === index ? '0%' : '100%'})`,
                  transition: 'transform 1s ease-in-out',
                }}
              >
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  '&:hover': { transform: 'scale(1.03)', backgroundColor: 'white', color: 'red' },
                  transform: `translateX(${activeIndex === index ? '0%' : '100%'})`,
                  transition: 'transform 1s ease-in-out',
                }}
                href="#shop-now"
              >
                {item.buttonText}
              </Button>
            </Box>
          ))}
        </Carousel>
        <Box sx={{ position: 'absolute', bottom: 20, left: '10%', transform: 'translateX(-50%)' }}>
          <Pagination
            count={items.length}
            page={activeIndex + 1}
            onChange={(event, value) => setActiveIndex(value - 1)}
            color="primary"
          />
        </Box>
      </Box>

      {/* Render the ProductsDetail component here */}
      <ProductsDetail />
    </Container>
  );
};

export default Home;
