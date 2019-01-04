import React from "react";
import { shallow } from "enzyme";
import { SignUpPage } from "../components/SignUpPage/";

describe("SIGNUPPAGE", () => {
  it("should match the snapshot", () => {
    const wrapper = shallow(<SignUpPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
