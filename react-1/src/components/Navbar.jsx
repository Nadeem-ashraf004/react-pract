// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, Menu, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import CategoryIcon from '@mui/icons-material/Category';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactsIcon from '@mui/icons-material/Contacts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import logo from '../components/logo.png';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', width: '100%' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <img src={logo} alt="Store Logo" style={{ height: '50px', marginRight: 'auto' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <Button 
                        sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'red' } }} 
                        component={Link} 
                        to="/home" 
                        startIcon={<HomeIcon />}
                    >
                        Home
                    </Button>
                    <Button 
                        sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'red' } }}
                        onClick={handleMenuClick}
                        endIcon={<ExpandMoreIcon />}
                    >
                        Pages
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem 
                            sx={{ fontWeight: 'bold', '&:hover': { color: 'red' } }} 
                            component={Link} 
                            to="/about"
                            onClick={handleMenuClose}
                        >
                            About
                        </MenuItem>
                    </Menu>
                    <Button 
                        sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'red' } }} 
                        component={Link} 
                        to="/products" 
                        startIcon={<CategoryIcon />}
                    >
                        Products
                    </Button>
                    <Button 
                        sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'red' } }} 
                        component={Link} 
                        to="/blogs" 
                        startIcon={<LibraryBooksIcon />}
                    >
                        Blogs
                    </Button>
                    <Button 
                        sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'red' } }} 
                        component={Link} 
                        to="/contacts" 
                        startIcon={<ContactsIcon />}
                    >
                        Contacts
                    </Button>
                </Box>
                <IconButton edge="end" sx={{ color: 'black', '&:hover': { color: 'red' } }}>
                    <ShoppingCartIcon />
                </IconButton>
                <IconButton edge="end" sx={{ color: 'black', '&:hover': { color: 'red' } }}>
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
