import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    fontSize: 50
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bolder'
  },
  navBar: {
    backgroundColor: '#D4C1EC',
    color: "black",
  },
  button: {
    borderRadius: 20,
    margin: 5
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Container maxWidth="md"  style={{padding: 0}}>
  <Toolbar>
   
    <Typography variant="h4" className={classes.title}>
      Cool Boys
    </Typography>
    <Button color="inherit" variant="outlined" className={classes.button} >Join Discord</Button>
    <Button color="inherit" variant="outlined" className={classes.button} >Open Wallet</Button>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon className={classes.menuButton} />
    </IconButton>
  </Toolbar>
  </Container>
</AppBar>
  );
}

export default Navbar;
