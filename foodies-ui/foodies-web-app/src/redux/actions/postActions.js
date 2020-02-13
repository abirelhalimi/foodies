export const FETCH_RECIPE_POSTS = "FETCH_RECIPE_POSTS";
export const FETCH_REVIEW_POSTS = "FETCH_REVIEW_POSTS";
export const FETCH_MENU_POSTS = "FETCH_MENU_POSTS";
export const FETCH_OFFER_POSTS = "FETCH_OFFER_POSTS";
export const FETCH_DONATION_POSTS = "FETCH_DONATION_POSTS";
export const FETCH_REVIEWS_BY_RESTAURANT = "FETCH_REVIEWS_BYRESTAURANT";

export const fetchRecipePosts = posts => {
  return {
    type: FETCH_RECIPE_POSTS,
    payload: posts
  };
};

export const fetchReviewPosts = posts => {
  return {
    type: FETCH_REVIEW_POSTS,
    payload: posts
  };
};

export const fetchMenuPosts = posts => {
  return {
    type: FETCH_MENU_POSTS,
    payload: posts
  };
};

export const fetchOfferPosts = posts => {
  return {
    type: FETCH_OFFER_POSTS,
    payload: posts
  };
};
export const fetchDonationPosts = posts => {
  return {
    type: FETCH_DONATION_POSTS,
    payload: posts
  };
};

export const fetchReviewsByRestaurant = posts => {
  return {
    type: FETCH_REVIEWS_BY_RESTAURANT,
    payload: posts
  };
};
