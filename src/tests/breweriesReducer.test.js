import { breweriesReducer } from "../reducers/breweriesReducer";
import * as Actions from "../actions";
import { mockBreweries } from "./testMocks";

describe("breweriesReducer", () => {
  let breweries;

  beforeEach(() => {
    breweries = mockBreweries;
  });

  it("should return the default state", () => {
    const expected = [];
    const result = breweriesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should return state with breweries", () => {
    const initialState = [];
    const expected = breweries;

    const result = breweriesReducer(
      initialState,
      Actions.loadBreweries(breweries)
    );
    expect(result).toEqual(expected);
  });
});
