// @ts-nocheck
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchOutlined } from "@material-ui/icons";
import "./App.scss";
import Home from "./pages/Home/Home";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import axios from 'axios';
import { Pokedex } from "./interfaces/books";

function App() {

  const [books, setBooks] = useState<Pokedex[]>([])
  const [search, setSearch] = useState<string>('')

  const sendSearch = async() => {
    await axios({
      method: 'get',
      url: process.env.REACT_APP_SOURCE+"?q="+search,
      responseType: 'stream'
    })
      .then(function (response) {
        let book = JSON.parse(response.data);
        setBooks(book.items)
      });
  }



  return (
    <Box className="App">
      <Box className="header">
        <Typography variant="h1" component="h1">
          Search for books
        </Typography>

        <TextField
          className="header-input"
          id="standard-bare"
          variant="outlined"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: 500,
          }}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlined onClick={() => sendSearch()} />
              </IconButton>
            ),
          }}
        />

        <Box className="header-inputs-block">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Categories
              <select className="header-input-block">
                <option value="all">all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
              </select>
            </Grid>
            <Grid item xs={6}>
              Sorting By
              <select className="header-input-block">
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
              </select>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home items={{books}} />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
