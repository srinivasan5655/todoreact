import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    width: 300,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      padding: 10,
      width: 250,
    },
  },
  Button: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  linkstyle: {
    paddingLeft: "5px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  background: {
    minHeight: "100vh",
    minWidth: "100vw",
    background: "linear-gradient(to right, #373b44, #4286f4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
