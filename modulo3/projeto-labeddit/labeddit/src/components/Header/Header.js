import React from 'react';
import AppBar from '@mui/material/AppBar';
import {StyledToolbar} from "./styled"
import Button from '@mui/material/Button';
import { goToPostsListPage, goToLoginPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (    
      <AppBar position="static">
        <StyledToolbar>          
          <Button onClick={() => goToPostsListPage(navigate)} color="inherit">LABEDDIT</Button>          
          <Button onClick={() => goToLoginPage(navigate)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    
  );
}

export default Header