

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { AppBar,   Box,   Toolbar, Typography } from "@mui/material";
import React from "react";
import logo from '../../assets/1.png';

const Footer = () => {


  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'red',bottom:'0' }}>
        <Toolbar display='flex' sx={{justifyContent:'space-between', alignItems:'center',padding:'0!important '}} >
       <Box>
        <Typography   component="div" marginLeft='2rem'  >
          <img src={logo} alt="" width='50px' />
          </Typography>
       </Box>
       <Box>
        <Typography fontSize='1.3rem' color='white'>All right are reverved@ Qaisar</Typography>
       </Box>
       
        

          <Box marginRight='2rem' >
            <Facebook style={{fontSize:'2.5rem'}}/>
            <Instagram style={{fontSize:'2.5rem'}}/>
            <Twitter style={{fontSize:'2.5rem'}}/>
          </Box>


         
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};

export default Footer;
