import { ADD_MENU_POST } from "../actions/addPostAction";

const defaultState = [];

const addMenuReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_MENU_POST:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default addMenuReducer;
