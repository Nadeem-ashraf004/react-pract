import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem, Avatar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactsIcon from '@mui/icons-material/Contacts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../components/logo.png';
import { useModal } from './ModalContext'; // Import useModal from ModalContext
import { useAuth } from './AuthContext'; // Import useAuth from AuthContext

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setProfileEl] = useState(null);
  const navigate = useNavigate();
  const { openLoginModal, openSignUpModal } = useModal();
  const { user, login, logout } = useAuth();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = (event) => {
    setProfileEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileEl(null);
  };

  const handleLoginClick = () => {
    openLoginModal();
    handleProfileClose();
  };

  const handleSignUpClick = () => {
    openSignUpModal();
    handleProfileClose();
  };

  const handleLogout = () => {
    logout(); // Clear the user state
    handleProfileClose();
  };

  const handleNavigateToDashboard = () => {
    navigate('/user-dashboard'); // Navigate to the user dashboard
    handleProfileClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', width: '100%' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <img src={logo} alt="Store Logo" style={{ height: '50px', marginRight: 'auto' }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Button sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} component={Link} to="/home" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} onClick={handleMenuClick} endIcon={<ExpandMoreIcon />}>
            Pages
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem sx={{ fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
          </Menu>
          <Button sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} component={Link} to="/products" startIcon={<CategoryIcon />}>
            Products
          </Button>
          <Button sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} component={Link} to="/blogs" startIcon={<LibraryBooksIcon />}>
            Blog
          </Button>
          <Button sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: '#F7444E' } }} component={Link} to="/contacts" startIcon={<ContactsIcon />}>
            Contacts
          </Button>

          {/* Profile Section */}
          <IconButton onClick={handleProfileClick}>
            <Avatar />
          </IconButton>
          <Menu anchorEl={profileEl} open={Boolean(profileEl)} onClose={handleProfileClose}>
            {user ? (
              <>
                <MenuItem onClick={handleNavigateToDashboard}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleLoginClick}>Login</MenuItem>
                <MenuItem onClick={handleSignUpClick}>Sign Up</MenuItem>
              </>
            )}
          </Menu>
        </Box>
        <IconButton edge="end" sx={{ color: 'black', '&:hover': { color: '#F7444E' } }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton edge="end" sx={{ color: 'black', '&:hover': { color: '#F7444E' } }}>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
