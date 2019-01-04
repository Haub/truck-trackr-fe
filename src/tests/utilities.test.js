import * as helper from "../utilities";
import {
  mockBreweries,
  mockFoodTrucks,
  mockProfile,
  mockLoginUser,
  mockPostParams,
  mockCreateUserParams,
  mockCreateUser
} from "./testMocks";

describe("helper", () => {
  describe("fetchBusinesses", () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        })
      );
    });

    it("should call fetch with the correct url if locationType is breweries", async () => {
      const expected =
        "https://truck-trackr-api.herokuapp.com/api/v1/breweries";

      await helper.fetchBusinesses("breweries");

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should call fetch with the correct url if locationType is food_trucks", async () => {
      const expected =
        "https://truck-trackr-api.herokuapp.com/api/v1/food_trucks";

      await helper.fetchBusinesses("food_trucks");

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it("should return breweries if the status is ok", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockBreweries)
        })
      );

      const expected = mockBreweries;
      const result = await helper.fetchBusinesses("breweries");
      expect(result).toEqual(expected);
    });

    it("should return foodTrucks if the status is ok", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockFoodTrucks)
        })
      );

      const expected = mockFoodTrucks;
      const result = await helper.fetchBusinesses("food_trucks");
      expect(result).toEqual(expected);
    });

    it("should throw an error if status is not ok", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({ ok: false, statusText: "fetch failed." })
      );

      const expected = Error("fetch failed.");

      expect(helper.fetchBusinesses()).rejects.toEqual(expected);
    });
  });

  describe("loginUser", () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProfile)
        })
      );
    });

    it("should call fetch with the correct URL", async () => {
      const expected = mockPostParams;

      await helper.loginUser(mockLoginUser);

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("throws an error if the response is not OK", async () => {
      const expected = Error("user not found");

      window.fetch = jest.fn(() =>
        Promise.resolve({ ok: false, statusText: "user not found" })
      );

      expect(helper.loginUser()).rejects.toEqual(expected);
    });
  });

  describe("createNewUser", () => {
    beforeEach(() => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockProfile)
        })
      );
    });

    it("should call fetch with the correct URL", async () => {
        const expected = mockCreateUserParams;

        await helper.createNewUser(mockCreateUser, 'breweries');

        expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it("throws an error if the response is not OK", async () => {
        const expected = Error("user not found");
  
        window.fetch = jest.fn(() =>
          Promise.resolve({ ok: false, statusText: "user not found" })
        );
  
        expect(helper.createNewUser()).rejects.toEqual(expected);
      });
  });

  describe('createEventFetch', () => {
      
  })
});
