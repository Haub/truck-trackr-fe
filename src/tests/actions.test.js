import * as actions from '../actions';

describe('actions', () => {
  
  it ('should have a type of LOAD_BREWERIES', () => {
    const breweries = mockBreweries;
    const expectedAction = {
      type: 'LOAD_BREWERIES',
      breweries
    }
  const result = Actions.loadBreweries(mockBreweries);
  expect(result).toEqual(expectedAction)
  })

})