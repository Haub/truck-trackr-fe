import React from 'react';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from '../containers/App/';
import { App } from '../containers/App/';
import { mockProfile } from '../utilities/mockData.js';


describe ('APP', () => {
  
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state login and navOpen set to true ', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state().login).toEqual(true);
    expect(wrapper.state().navOpen).toEqual(true);
  });

  describe('mapStateToProps', () => {
    it('should have access to breweries, foodTrucks, and currentPage', () => {
      const mockStore = {
        breweries: [],
        foodTrucks: [],  
        currentPage: {}
      }
      const expected = {...mockStore};
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when loadProfile is invoked', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loadProfile(mockProfile);
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});

