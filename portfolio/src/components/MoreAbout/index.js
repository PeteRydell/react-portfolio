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
        // const image = require('./BeachRound.png');
      
        return (
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
            <Container id="about">
                <Card id="aboutcard">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1 className="text">A Bit About Me</h1>
                        <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sapien est, consectetur non tellus eu, pretium tincidunt purus. Mauris convallis metus ut risus euismod, eu consectetur magna ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur venenatis nisl in tempus. Mauris rhoncus viverra ante quis ultricies. Vestibulum quis maximus diam. Cras gravida ultrices tellus, in blandit sem vulputate in. Duis suscipit urna viverra, pulvinar elit et, placerat velit.
                        </p>
                        <Box id="morediv">
                            <Fab variant="extended" id="more">
                                <AddIcon className={classes.extendedIcon} />
                                A Bit More About Me
                            </Fab>
                        </Box>
                    </Grid>
                </Grid>
                </Card>
            </Container>
            </Slide>
        );
      }
