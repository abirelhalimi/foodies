export const ADD_RECIPE_POST = "ADD_RECIPE_POST";
export const ADD_MENU_POST = "ADD_MENU_POST";
export const ADD_REVIEW_POST = "ADD_REVIEW_POST";

export const addRecipePost = recipe => {
  return {
    type: ADD_RECIPE_POST,
    payload: recipe
  };
};
export const addReviewPost = review => {
  return {
    type: ADD_REVIEW_POST,
    payload: review
  };
};
export const addMenuPost = menu => {
  return {
    type: ADD_MENU_POST,
    payload: menu
  };
};
