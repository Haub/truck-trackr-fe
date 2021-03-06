import React from "react";
import { shallow, mount } from "enzyme";
import {
  Login,
  mapDispatchToProps,
  mapStateToProps
} from "../containers/Login/";
import { mockProfile } from "./testMocks";

describe("LOGIN", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have default state", () => {
    const wrapper = shallow(<Login />);
    const expected = {
      email: "",
      passwordOne: "",
      signUp: false,
      locationType: "",
      businessName: "",
      address: "",
      phoneNumber: "",
      contactName: "",
      foodType: "",
      logo: null
    };
    expect(wrapper.state()).toEqual(expected);
  });

  // it('calls handleSubmit onSubmit of the form', () => {
  //   const wrapper = mount(<Login />)
  //   const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
  //   const mockEvent = { preventDefault: jest.fn() }
  //   wrapper.instance().forceUpdate();
  //   wrapper.find('form').simulate('submit', mockEvent)
  //   expect(spy).toHaveBeenCalled()
  // })

  describe("mapStateToProps", () => {
    it("should have access to currentUser", () => {
      const mockStore = {
        user: {}
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
  });
});
