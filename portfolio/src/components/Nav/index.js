import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Container } from '@material-ui/core';

require('./style.css');

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
  },
  Button: {
    marginRight: theme.spacing(2),
    align: 'right',
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    margin: `${theme.spacing(1)}px auto`,
    justifyContent: "flex-end"
  }

}));



export default function () {
  const classes = useStyles();
  const logo = require('./FontLogo.png');
  return (
    <Container id="navbar">
      <Grid>
          <AppBar id="appbar" position="static">
          <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Toolbar className={classes.toolbar}>
                <Button color="inherit">About</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Contact</Button>
              </Toolbar>
            </Grid>
          <Grid item xs={2}></Grid>
          </AppBar>
          <Box
            p={2}
            position="absolute"
            top={-8}
            left="5%"
          ><img id="logo" src={logo} alt="Logo" edge="start"/>
          </Box>
      </Grid>
    </Container>
  );
}
