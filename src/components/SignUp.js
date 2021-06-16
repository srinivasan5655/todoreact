import React from "react";
import Login from "./Login";
import { auth } from "../Firebase";

const SignUp = () => {
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  return (
    <Login LoginOrSignUp="Sign Up" title="Sign Up" signupAndSignin={signup} />
  );
};

export default SignUp;
