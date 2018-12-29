import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../containers/App/';


describe ('APP', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state login and navOpen set to true ', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().login).toEqual(true);
    expect(wrapper.state().navOpen).toEqual(true);
  })
})