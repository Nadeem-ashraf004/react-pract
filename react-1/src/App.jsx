import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Services from './components/Services'; // Import Services Component
import Blog from './components/Blog'; // Import Blog Component
import ProductsDetail from './components/ProductsDetail';
import Contacts from './components/Contacts'; 
import Footer from './components/Footer';
import AuthProvider from './components/AuthContext';
import { ModalProvider, useModal } from './components/ModalContext'; // Correctly import ModalProvider and useModal
import LoginModal from './components/LoginModal'; // Import your LoginModal component
import SignUpModal from './components/SignUpModal'; // Import your SignUpModal component
import SingleProductDetail from './components/SingleProductDetail';
import CartProvider from './components/CartContext';
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

// Create a separate component for main content to use the modal state
const MainContent = () => {
  const { isLoginOpen, closeLoginModal, isSignUpOpen, closeSignUpModal } = useModal(); // Use the modal context

  return (
    <>
      <LoginModal open={isLoginOpen} onClose={closeLoginModal} /> {/* Pass open and onClose props */}
      <SignUpModal open={isSignUpOpen} onClose={closeSignUpModal} /> {/* Pass open and onClose props */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/services" element={<Services />} /> Define Services Route */}
        <Route path="/blog" element={<Blog />} /> {/* Define Blog Route */}
        <Route path="/products" element={<ProductsDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/product/:productId" element={<SingleProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
