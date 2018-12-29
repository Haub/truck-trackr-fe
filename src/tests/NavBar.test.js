import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../containers/NavBar/';


describe ('NAVBAR', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
})