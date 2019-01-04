export const foodTrucksReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_FOOD_TRUCKS":
      return action.foodTrucks;
    default:
      return state;
  }
};
