import styled from "@emotion/styled";
import { Segment, ShoppingCart } from "@mui/icons-material";
import { AppBar,  Badge, Box,   IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../assets/1.png';
import {auth} from '../../firebase/config'



const MyLink = styled(Link)(({ theme }) => ({

  padding: '1rem 1rem',
  borderRadius: '5px',
  fontWeight: '600',
  fontSize: '1.5rem',
  color:'white',
  textDecoration: 'none',
  '&:hover': {
    color: 'red',
    backgroundColor: 'white',
  },
}));


const Header = () => {
  const [displayName , setDisplayName]=useState();
  //logOutUser
  const navigate=useNavigate();
  const logOutUser=()=>{
     signOut(auth).then(() => {
    toast.success('Successfully Logout....');
    navigate("/");
  })
  .catch((error) => {
    toast.error(error.message);
  })};

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user.displayName);
        setDisplayName(user.displayName);
      } else {
        setDisplayName('')
      }
    });
  },[])




  const itemCount = 3;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      </MenuItem>
       
    </Menu>
  );

  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'red'}}>
        <Toolbar display='flex' sx={{justifyContent:'space-between'}} >
       <Box>
        <Typography   component="div" sx={{ display: { xs: 'block', sm: 'block' } }} >
          <img src={logo} alt="" width='70px' />
          </Typography>
       </Box>
       
        

          <Box sx={{ display: { xs: 'none', md: 'flex' ,  } }}>

          <Typography variant="h6" component="div"> <MyLink to="/">Home</MyLink></Typography>
          <Typography variant="h6" component="div"> <MyLink to="/Contact" >Contact us </MyLink> </Typography> 
          <Typography variant="h6" component="div"> <MyLink to="/Login">Login</MyLink></Typography>
          <Typography variant="h6" component="div"> <MyLink to="/Register">Register</MyLink></Typography>
          <Typography variant="h6" component="div"> <MyLink to="/">My Order</MyLink></Typography>
          <Typography variant="h6" component="div"> <MyLink onClick={logOutUser}>Logout</MyLink></Typography>
          </Box>

          <Box display='flex' alignItems='center'>
          <MyLink href="/">   <IconButton   sx={{ color: 'white', '&:hover': { color: 'black', backgroundColor: 'transparent', },}}>
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCart style={{fontSize:'2.5rem'}} />
      </Badge>
    </IconButton></MyLink>
    <Typography color='white'  fontWeight='bold'>Hi,{displayName}</Typography>

          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Segment />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </>
  );
};

export default Header;
