import { SET_CURRENT_USER } from "../actions/logInAction";
import isEmpty from "lodash.isempty";

const defaultState = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return oldState;
  }
};

export default authReducer;
