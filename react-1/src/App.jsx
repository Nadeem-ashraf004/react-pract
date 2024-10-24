import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
// import Services from './components/Services'; // Import Services Component
import Blog from './components/Blog'; // Import Blog Component
import ProductsDetail from './components/ProductsDetail';
import Contacts from './components/Contacts'; 
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> Define Services Route */}
            <Route path="/blog" element={<Blog />} /> {/* Define Blog Route */}
            <Route path="/products" element={<ProductsDetail />} />
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <About/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
