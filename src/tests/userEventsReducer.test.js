import { userEventsReducer } from '../reducers/userEventsReducer'
import * as Actions from '../actions'
import { mockUserEvents } from './testMocks'

describe('userEventsReducer', () => {
    let userEvents;

    beforeEach(() => {
        userEvents = mockUserEvents
    })

    it('should return the default state', () => {
        const expected = [];
        const result = userEventsReducer(undefined, {});

        expect(result).toEqual(expected);
    })

    it('should return state with user events', () => {
        const initialState = [];
        const expected = mockUserEvents;

        const result = userEventsReducer(initialState, Actions.loadEvents(userEvents))
        expect(result).toEqual(expected)
    })

    

})