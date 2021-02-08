const initialState = [];

export const currentBillReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BILL": {
      return [{ ...action.payload }];
    }
    default: {
      return [...state];
    }
  }
};
