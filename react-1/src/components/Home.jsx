import React, { useContext, useState } from 'react';
import { Container, Box, Typography, Button, Pagination } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ProductsDetail from './ProductsDetail'; 
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../components/ModalContext'; // Import ModalContext for login modal control
import SignUpModal from '../components/SignUpModal';

const items = [
  // Your carousel items here
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
  const { isSignedIn } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();
  const { isLoginOpen, openLoginModal, closeLoginModal } = useModal(); // Use modal context for login modal
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShopNowClick = () => {
    if (isSignedIn) {
      navigate('/products');
    } else {
      openLoginModal(); // Open the login modal if not signed in
    }
  };

  return (
    <Container sx={{ width: '100%', padding: 0 }}>
      <Box
        sx={{
          position: 'relative',
          height: '580px',
          backgroundImage: 'url(/slider-bg.jpg)',
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
          navButtonsAlwaysInvisible
          onChange={(index) => setActiveIndex(index)}
          sx={{ width: '100%', maxWidth: '600px' }}
        >
          {items.map((item, index) => (
            <Box key={index} sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              height: '100%',
              position: 'relative',
              opacity: activeIndex === index ? 1 : 0,
              transform: `translateX(${activeIndex === index ? '0%' : '100%'})`,
              transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
            }}>
              <Typography sx={{
                color: 'red',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: '60px',
              }}>
                {item.headline.split(' ')[0]}{' '}
                <span style={{ color: 'black' }}>{item.headline.split(' ').slice(1).join(' ')}</span>
              </Typography>
              <Typography sx={{
                color: 'black',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: '18px',
                mb: 3,
              }}>
                {item.description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F7444E',
                  '&:hover': { transform: 'scale(1.03)', backgroundColor: 'white', color: 'red' },
                }}
                onClick={handleShopNowClick}
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

      {/* Login Modal */}
      <SignUpModal open={isLoginOpen} onClose={closeLoginModal} /> {/* Centered login modal */}
    </Container>
  );
};

export default Home;
