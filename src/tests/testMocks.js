export const mockBreweries = {
  data: [
    {
      id: "1",
      type: "brewery",
      attributes: {
        name: "Lockman Inc"
      }
    },
    {
      id: "2",
      type: "brewery",
      attributes: {
        name: "Cremin, Nikolaus and Volkman"
      }
    }
  ]
};

export const mockBrewery = {
  data: [
    {
      id: "1",
      type: "brewery",
      attributes: {
        name: "Heads Of State",
        address: "Risotto with Seafood",
        contact_name: "Pamala",
        phone: "344.694.9247",
        email: "young@champlin.biz",
        website: "http://hosbeer.com",
        logo_image:
          "https://pigment.github.io/fake-logos/logos/medium/color/11.png"
      }
    }
  ]
};

export const mockFoodTrucks = [
  {
    data: [
      {
        id: "1",
        type: "food_truck",
        attributes: {
          name: "Hot Pasta"
        }
      },
      {
        id: "2",
        type: "food_truck",
        attributes: {
          name: "Hell On Wheels"
        }
      }
    ]
  }
];

export const mockFoodTruck = {
  data: [
    {
      id: "1",
      type: "food_truck",
      attributes: {
        name: "Hot Pasta",
        food_type: "Risotto with Seafood",
        contact_name: "Pamala",
        phone: "344.694.9247",
        email: "young@champlin.biz",
        website: "http://hopo.com",
        logo_image:
          "https://pigment.github.io/fake-logos/logos/medium/color/11.png"
      }
    }
  ]
};

export const mockProfile = {
  data: [
    {
      id: "1",
      type: "brewery",
      attributes: {
        name: "Heads Of State",
        address: "Risotto with Seafood",
        contact_name: "Pamala",
        phone: "344.694.9247",
        email: "young@champlin.biz",
        website: "http://hosbeer.com",
        logo_image:
          "https://pigment.github.io/fake-logos/logos/medium/color/11.png"
      }
    }
  ]
};

export const mockUser = {
  id: "1",
  type: "brewery",
  attributes: {
    name: "Heads Of State",
    address: "Risotto with Seafood",
    contact_name: "Pamala",
    phone: "344.694.9247",
    email: "young@champlin.biz",
    website: "http://hosbeer.com",
    logo_image: "https://pigment.github.io/fake-logos/logos/medium/color/11.png"
  }
};

export const mockEvent = {
  id: 435,
  date: "04/06/2018",
  truck_booked: true,
  brewery_id: 105
};

export const mockUserEvents = [
  {
    id: 433,
    date: "04/03/2018",
    truck_booked: true,
    brewery_id: 105
  },
  {
    id: 434,
    date: "04/08/2018",
    truck_booked: false,
    brewery_id: 105
  }
];

export const mockUpdatedEvents = [
  {
    id: 433,
    date: "04/03/2018",
    truck_booked: true,
    brewery_id: 105
  },
  {
    id: 434,
    date: "04/08/2018",
    truck_booked: false,
    brewery_id: 105
  },
  {
    id: 435,
    date: "04/06/2018",
    truck_booked: true,
    brewery_id: 105
  }
];

export const mockEventToEdit = {
  id: 434,
  date: "04/03/2018",
  truck_booked: true,
  brewery_id: 105
};

export const mockEditedEvents = [
  {
    id: 433,
    date: "04/03/2018",
    truck_booked: true,
    brewery_id: 105
  },
  {
    id: 434,
    date: "04/03/2018",
    truck_booked: true,
    brewery_id: 105
  }
];

export const mockLoginUser = {
  uid: 55,
  account_type: "brewery"
};

export const mockPostParams = [
  "https://truck-trackr-api.herokuapp.com/login",
  {
    method: "POST",
    body: JSON.stringify(mockLoginUser),
    headers: {
      "Content-Type": "application/json"
    }
  }
];

export const mockCreateUser = {
  name: "Test Brewery",
  address: "Test Address",
  contact_name: "Test Name",
  phone: "Test Phone Number",
  email: "Test Email",
  uid: "123456789"
};

export const mockCreateUserParams = [
  `https://truck-trackr-api.herokuapp.com/api/v1/breweries`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mockCreateUser)
  }
];
