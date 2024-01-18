// @ts-nocheck
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/Home/Home";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import Book from "./pages/Book/Book";
import { useDispatch, useSelector } from "react-redux";
import fetchOptions from "./redux/actions/books";
import SearchIcon from "@material-ui/icons/Search";

function App() {


  const { count } = useSelector(
    ({books }) => books
  );

  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('all');
  const [order, setOrder] = useState<string>('relevance');
  const [link, setLink] = useState<string>('');

  const dispatch = useDispatch();


  const sendSearch = async() => {
    if(search.length > 0) {
      let link_search = "?";

      if(search.length > 0) {
        link_search += "q="+search
  
       
      }
  
      if(category.length > 0 && category != 'all') {
        link_search += "+subject:"+category+"&"
      }
  
      if(order.length > 0) {
        link_search += "&orderBy="+order+"&"
      }
  
     
      setLink(link_search)
  
  
      dispatch(fetchOptions(link_search, count))
    } else {
      alert("Input values")
    }
    
    
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
                <SearchIcon onClick={() => sendSearch()} />
              </IconButton>
            ),
          }}
        />

    

        <Box className="header-inputs-block">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              Categories
              <select className="header-input-block" onChange={(e) => setCategory(e.target.value)}>
                <option value="all" selected="selected">all</option>
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
              <select className="header-input-block" onChange={(e) => setOrder(e.target.value)}>
                <option value="relevance" selected="selected">relevance</option>
                <option value="newest">newest</option>
              </select>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home link={link}/>} />
          <Route path="/book/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
