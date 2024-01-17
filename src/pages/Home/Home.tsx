// @ts-nocheck
import { FC } from "react";
import { Pokedex } from "../../interfaces/books";
import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";

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
            <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        width='140'
        image={item.volumeInfo.imageLinks.smallThumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
     </Card>
            </Grid>
        )
    })}

   </Grid>
   </Container>
 </Box>
      )}
   
    </Box>
  );
};

export default Home;
