// src/components/SignUpModal.jsx
import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useModal } from './ModalContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignUpModal = () => {
  const { isSignUpOpen, closeSignUpModal } = useModal();
  const navigate = useNavigate(); // Initialize navigate function

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  });

  const handleSignUpSubmit = async (values, actions) => {
    const { firstName, lastName, email, password } = values; // Get form values

    try {
      const response = await axios.post('http://localhost:8000/api/user/register', {
        firstName,
        lastName,
        email,
        password
      });
      console.log('Signup successful:', response.data);
      alert('Signup successful!');
      closeSignUpModal();
      navigate('/LoginModal'); 
    } catch (error) {
      console.error('Signup error:', error);
      console.error('Detailed error response:', error.response?.data);
      alert(error.response?.data?.message || 'An error occurred during signup.');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Modal
      open={isSignUpOpen}
      onClose={closeSignUpModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-title" variant="h6" component="h2">
          Sign Up
        </Typography>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignUpSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="firstName"
                  as={TextField}
                  label="First Name"
                  fullWidth
                  required
                  error={errors.firstName && touched.firstName}
                  helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="lastName"
                  as={TextField}
                  label="Last Name"
                  fullWidth
                  required
                  error={errors.lastName && touched.lastName}
                  helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  label="Email"
                  fullWidth
                  required
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ''}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="Password"
                  fullWidth
                  required
                  error={errors.password && touched.password}
                  helperText={errors.password && touched.password ? errors.password : ''}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="confirmPassword"
                  type="password"
                  as={TextField}
                  label="Confirm Password"
                  fullWidth
                  required
                  error={errors.confirmPassword && touched.confirmPassword}
                  helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{ backgroundColor: '#F7444E', color: 'white', '&:hover': { backgroundColor: 'white', color: 'red' } }}
              >
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default SignUpModal;