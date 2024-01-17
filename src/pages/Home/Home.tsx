// @ts-nocheck
import { FC } from "react";
import { Pokedex } from "../../interfaces/books";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home: FC<Pokedex[]> = (items) => {
  let books = items.items.books;

  return (
    <Box>
      <Box >Кол-во: {books.length}</Box>
      {books.length > 0 && (
   <Box>
   <Container className="mt-20">

   <Grid container spacing={2}>
    {books.map((item) => {
     console.log(item)
        return (
         
             <Grid item  md={4}>
               <Link to={`/book/${item.id}`}>
            <Card  sx={{
              backgroundColor: '#ebebeb',
              padding: 2,
              height: 500,
              textAlign: 'left'
            }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={item.volumeInfo.imageLinks?.smallThumbnail != undefined && item.volumeInfo.imageLinks.smallThumbnail}
        sx={{
          width: 200,
          height: 300,
          margin: '0 auto'
        }}
      />
      <CardContent>
       
        <Box sx={{
          display: 'flex',
          justifyСontent: 'space-between'
        }}>
           {item.volumeInfo.categories != undefined && 
            <Typography gutterBottom variant="b" component="div" sx={{fontSize: 15, textDecoration: 'underline'}}>
            {item.volumeInfo.categories[0]}
          </Typography>  
       }
      
        </Box>

        <Box>
        <Typography gutterBottom  component="h3">
            {item.volumeInfo.title}
          </Typography>  
        </Box>

    
    
     

        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
       {item.volumeInfo.authors && (item.volumeInfo.authors.map((item1) => {
        return (
          <Typography gutterBottom variant="b" component="div" sx={{fontSize: 13, color: '#818180'}}>
          {item1}
        </Typography>  
        )
       }))}
      </Box>
      </CardContent>
     
     </Card>
     </Link>
            </Grid>
       
        )
    })}

   </Grid>
   <Button variant="text" className="mt-20">load more</Button>
   </Container>
 </Box>
      )}
   
    </Box>
  );
};

export default Home;
