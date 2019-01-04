import { userReducer } from "../reducers/userReducer";
import * as Actions from "../actions";
import { mockProfile } from "./testMocks";

describe("userReducer", () => {
  let user;

  beforeEach(() => {
    user = mockProfile;
  });

  it("should return the default state", () => {
    const expected = {};
    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it("should return state with a user", () => {
    const initialState = {};
    const expected = user;

    const result = userReducer(initialState, Actions.addUser(mockProfile));
    expect(result).toEqual(expected);
  });

  it("should remove a user", () => {
    const initialState = user;
    const expected = {};

    const result = userReducer(initialState, Actions.removeUser());
    expect(result).toEqual(expected);
  });
});
