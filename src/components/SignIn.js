import React from "react";
import Login from "./Login";
import firebase from "firebase/app";
import { useDispatch } from "react-redux";
import { auth } from "../Firebase";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./LoginStyles";

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      history.push("/loading");
      await firebase.login({
        provider: "google",
        type: "popup",
      });
      history.push("/todolist");
    } catch (err) {
      alert(err.message);
      history.push("/");
    }
  };

  const googleAuth = () => {
    return (
      <Grid item xs={12}>
        <Button
          className={classes.Button}
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => signInWithGoogle(auth, dispatch)}
        >
          Login with Google
        </Button>
      </Grid>
    );
  };

  const signUpLink = () => {
    return (
      <Grid item xs={12}>
        <Typography align="center">
          Don't have an account?
          <Link to="/SignUp" className={classes.linkstyle}>
            Sign up
          </Link>
        </Typography>
      </Grid>
    );
  };

  const signin = (email, password) => {
    return firebase.login({
      email: email,
      password: password,
    });
  };

  return (
    <Login
      LoginOrSignUp="Login"
      title="Login"
      signUpLink={signUpLink}
      googleAuth={googleAuth}
      signupAndSignin={signin}
    />
  );
};

export default SignIn;
