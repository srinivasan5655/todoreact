import React from "react";
import Login from "./Login";
import firebase from "firebase/app";

const SignUp = () => {
  const signup = (email, password) => {
    return firebase.createUser({ email, password });
  };

  return (
    <Login LoginOrSignUp="Sign Up" title="Sign Up" signupAndSignin={signup} />
  );
};

export default SignUp;
