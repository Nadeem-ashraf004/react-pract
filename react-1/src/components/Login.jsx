// // LoginComponent.js
// import React from 'react';
// import { Box, Typography, Tab, Tabs, TextField, Button, IconButton, InputAdornment, Modal } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { useNavigate } from 'react-router-dom';
// import { useModal } from './ModalContext';

// const LoginComponent = () => {
//     const { isLoginOpen, closeLoginModal } = useModal();
//     const [tab, setTab] = React.useState(0);
//     const [showPassword, setShowPassword] = React.useState(false);
//     const navigate = useNavigate();

//     const handleTabChange = (event, newValue) => {
//         setTab(newValue);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleSignUpClick = () => {
//         closeLoginModal(); // Close the login modal
//         navigate('/signup'); // Navigate to the sign-up page
//     };

//     return (
//         <Modal open={isLoginOpen} onClose={closeLoginModal} aria-labelledby="login-modal">
//             <Box
//                 sx={{
//                     width: 400,
//                     backgroundColor: 'white',
//                     p: 4,
//                     borderRadius: 2,
//                     boxShadow: 3,
//                     textAlign: 'center',
//                     position: 'absolute',
//                     top: '50%',
//                     left: '50%',
//                     transform: 'translate(-50%, -50%)'
//                 }}
//             >
//                 <Tabs
//                     value={tab}
//                     onChange={handleTabChange}
//                     variant="fullWidth"
//                     textColor="primary"
//                     indicatorColor="primary"
//                 >
//                     <Tab label="Password" />
//                     <Tab label="Phone Number" />
//                 </Tabs>
//                 <Box mt={2}>
//                     <TextField
//                         fullWidth
//                         label="Please enter your Phone Number or Email"
//                         variant="outlined"
//                         sx={{ mb: 2 }}
//                     />
//                     <TextField
//                         fullWidth
//                         label="Please enter your password"
//                         variant="outlined"
//                         type={showPassword ? 'text' : 'password'}
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment position="end">
//                                     <IconButton onClick={togglePasswordVisibility}>
//                                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                                     </IconButton>
//                                 </InputAdornment>
//                             )
//                         }}
//                     />
//                     <Typography
//                         variant="body2"
//                         sx={{ mt: 1, textAlign: 'right', cursor: 'pointer', color: 'primary.main' }}
//                     >
//                         Forgot password?
//                     </Typography>
//                     <Button
//                         fullWidth
//                         variant="contained"
//                         color="warning"
//                         sx={{ mt: 2, py: 1.5, fontWeight: 'bold' }}
//                     >
//                         LOG IN
//                     </Button>
//                     <Typography variant="body2" sx={{ mt: 2 }}>
//                         Don't have an account?{' '}
//                         <Typography
//                             component="span"
//                             sx={{ color: 'primary.main', cursor: 'pointer', fontWeight: 'bold' }}
//                             onClick={handleSignUpClick}
//                         >
//                             Sign up
//                         </Typography>
//                     </Typography>
//                     <Typography variant="body2" sx={{ mt: 2 }}>
//                         Or, log in with
//                     </Typography>
//                     <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
//                         <IconButton>
//                             <GoogleIcon sx={{ color: '#DB4437', fontSize: 30 }} />
//                         </IconButton>
//                         <IconButton>
//                             <FacebookIcon sx={{ color: '#4267B2', fontSize: 30 }} />
//                         </IconButton>
//                     </Box>
//                 </Box>
//             </Box>
//         </Modal>
//     );
// };

// export default LoginComponent;
