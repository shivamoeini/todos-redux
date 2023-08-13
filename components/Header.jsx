import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {
  return (
    <AppBar position="relative">
    <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
        Todo List
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Header