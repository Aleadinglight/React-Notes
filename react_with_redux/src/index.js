import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";

// The reducer read the action to update the state
function productsReducer(state = [], action) {
  console.log(action);
  return state;
}

function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "updateUser":
      return payload.user;
  }
  return state;
}

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Micheal"
  },
  window.devToolsExtension && window.devToolsExtension()
);

const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "John"
  }
};

store.dispatch(updateUserAction);

/*
const action = {
  type: "changeState",
  payload: {
    newState: "New state"
  }
};
// send to reducer
store.dispatch(action);
console.log(store.getState());
*/

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
