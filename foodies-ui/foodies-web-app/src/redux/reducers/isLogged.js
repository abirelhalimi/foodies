const isLoggedReducer = (state = false, action) => {
  switch (action.type) {
    case "iSLOGGED":
      return !state;
    default:
      return state;
  }
};

export default isLoggedReducer;
