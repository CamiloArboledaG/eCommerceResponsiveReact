import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/gato.png';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
      backgroundColor: "#1F1D2B",
      boxShadow: "none",
  },
  Color: {
    color: "#E0E6E9",
},
  grow: {
      flexGrow: 1,
  },
  button: {
      marginLeft: theme.spacing(2),
  },
  image: {
      marginRight: "10px",
      height:"3rem"
  }
}));

/**appbar fixed o static */
export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" className={classes.Color}>
            <img src={logo} className={classes.image} />
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p" className={classes.Color}>
            Hola Amigo!
          </Typography>
          <div className={classes.button} >
              <Button variant="contained" color="primary">
              <strong className={classes.Color}>Iniciar sesión</strong>
              </Button>
              <IconButton aria-label="Mostrar los items" color="inherent" >
                  <Badge badgeContent={2} color="secondary">
                    <ShoppingCart fontSize="large" color="primary"/>
                  </Badge>
              </IconButton>
              
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
