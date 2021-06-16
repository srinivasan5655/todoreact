import { combineReducers } from "redux";

const signIn = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  signIn,
});
