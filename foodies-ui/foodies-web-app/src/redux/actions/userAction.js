export const ADD_NEW_USER = "ADD_NEW_USER";

export const newUser = user => {
  return {
    type: ADD_NEW_USER,
    payload: user
  };
};
