// @ts-nocheck

import { Box, Container, Grid, Typography } from '@mui/material'
import axios from 'axios';
import React, { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Book:FC = () => {
    const params = useParams();
    const prodId = params.id;

const [book, setBook] = useState({});

useEffect(() => {
    axios({
        method: 'get',
        url: process.env.REACT_APP_SOURCE+"/"+prodId,
        responseType: 'stream'
      })
        .then(function (response) {
            
            setBook(JSON.parse(response.data))
        });
}, [])


  return (
    <Box>
        <Container sx={{marginBottom: 20}}>
        {book && (
  <Grid container spacing={2}>
  <Grid item  md={6} sx={{
    backgroundColor: '#ebebeb'
  }}>
  <Box
  component="img"
  sx={{
    height: 433,
    width: 350,
    margin: '0 auto'
  }}
  alt="The house from the offer."
  src={book.volumeInfo?.imageLinks && book.volumeInfo.imageLinks.smallThumbnail}
/>
  </Grid>

  <Grid item  md={6} sx={{
    textAlign: 'left'
  }}>
      <Box>
      <Typography gutterBottom variant="b" component="div" sx={{fontSize: 11, color: '#aaaaaa'}}>
      {book.volumeInfo?.categories}
          </Typography>  
       
      </Box>

      <Box>
      <Typography gutterBottom variant="b" component="h1" >
      {book.volumeInfo?.title}
          </Typography>  
       
      </Box>

          <Box sx={{
          display: "flex",
          justifyContent: "space-between",
        
        }}>
       {book.volumeInfo?.authors && (book.volumeInfo.authors.map((item1) => {
        return (
          <Typography gutterBottom variant="b" component="div" sx={{fontSize: 11, color: '#818180', textDecoration: 'underline'}}>
          {item1}
        </Typography>  
        )
       }))}
      </Box>

      <Box sx={{border: '1px solid', padding: 2,   marginTop: 2}}>
      <Typography gutterBottom variant="b" component="div" sx={{fontSize: 13, textDecoration: 'underline'}}>
      <div dangerouslySetInnerHTML={{__html:  book.volumeInfo?.description}}></div>
      
          </Typography>  
      </Box>
      </Grid>
</Grid>
        )}
      
      </Container>
    </Box>
  )
}

export default Book
