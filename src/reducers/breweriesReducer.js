export const breweriesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_BREWERIES":
      return action.breweries;
    default:
      return state;
  }
};
