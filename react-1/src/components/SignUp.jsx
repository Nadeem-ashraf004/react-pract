// src/components/SignUp.jsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const SignUp = () => {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                padding: '20px',
                textAlign: 'center',
            }}
        >
            <Typography variant="h4" color="red"sx={{ mb: 4 }}>
                Sign Up
            </Typography>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                onSubmit={(values) => {
                    console.log('Sign Up data:', values);
                }}
            >
                <Form>
                    <Box sx={{ mb: 3 }}>
                        <Field
                            name="firstName"
                            as={TextField}
                            label="First Name"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Field
                            name="lastName"
                            as={TextField}
                            label="Last Name"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Field
                            name="email"
                            type="email"
                            as={TextField}
                            label="Email"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Field
                            name="password"
                            type="password"
                            as={TextField}
                            label="Password"
                            fullWidth
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 3 }}>
                        <Field
                            name="confirmPassword"
                            type="password"
                            as={TextField}
                            label="Confirm Password"
                            fullWidth
                            required
                        />
                    </Box>
                    <Button variant="contained" sx={{
                        backgroundColor: '#F7444E',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'red'
                        }
                    }}>
                        Sign Up
                    </Button>
                </Form>
            </Formik>
        </Box>
    );
};

export default SignUp;
