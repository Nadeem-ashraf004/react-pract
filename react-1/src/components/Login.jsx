// src/components/Login.jsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';

const Login = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        color:'#F7444E'
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Login
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log('Login data:', values);
        }}
      >
        <Form>
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
          <Button  variant="contained" sx={{
                        backgroundColor: '#F7444E',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'red'}}} >
            Login
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;
