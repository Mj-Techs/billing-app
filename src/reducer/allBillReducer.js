const initialBill = [];

export const allBillReducer = (state = initialBill, action) => {
  switch (action.type) {
    case "GET_ALLBILL": {
      return [...action.payload];
    }
    case "DELETE_BILL": {
      return state.filter((bill) => bill._id !== action.payload._id);
    }
    default: {
      return [...state];
    }
  }
};
