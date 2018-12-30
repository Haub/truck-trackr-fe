import { userEventsReducer } from '../reducers/userEventsReducer'
import * as Actions from '../actions'
import { mockUserEvents, mockUpdatedEvents, mockEvent, mockEditedEvents, mockEventToEdit } from './testMocks'

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

    it(`should add an event to a user's calendar`, () => {
        const initialState = userEvents;
        const expected = mockUpdatedEvents;

        const result = userEventsReducer(initialState, Actions.addEvent(mockEvent))
        expect(result).toEqual(expected)
    })
    
    it('should remove an event from calendar', () => {
        const initialState = mockUpdatedEvents;
        const expected = userEvents;

        const result = userEventsReducer(initialState, Actions.removeEvent(mockEvent))
        expect(result).toEqual(expected)
    })

    it('should edit an event in the calendar', () => {
        const initialState = userEvents;
        const expected = mockEditedEvents;

        const result = userEventsReducer(initialState, Actions.editEvent(mockEventToEdit))
        expect(result).toEqual(expected)
    })

})