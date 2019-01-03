export const fetchBusinesses = async (businessType) => {
    try {
        const response = await fetch(`https://truck-trackr-api.herokuapp.com/api/v1/${businessType}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        } else {
        const result = await response.json();
        return result
        } 
    }   catch(error) {
        throw new Error(error.message)
    }
}

export const loginUser = async (user) => {
    try {
        const response = await fetch(`https://truck-trackr-api.herokuapp.com/login`, {
           method: 'POST',
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify(user) 
        })
        if(!response.ok) {
            throw new Error(response.statusText);
        } else {
            return await response.json()
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createNewUser = async (user, locationType) => {
    try{
        const response = await fetch(`https://truck-trackr-api.herokuapp.com/api/v1/${locationType}`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        if(!response.ok) {
            throw new Error(response.statusText)
        } else {
            return await response.json()
        }
    } catch (error) {
        throw new Error(error.message)
    }
}