export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.user;
    case "REMOVE_USER":
      return {};
    default:
      return state;
  }
};
