import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Stepper, Step, StepLabel, Box, Snackbar, Alert } from '@mui/material';
import ProductDetailsForm from './ProductDetailForm';
import CustomerDetailsForm from './CustomerDetailForm';
import PurchaseDetailsForm from './PurchaseDetailForm';
import { red } from '@mui/material/colors';

const steps = ['Product Details', 'Customer Details', 'Purchase Details'];

const validationSchemas = [
  Yup.object({
    productName: Yup.string().required('Required'),
    productCategory: Yup.string().required('Required'),
    productDescription: Yup.string().required('Required'),
    productPrice: Yup.number().required('Required'),
    productSKU: Yup.string().required('Required'),
    productStock: Yup.number().required('Required'),
  }),
  Yup.object({
    customerName: Yup.string().required('Required'),
    customerEmail: Yup.string().email('Invalid email').required('Required'),
    customerPhone: Yup.string().required('Required'),
    customerAddress: Yup.string().required('Required'),
    customerCity: Yup.string().required('Required'),
    customerZip: Yup.string().required('Required'),
  }),
  Yup.object({
    paymentMethod: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    cardExpiry: Yup.string().required('Required'),
    cardCVV: Yup.string().required('Required'),
    billingAddress: Yup.string().required('Required'),
    billingZip: Yup.string().required('Required'),
  }),
];

const formInitialValues = {
  productName: '',
  productCategory: '',
  productDescription: '',
  productPrice: '',
  productSKU: '',
  productStock: '',
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  customerAddress: '',
  customerCity: '',
  customerZip: '',
  paymentMethod: '',
  cardNumber: '',
  cardExpiry: '',
  cardCVV: '',
  billingAddress: '',
  billingZip: '',
};

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleNext = (values) => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log('Form Submitted:', values);
      setOpenSnackbar(true); // Show the success Snackbar
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <ProductDetailsForm />;
      case 1:
        return <CustomerDetailsForm />;
      case 2:
        return <PurchaseDetailsForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={handleNext}
      >
        {({ values }) => (
          <Form>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={index}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            {getStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
              >
                Back
              </Button>
              <Button type="submit" variant="contained">
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {/* Snackbar for successful submission */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          You have successfully submitted the form!
        </Alert>
      </Snackbar>
    </>
  );
};

export default MultiStepForm;
