import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import firebase from "firebase/app";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  todolist: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  img: {
    height: 25,
    width: 25,
    "&:hover": {
      cursor: "pointer",
    },
  },
  formdiv: {
    marginTop: "100px",
    marginBottom: "30px",
    width: "60%",
  },
  taskcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "30px",
    border: "1px solid black",
    paddingTop: 3,
    paddingLeft: 5,
    marginTop: 10,
    // display: "block",
  },

  task: {
    flexGrow: 1,
    color: "red",
  },

  delete: {
    height: "90%",
    alignSelf: "flex-start",
  },
}));

const TodoList = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState("");
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  useEffect(() => {
    window.onpopstate = () => {
      const result = window.confirm(
        "Do you really want to leave? you will be logged out"
      );
      if (result) {
        history.push("/");
        firebase.logout();
      } else {
        history.push("/todolist");
      }
    };
  }, [history]);

  const addNewTodo = (todo) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: todo,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });
  };

  const deleteTodo = (todoID) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .doc(todoID)
      .delete();
  };

  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: "todos",
  });

  const todos = useSelector((state) => state.firestore.data.todos);

  return (
    <div className={classes.todolist}>
      <AppBar postion="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h3"
            varient="h3"
            textalign="center"
            style={{ flexGrow: 1 }}
          >
            Todo list App
          </Typography>
          <Button color="inherit" onClick={() => firebase.logout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.formdiv}>
        <form>
          <TextField
            fullWidth
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            margin="normal"
            size="small"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img
                    alt="add"
                    onClick={() => addNewTodo(value)}
                    className={classes.img}
                    src="https://img.icons8.com/metro/26/000000/plus.png"
                  />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </form>
      </div>

      {todos &&
        Object.values(todos).map((todo) => {
          if (todo === null) return "";
          return (
            <div className={classes.taskcontainer} key={todo.todoID}>
              <Typography key={todo.todoID} className={classes.task}>
                {todo.title}
              </Typography>
              <img
                alt="trash"
                className={classes.delete}
                onClick={() => deleteTodo(todo.todoID)}
                src="https://img.icons8.com/color/48/000000/delete-forever.png"
              />
            </div>
          );
        })}
    </div>
  );
};
export default TodoList;
