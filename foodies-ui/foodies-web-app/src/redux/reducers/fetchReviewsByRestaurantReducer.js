import { FETCH_REVIEWS_BY_RESTAURANT } from "../actions/postActions";

const defaultState = [];

const fetchReviewsByRestaurantReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_BY_RESTAURANT:
      return [...oldState, ...action.payload];
    default:
      return oldState;
  }
};

export default fetchReviewsByRestaurantReducer;
