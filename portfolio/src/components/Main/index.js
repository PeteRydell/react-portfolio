import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

require('./style.css');

export default function() {
    
return (
    <Container id="navbar">
      <Grid>
            <Grid item xs={12}>
                <div>
                    <h1 className="maintext">Freelance Web Designer & Developer based in Los Angeles California.</h1>
                </div>
            </Grid>
      </Grid>
    </Container>
);
}