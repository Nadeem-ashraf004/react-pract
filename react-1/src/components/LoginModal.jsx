import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs, TextField, Button, IconButton, InputAdornment, Modal } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useModal } from './ModalContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LoginComponent = () => {
    const { isLoginOpen, closeLoginModal, openSignUpModal } = useModal();
    const [tab, setTab] = React.useState(0);
    const [showPassword, setShowPassword] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignUpClick = () => {
        closeLoginModal();
        openSignUpModal();
    };

    // Define form validation schema using Yup
    const validationSchema = Yup.object({
        emailOrPhone: Yup.string()
            .required('Please enter your phone number or email')
            .test(
                'phoneOrEmail',
                'Please enter a valid phone number or email',
                value => /(^\d{10}$)|(^\S+@\S+\.\S+$)/.test(value)
            ),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Please enter your password'),
    });

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            emailOrPhone: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async values => {
            setErrorMessage(''); // Clear previous error message
            try {
                const response = await axios.post('http://localhost:8000/api/user/login', values);

                if (response.data.success) {
                    console.log('Login successful:', response.data);
                    
                    // Close modal and navigate to the home page
                    closeLoginModal();
                    navigate('/home'); // Redirect to home page after successful login
                } else {
                    setErrorMessage(response.data.message || 'Login failed');
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    // User does not have an account
                    setErrorMessage('Please sign up first.');
                } else {
                    // Other error
                    setErrorMessage(error.response?.data?.message || 'Login error. Please try again.');
                }
            }
        },
    });

    return (
        <Modal open={isLoginOpen} onClose={closeLoginModal} aria-labelledby="login-modal">
            <Box
                sx={{
                    width: 400,
                    backgroundColor: 'white',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: 'center',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="Password" />
                    <Tab label="Phone Number" />
                </Tabs>
                <Box mt={2} component="form" onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        label="Please enter your Phone Number or Email"
                        variant="outlined"
                        sx={{ mb: 2 }}
                        name="emailOrPhone"
                        value={formik.values.emailOrPhone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)}
                        helperText={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
                    />
                    <TextField
                        fullWidth
                        label="Please enter your password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={togglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    {errorMessage && (
                        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                            {errorMessage}
                        </Typography>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="warning"
                        sx={{ backgroundColor: '#F7444E', color: 'white', '&:hover': { backgroundColor: 'white', color: 'red' } }}
                    >
                        LOG IN
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Don't have an account?{' '}
                        <Typography
                            component="span"
                            sx={{ color: 'primary.main', cursor: 'pointer', fontWeight: 'bold' }}
                            onClick={handleSignUpClick}
                        >
                            Sign up
                        </Typography>
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Or, log in with
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <IconButton>
                            <GoogleIcon sx={{ color: '#DB4437', fontSize: 30 }} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon sx={{ color: '#4267B2', fontSize: 30 }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default LoginComponent;
