import * as Actions from '../actions';
import { mockBreweries, mockBrewery, mockFoodTrucks, mockProfile, mockEvent, mockUserEvents } from './testMocks.js';

describe('actions', () => {
  
  it ('should have a type of LOAD_BREWERIES', () => {
    const breweries = mockBreweries;
    const expectedAction = {
      type: 'LOAD_BREWERIES',
      breweries
    };    
    const result = Actions.loadBreweries(mockBreweries);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of LOAD_FOOD_TRUCKS', () => {
    const foodTrucks = mockFoodTrucks;
    const expectedAction = {
      type: 'LOAD_FOOD_TRUCKS', 
      foodTrucks
    };
    const result = Actions.loadFoodTrucks(mockFoodTrucks);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of LOAD_PROFILE', () => {
    const profile = mockProfile;
    const expectedAction = {
      type: 'LOAD_PROFILE', 
      profile
    };
    const result = Actions.loadProfile(mockProfile);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of ADD_USER', () => {
    const user = mockBrewery
    const expectedAction = {
      type: 'ADD_USER', 
      user
    };
    const result = Actions.addUser(mockBrewery);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of REMOVE_USER', () => {
    const user = mockBrewery
    const expectedAction = {
      type: 'REMOVE_USER'
    };
    const result = Actions.removeUser();
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of LOAD_EVENTS', () => {
    const events = mockUserEvents;
    const expectedAction = {
      type: 'LOAD_EVENTS',
      events
    };
    const result = Actions.loadEvents(mockUserEvents);
    expect(result).toEqual(expectedAction)
  })

  it ('should have a type of ADD_EVENT', () => {
    const event = mockEvent;
    const expectedAction = {
      type: 'ADD_EVENT', 
      event
    };
    const result = Actions.addEvent(mockEvent);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of REMOVE_EVENT', () => {
    const event = mockEvent;
    const expectedAction = {
      type: 'REMOVE_EVENT', 
      event
    };
    const result = Actions.removeEvent(mockEvent);
    expect(result).toEqual(expectedAction);
  });

  it ('should have a type of EDIT_EVENT', () => {
    const event = mockEvent;
    const expectedAction = {
      type: 'EDIT_EVENT', 
      event
    };
    const result = Actions.editEvent(mockEvent);
    expect(result).toEqual(expectedAction);
  });


});