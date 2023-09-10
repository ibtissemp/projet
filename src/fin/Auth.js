import * as React from 'react';
import {Link} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

/*import Link from '@mui/material/Link';*/
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Auth() {
  const [uniter, setUniter]=useState('')
  const navivgate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navivgate('/'+uniter)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={1}
          sm={1}
          md={3}
          sx={{
            backgroundImage: 'url(src\fin\logo.jpg )',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              connecter
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="adress email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
              />
 <Grid item xs  sx={{ mt: 1 }}  margin="normal" required fullWidth    >
             <Form.Select aria-label="Default select example"  >
      <option></option>
      <option value="1">Uniter1</option>
      <option value="2">Uniter2</option>
      <option value="3">Uniter3</option>
      <option value="4">Uniter4</option>
      <option value="5">Uniter5</option>
      <option value="6">Tks</option>
      
      <option value="7">RejetHydrique</option>

    </Form.Select>
    </Grid>

 <Button   type="submit" fullWid variant="contained"  sx={{ mt: 3, mb: 2 }}  onSubmit={{handleSubmit}} > connecter </Button>

              
             
     



  
    
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
  <Link to ="/Inscrit" variant="body2">
          {"Inscrit "}
</Link>
      </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}









































/*import React from 'react'
import { Link } from 'react-router-dom'

export default function Auth ()  { 
  const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
    return (

      <div  className='Auth' >
auth



<nav>
<Link to="/ "> btn </Link>

</nav>
   
        </div>  
        
        



  
    )
    }*/






   