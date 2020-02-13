import { FETCH_RECIPE_POSTS } from "../actions/postActions";
import { FETCH_REVIEW_POSTS } from "../actions/postActions";
import { FETCH_MENU_POSTS } from "../actions/postActions";
import { FETCH_OFFER_POSTS } from "../actions/postActions";
import { FETCH_DONATION_POSTS } from "../actions/postActions";

const defaultState = [];

const postReducer = (oldState = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_POSTS:
      return [...oldState, ...action.payload];
    case FETCH_REVIEW_POSTS:
      return [...oldState, ...action.payload];
    case FETCH_MENU_POSTS:
      return [...oldState, ...action.payload];
    case FETCH_OFFER_POSTS:
      return [...oldState, ...action.payload];
    case FETCH_DONATION_POSTS:
      return [...oldState, ...action.payload];
    default:
      return oldState;
  }
};

export default postReducer;
