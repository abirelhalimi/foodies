import { ADD_REVIEW_POST } from "../actions/addPostAction";

const defaultState = [];

const addReviewReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_REVIEW_POST:
      return [...oldState, action.payload];
    default:
      return oldState;
  }
};

export default addReviewReducer;
