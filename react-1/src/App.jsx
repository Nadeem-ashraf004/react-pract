import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import ProductsDetail from './components/ProductsDetail';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import AuthProvider from './components/AuthContext';
import { ModalProvider, useModal } from './components/ModalContext';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import SingleProductDetail from './components/SingleProductDetail';
import CartProvider from './components/CartContext';

// Import the Dashboard and its sub-components
import UserDashboard from './components/Dashboard/UserDashboard';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Navbar />
              <div style={{ flex: 1 }}>
                <MainContent />
              </div>
              <Footer />
            </div>
          </Router>
        </ModalProvider>
      </CartProvider>
    </AuthProvider>
  );
};

// Main content component for managing modal states and route content
const MainContent = () => {
  const { isLoginOpen, closeLoginModal, isSignUpOpen, closeSignUpModal, openLoginModal } = useModal();

  return (
    <>
      {/* Modals for login and sign-up */}
      <LoginModal open={isLoginOpen} onClose={closeLoginModal} />
      <SignUpModal open={isSignUpOpen} onClose={() => {
          closeSignUpModal();
          openLoginModal(); // Open login modal after successful signup
        }} 
      />

      {/* Define main app routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<ProductsDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product/:productId" element={<SingleProductDetail />} />
        {/* <Route path ="" */}
        {/* Dashboard Route with nested routes for Profile, Order, and Wishlist */}
        <Route path="UserDashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
};

export default App;
