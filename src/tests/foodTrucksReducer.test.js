import { foodTrucksReducer } from "../reducers/foodTrucksReducer";
import * as Actions from "../actions";
import { mockFoodTrucks } from "./testMocks";

describe("foodTrucksReducer", () => {
  let foodTrucks;

  beforeEach(() => {
    foodTrucks = mockFoodTrucks;
  });

  it("should return the default state", () => {
    const expected = [];
    const result = foodTrucksReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should return state with foodTrucks", () => {
    const initialState = [];
    const expected = foodTrucks;

    const result = foodTrucksReducer(
      initialState,
      Actions.loadFoodTrucks(foodTrucks)
    );
    expect(result).toEqual(expected);
  });
});
