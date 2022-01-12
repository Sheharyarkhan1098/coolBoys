import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
    maxHeight: "90%",
  },
  h3: {
    marginBottom: 20,
    fontWeight: 'Bolder'
  },
  body2: {
    marginBottom: 10,
  },
  subtitle1:{
    fontWeight: 'bold'
  }
}));

const height = 500;

function TopSection() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl"  style={{padding: 0, backgroundColor: '#D4C1EC' }}>
        
          <Grid container style={{height: height}}>
            <Grid item md={6} style={{justifyContent: 'center', alignItems: 'center', display: 'flex', height: height}}>
              <Typography component="div" style={{width: 500, padding: 50 }}>
                <Typography variant="h3" className={classes.h3}>
                Cool Boys Exclusive Club
                </Typography>
                <Typography variant="body2" className={classes.body2}>
                  A collection of 10,000 randomly generated metaverse friendly Cool Boys that grant you access to exclusive events such as yacht and mansion parties in the digital and physical world. Check out our discord for daily updates.
                </Typography>
                  <Typography variant="subtitle1" className={classes.subtitle1}>
                  Pre Sale Mint: 5th February 2pm EST @ 0.06 ETH 
                  </Typography>
                  <Typography variant="subtitle1" className={classes.subtitle1}>
                  Public Mint: 6th February 2pm EST @ 0.10 ETH 
                  </Typography>
              </Typography>
            </Grid>
            <Grid item md={6} style={{justifyContent: 'center', display: 'flex', height: height}} >
            <img className={classes.img} src="/charaters.png" alt={"charaters"} />
              </Grid>
          </Grid>
          
      </Container>
    </React.Fragment>
  );
}

export default TopSection;
