import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePage } from '../containers/ProfilePage/';


describe ('NAVBAR', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper).toMatchSnapshot();
  });
})