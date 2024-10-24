import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Typography, TextField } from '@mui/material';

const Contact = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  const initialValues = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form submitted:', values);
    resetForm(); // Reset the form after submission
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
        color:'#F7444E'
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Contact Us
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ getFieldProps, touched, errors }) => (
          <Form>
            <Box sx={{ mb: 3 }}>
              <TextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                fullWidth
                error={touched.fullName && !!errors.fullName}
                helperText={<ErrorMessage name="fullName" />}
                {...getFieldProps('fullName')}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={touched.email && !!errors.email}
                helperText={<ErrorMessage name="email" />}
                {...getFieldProps('email')}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                name="subject"
                label="Subject"
                variant="outlined"
                fullWidth
                error={touched.subject && !!errors.subject}
                helperText={<ErrorMessage name="subject" />}
                {...getFieldProps('subject')}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                error={touched.message && !!errors.message}
                helperText={<ErrorMessage name="message" />}
                {...getFieldProps('message')}
              />
            </Box>

            <Button type="submit" variant="contained" sx={{
              backgroundColor: 'red',
              color: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: '#F7444E'
              }
            }}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Contact;
