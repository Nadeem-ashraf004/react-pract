// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/Signup';
import UserDataTable from './components/UserDataTable';
import MultiStepForm from './components/MultiStepForm';
import CustomerDetailForm from './components/CustomerDetailForm';
import ProductDetailForm from './components/ProductDetailForm';
import PurchaseDetailForm from './components/PurchaseDetailForm';
import ProductList from './components/ProductList'; // Importing ProductList
import ProductDetail from './components/ProductDetail'; // Importing ProductDetail

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} /> {/* Home Page: Product List */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Product Detail Page */}
        <Route path="/multi-step-form" element={<MultiStepForm />} />
        <Route path="/user-data-table" element={<UserDataTable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/CustomerDetailForm" element={<CustomerDetailForm />} />
        <Route path="/ProductDetailForm" element={<ProductDetailForm />} />
        <Route path="/PurchaseDetailForm" element={<PurchaseDetailForm />} />
        {/* Fallback Route */}
        <Route path="*" element={<ProductList />} /> {/* Redirect to Home Page */}
      </Routes>
    </Router>
  );
};

export default App;
