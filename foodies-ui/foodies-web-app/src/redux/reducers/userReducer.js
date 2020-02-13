import { ADD_NEW_USER } from "../actions/userAction";

const defaultState = [];

const userReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default userReducer;
