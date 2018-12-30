import {combineReducers} from 'redux';  
import {breweriesReducer} from './breweriesReducer';
import {currentPageReducer} from './currentPageReducer';
import {foodTrucksReducer} from './foodTrucksReducer';
import {userEventsReducer} from './userEventsReducer';
import {userReducer} from './userReducer';

export const rootReducer = combineReducers({
  breweries: breweriesReducer,
  currentPage: currentPageReducer,
  foodTrucks: foodTrucksReducer, 
  userEvents: userEventsReducer,
  user: userReducer 
});