import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div>
        <Nav />
        <Container>
          <Grid>
              <Grid item xs={12}>
                <Main />
                <Divider id="line"/>
              </Grid>
          </Grid>
        </Container>
        <About />
        <Project />
        <Footer />
    </div>
  );
}

export default App;