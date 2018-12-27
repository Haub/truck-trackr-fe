export const loadBreweries = (breweries) => {
  type: 'LOAD_BREWERIES',
  breweries
}

export const loadFoodTrucks = (foodTrucks) => {
  type: 'LOAD_FOOD_TRUCKS', 
  foodTrucks
}

export const loadProfile = (profile) => {
  type: 'LOAD_PROFILE',
  profile
}

export const toggleSignedIn = (userStatus) => {
  type: 'TOGGLE_SIGNED_IN',
  userStatus
}

export const loadCancellations = (cancellations) => {
  type: 'LOAD_CANCELLATIONS',
  cancellations
}

export const addEvent = (event) => {
  type: 'ADD_EVENT',
  event
}

export const removeEvent = (event) => {
  type: 'REMOVE_EVENT',
  event
}

export const editEvent = (event) => {
  type: 'EDIT_EVENT',
  event
}