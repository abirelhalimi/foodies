import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import addRecipeReducer from "./addRecipeReducer";
import addMenuReducer from "./addMenuReducer";
import addReviewReducer from "./addReviewReducer";
import logInReducer from "./logInReducer";
import fetchReviewsByRestaurantReducer from "./fetchReviewsByRestaurantReducer";
import auth from "./auth";

const allReducers = combineReducers({
  post: postReducer,
  user: userReducer,
  login: logInReducer,
  recipes: addRecipeReducer,
  menus: addMenuReducer,
  reviews: addReviewReducer,
  reviewsByRestaurant: fetchReviewsByRestaurantReducer,
  auth: auth
});

export default allReducers;
