import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "../reducer/adminReducer";
import { allBillReducer } from "../reducer/allBillReducer";
import { currentBillReducer } from "../reducer/currentBillReducer";
import { customerReducer } from "../reducer/customerReducer";
import { lineItems } from "../reducer/lineItemReducer";
import loginReducer from "../reducer/loginReducer";
import { productReducer } from "../reducer/productReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      status: loginReducer,
      admin: adminReducer,
      product: productReducer,
      customer: customerReducer,
      lineItem: lineItems,
      allBill: allBillReducer,
      currentBill: currentBillReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configureStore;
