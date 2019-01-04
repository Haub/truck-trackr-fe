import { currentPageReducer } from "../reducers/currentPageReducer";
import * as Actions from "../actions";
import { mockProfile } from "./testMocks";

describe("currentPageReducer", () => {
  let currentPage;

  beforeEach(() => {
    currentPage = mockProfile;
  });

  it("should return the default state", () => {
    const expected = {};
    const result = currentPageReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should return state with a profile", () => {
    const initialState = {};
    const expected = currentPage;

    const result = currentPageReducer(
      initialState,
      Actions.loadProfile(mockProfile)
    );
    expect(result).toEqual(expected);
  });
});
