import React from "react";
import { shallow } from "enzyme";
import { ProfilePage, mapStateToProps, mapDispatchToProps } from "../containers/ProfilePage/";
import { mockProfile, mockUser, mockEvent, mockUserEvents } from "./testMocks";

describe("PROFILE PAGE", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(
      <ProfilePage currentPage={mockProfile.data} user={mockUser} userEvents={mockUserEvents} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should have access to currentUser", () => {
      const mockStore = {
        currentPage: {},
        user: {},
        userEvents: {}
      };
      const expected = { ...mockStore };
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should call dispatch when addUser is invoked", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addUser(mockProfile);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it("should call dispatch when editEvent is invoked", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.editEvent(mockEvent);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it("should call dispatch when removeEvent is invoked", () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.removeEvent(mockEvent);
      expect(mockDispatch).toHaveBeenCalled();
    });
  })
});
