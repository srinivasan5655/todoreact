import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import loader from "./loader";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/SignUp" exact component={SignUp} />
          <Route path="/loading" exact component={loader} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
