import useStyles from "./LoginStyles";
import { useState } from "react";
import { Typography, TextField, Paper, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  // auth.onAuthStateChanged(() => {
  //   dispatch({ type: "SIGN_IN" });
  // });
  // });

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
      console.log("i am here");
    } catch (err) {
      alert("Please Check you Email or password");
      console.log(err);
      setError(true);
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
                required
                fullWidth
                type="email"
                margin="normal"
                size="small"
                variant="standard"
                label="Enter Your Email"
                error={error}
              ></TextField>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                fullWidth
                type="password"
                margin="normal"
                size="small"
                variant="standard"
                label="Enter Your password"
                error={error}
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
