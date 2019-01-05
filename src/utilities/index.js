export const fetchBusinesses = async businessType => {
  try {
    const response = await fetch(
      `https://truck-trackr-api.herokuapp.com/api/v1/${businessType}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async user => {
  try {
    const response = await fetch(
      `https://truck-trackr-api.herokuapp.com/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const result = await response.json();
      const eventResults = await getUserEvents(result);
      let newResult = [result, eventResults]
      return newResult
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserEvents = async (user) => {
  const cleanedUser = await cleanUser(user);
  try {
    const response = await fetch(`https://truck-trackr-api.herokuapp.com/api/v1/${cleanedUser.type}/${cleanedUser.id}/${cleanedUser.eventType}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const result = await response.json();
      return result;
    } 
  } catch (error) {
    throw new Error(error.message);
  }
};

export const cleanUser = (user) => {
  let cleanedUser;
  if(user.data.type === 'brewery') {
    cleanedUser = {
      type: 'breweries',
      eventType: 'brewery_events',
      id: user.data.id
    }
  } else {
    cleanedUser = {
      type: 'food_trucks',
      eventType: 'open_dates',
      id: user.data.id
    }
  }
  return cleanedUser
}

export const createNewUser = async (user, locationType) => {
  try {
    const response = await fetch(
      `https://truck-trackr-api.herokuapp.com/api/v1/${locationType}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createEventFetch = async (user, postBody) => {
  try {
    const response = await fetch(
      `https://truck-trackr-api.herokuapp.com/api/v1/${user.type}/${user.id}/${
        user.eventType
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postBody)
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    } else {
      const result = await response;
      console.log(response)
      return result
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
