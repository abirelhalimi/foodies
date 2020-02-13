import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { setCurrentUser } from "./redux/actions/logInAction";
import ReactDOM from "react-dom";
import App from "./components";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import allReducers from "./redux/reducers";
import jwt from "jsonwebtoken";
import axios from "axios";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (localStorage.jwtToken) {
  axios
    .get(
      `http://localhost:8080/api/users/find?username=${
        jwt.decode(localStorage.jwtToken).sub
      }
            `
    )
    .then(res => {
      store.dispatch(setCurrentUser(res.data));
    });
  setAuthorizationToken(localStorage.jwtToken);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
