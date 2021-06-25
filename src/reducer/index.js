import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

// const user = (state = null, action) => {
//   if ((action.type = "SIGN_IN")) {
//     return { ...action.payload };
//   } else {
//     return state;
//   }
// };

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
