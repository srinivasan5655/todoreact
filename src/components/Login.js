import useStyles from "./LoginStyles";
import { useState } from "react";
import { Typography, TextField, Paper, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const renderGoogleAuth = (props) => {
    if (props.googleAuth) {
      return props.googleAuth();
    } else {
      return null;
    }
  };

  const renderSignUpLink = (props) => {
    if (props.googleAuth) {
      return props.signUpLink();
    } else {
      return null;
    }
  };

  const handelSignIn = async (e, history) => {
    e.preventDefault();
    try {
      history.push("/loading");
      await props.signupAndSignin(email, password);
      history.push("/todolist");
      dispatch({ type: "SIGN_IN" });
    } catch (err) {
      alert("Please Check you Email or password");
      history.push("/");
    }
  };

  return (
    <div className={classes.background}>
      <Paper
        elevation={10}
        className={`${classes.paperStyle} center`}
        component="div"
      >
        <Typography
          color={"textPrimary"}
          align="center"
          component="h6"
          variant="h6"
        >
          {props.title}
        </Typography>

        <Grid container direction="row" spacing={2}>
          <Grid item>
            <form component="div">
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                type="email"
                margin="normal"
                size="small"
                variant="standard"
                label="Enter Your Email"
              ></TextField>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                fullWidth
                type="password"
                margin="normal"
                size="small"
                variant="standard"
                label="Enter Your password"
              ></TextField>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.Button}
                style={{ marginTop: " 10px" }}
                onClick={(e) => handelSignIn(e, history)}
              >
                {props.LoginOrSignUp}
              </Button>
            </form>
          </Grid>
          {renderGoogleAuth(props)}
          {renderSignUpLink(props)}
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
