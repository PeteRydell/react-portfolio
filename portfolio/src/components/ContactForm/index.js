import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Link, navigate } from '@reach/router';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';

require('./style.css');

const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
    },
  }));

export default function MultilineTextFields() {
    const classes = useStyles();
  
    // When user clicks 'next', project name and description post to the db
    const handleSubmit = event => {
      event.preventDefault();


    }

  return (
    <div>
    <Container id="heading" maxWidth="sm">
        <div>
        <h1>Contact</h1>
        </div>
        <Card id="contactcard">
            <Container>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container spacing={3}>

                    <h2>Email Address</h2>

                    <Grid item xs={12}>
                        <Grid item xs={12}>
                        <TextField
                        name="projectName"
                        id="filled-textarea"
                        placeholder="Enter Email"
                        fullWidth
                        />
                        </Grid>
                    </Grid>

                    <h2>Note</h2>

                    <Grid item xs={12}>
                        <Grid item xs={12}>
                        <TextField
                        name="projectDescription"
                        multiline
                        rows="6"
                        placeholder="Enter Note"
                        id="filled-multiline-textarea"                            justify="flex-start"
                        fullWidth
                        />
                        </Grid>
                    </Grid>
                    <Grid container id="submitbuttonarea">
                        <Grid item xs={12} onClick={handleSubmit}>
                            <Box>
                                <Fab variant="extended" id="submitbtn">
                                        Submit
                                </Fab>
                            </Box>
                        </Grid>
                    </Grid>
                    </Grid>
                </form>
            </Container>
        </Card>
    </Container>
    
    </div>
  );

}