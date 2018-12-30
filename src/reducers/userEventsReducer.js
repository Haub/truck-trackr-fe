export const userEventsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_EVENTS': 
     return action.events
    case 'ADD_EVENT':
      return [...state, action.event]
    case 'REMOVE_EVENT':
      return state.filter(event => event.id !== action.event.id)
    case 'EDIT_EVENT':
      return state.map(event => {
        return event.id === action.event.id ? { ...action.event } : event
      })
    default: 
      return state
  }
}