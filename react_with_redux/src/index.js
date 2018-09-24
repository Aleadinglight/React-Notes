import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";
// The reducer read the action to update the state

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
