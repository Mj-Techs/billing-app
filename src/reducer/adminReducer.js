const initialState = {};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ACCOUNT": {
      return { ...action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
