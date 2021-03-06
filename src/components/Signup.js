import {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link as RouteLink, useHistory} from "react-router-dom";
import { auth } from '../firebase';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color: "#E0E6E9",
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
  Color: {
    color: "#E0E6E9",
},
}));

export default function SignUp() {
  const classes = useStyles();
  const [firstname, setfirstname] =useState("");
  const [Lastname, setLastname] =useState("");
  const [email, setEmail] =useState("");
  const [password, setpassword] =useState("");
  const history = useHistory();

  const signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
        console.log(auth);
        if(auth){
            history.push("/");
        }
    }).catch(err=>alert(err.message))

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.Color}>
          Registro
        </Typography>
        <form className={classes.form} noValidate >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstname}
                onChange={e=>setfirstname(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={Lastname}
                onChange={e=>setLastname(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="Apellido"
                autoComplete="lname"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 value={email}
                 onChange={e=>setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electr??nico"
                name="email"
                autoComplete="email"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              value={password}
              onChange={e=>setpassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="contrase??a"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="secondary" />}
                label="Quiero??recibir??boletines??a??mi??correo."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={signup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <RouteLink to="/signin">
              Ya tienes una cuenta? inicia sesi??n
              </RouteLink> 
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}