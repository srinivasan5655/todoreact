import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import loader from "./loader";
import todoList from "./TodoList";
import { PrivateRoute } from "./PrivateRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/loading" exact component={loader} />
          <PrivateRoute path="/todolist" exact component={todoList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
