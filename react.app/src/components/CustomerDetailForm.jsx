import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { TextField, Box } from '@mui/material';

const CustomerDetailsForm = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Field name="customerName" as={TextField} label="Customer Name" fullWidth />
    <ErrorMessage name="customerName" component="div" />

    <Field name="customerEmail" as={TextField} label="Customer Email" type="email" fullWidth />
    <ErrorMessage name="customerEmail" component="div" />

    <Field name="customerPhone" as={TextField} label="Customer Phone" type="tel" fullWidth />
    <ErrorMessage name="customerPhone" component="div" />

    <Field name="customerAddress" as={TextField} label="Customer Address" fullWidth />
    <ErrorMessage name="customerAddress" component="div" />

    <Field name="customerCity" as={TextField} label="Customer City" fullWidth />
    <ErrorMessage name="customerCity" component="div" />

    <Field name="customerZip" as={TextField} label="Customer ZIP Code" fullWidth />
    <ErrorMessage name="customerZip" component="div" />
  </Box>
);

export default CustomerDetailsForm;
