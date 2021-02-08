const initialadminstate = false;

const loginReducer = (state = initialadminstate, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS": {
      return !state;
    }
    default: {
      return state;
    }
  }
};
export default loginReducer;
