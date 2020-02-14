export const LOG_IN = "LOG_IN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const logIn = user => {
  return {
    type: LOG_IN,
    payload: user
  };
};
