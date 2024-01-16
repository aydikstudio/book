import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchOutlined } from '@material-ui/icons';
import './App.scss';
import Home from './pages/Home/Home';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';

function App() {


  return (
    <Box className="App">
      <Box className="header">
      <Typography variant="h1" component="h1" >
        Search for books
</Typography>
   
<TextField
                className='header-input'
                id="standard-bare"
                variant="outlined"
                defaultValue="How can we help"
                sx={{
                  width: 500
                }}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />




      <Box className="header-inputs-block">
      <Grid container spacing={2}>
        <Grid item xs={6}>
    Categories
    <select name="pets" id="pet-select" className="header-input-block">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>

        </Grid>
        <Grid item xs={6}>
        Sorting By
        <select name="pets" id="pet-select" className="header-input-block">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="hamster">Hamster</option>
  <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option>
</select>
        </Grid>
    
      </Grid>
      </Box>
   
      </Box>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> 
    </Box>
  );
}

export default App;
