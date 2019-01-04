export const loadBreweries = breweries => ({
  type: "LOAD_BREWERIES",
  breweries
});

export const loadFoodTrucks = foodTrucks => ({
  type: "LOAD_FOOD_TRUCKS",
  foodTrucks
});

export const loadProfile = currentPage => ({
  type: "LOAD_PROFILE",
  currentPage
});

export const addUser = user => ({
  type: "ADD_USER",
  user
});

export const removeUser = () => ({
  type: "REMOVE_USER"
});

export const loadEvents = events => ({
  type: "LOAD_EVENTS",
  events
});

export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

export const removeEvent = event => ({
  type: "REMOVE_EVENT",
  event
});

export const editEvent = event => ({
  type: "EDIT_EVENT",
  event
});
