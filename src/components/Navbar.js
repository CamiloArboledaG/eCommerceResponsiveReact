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
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase';
import { actionTypes } from '../reducer';
import { useHistory } from "react-router-dom";


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
    height: "3rem"
  }
}));

/**appbar fixed o static */
const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/")
    }
  }



  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} >
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" className={classes.Color}>
              <img src={logo} className={classes.image} />
            </IconButton>
          </Link>

          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p" className={classes.Color}>
            ¡Hola {user ? user.email : "Amigo"}!
          </Typography>
          <div className={classes.button} >
            <Link to="/signin">
              <Button variant="contained" color="primary" onClick={handleAuth}>
                <strong className={classes.Color}>{user ? "Cerrar sesión" : "Iniciar sesión"}</strong>
              </Button>
            </Link>

            <Link to="checkout-page">
              <IconButton aria-label="Mostrar los items" color="inherent" >
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary" />
                </Badge>
              </IconButton>
            </Link>


          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar
