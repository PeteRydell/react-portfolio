import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

require('./style.css');

      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(40),
          height: theme.spacing(40),
        },
      }));
      
      export default function RecipeReviewCard() {
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);
        const image = require('./BeachRound.png');
      
        return (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Container id="about">
                <Card id="aboutcard">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h1 className="text">A Bit About Me</h1>
                        <p className="text">
                        Hi! My name is Peter Rydell and I'm a freelance coder living in Los Angeles, CA.
                        <br></br>
                        <br></br>
                        I've spent most of my career as a PR and Communications consultant specializing in consumer technology and sports, and in 2019 I took my passion for coding into the classroom at UCLA. 
                        </p>
                        <Box id="morediv">
                            <Fab variant="extended" id="more">
                                <AddIcon className={classes.extendedIcon} />
                                A Bit More About Me
                            </Fab>
                        </Box>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <div className={classes.root}>
                            <Avatar alt="Pete Rydell" src={image} className={classes.large} />
                        </div>
                    </Grid>
                </Grid>
                </Card>
            </Container>
            </Slide>
        );
      }

