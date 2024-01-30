// App.js
import React,{useEffect} from 'react';
import { Container, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import { StyledAppBar, StyledTypography, StyledImage } from './Styles'; // Adjust the import path as needed
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
         dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <StyledTypography variant="h2" align="center">
          Memories
        </StyledTypography>
        <StyledImage src={memories} alt="memories" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
