import { ADD_RECIPE_POST } from "../actions/addPostAction";

const defaultState = [];

const addRecipeReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_RECIPE_POST:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default addRecipeReducer;
