import { LOG_IN } from "../actions/logInAction";

const defaultState = [];

const logInReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return [...oldState, ...action.payload];
    default:
      return oldState;
  }
};

export default logInReducer;
