import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import './TopBarStyle.css'



export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Add User</Button>
          <Button color="inherit">User List</Button>
        </Toolbar>
      </AppBar>
      <form className='form'>
      <Typography >Fill the Form for Sign Up</Typography>
      <TextField className='text-field' label="Name" margin='normal' type='text' variant="outlined" required />
      <TextField className='text-field' label="Email" margin='normal' type='email' variant="outlined" required />
      <TextField className='text-field' label="Mobile" margin='normal' type='text' variant="outlined" required />
      <TextField className='text-field' label="Age" margin='normal' type ='number' min='18' max='60' variant="outlined" required />

      <Button variant="contained">Submit</Button>

   
      </form>
    </Box>
  );
}
