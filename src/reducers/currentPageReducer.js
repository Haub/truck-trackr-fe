export const currentPageReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_PROFILE":
      return action.currentPage;
    default:
      return state;
  }
};
