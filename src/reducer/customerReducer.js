const initialState = [];

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER": {
      return [...state, action.payload];
    }
    case "GET_CUSTOMERS": {
      return [...action.payload];
    }
    case "REMOVE_CUSTOMER": {
      return state.filter((customer) => customer._id !== action.payload._id);
    }
    case "EDIT_CUSTOMER": {
      return state.map((customer) => {
        if (customer._id === action.payload._id) {
          return { ...customer, ...action.payload };
        } else {
          return { ...customer };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};
