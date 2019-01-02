import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../containers/NavBar/';
import { mapDispatchToProps } from '../containers/NavBar';
import { mockBreweries, mockFoodTrucks, mockProfile } from '../utilities/mockData.js';


describe ('NAVBAR', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when loadBreweries is invoked', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadBreweries(mockBreweries);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when loadFoodTrucks is invoked', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadFoodTrucks(mockFoodTrucks);
      expect(mockDispatch).toHaveBeenCalled();
    });

    it('should call dispatch when loadProfile is invoked', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadProfile(mockProfile);
      expect(mockDispatch).toHaveBeenCalled();
    });

  });

})