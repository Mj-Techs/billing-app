import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store/configureStore";
import { ToggelStatus } from "./action/userAction";
import { startGetCustomer } from "./action/customerAction";
import { startGetProduct } from "./action/productAction";
import { startGetAllBill } from "./action/billAction";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
if (localStorage.getItem("token")) {
  store.dispatch(startGetCustomer());
  store.dispatch(startGetProduct());
  store.dispatch(startGetAllBill());
  store.dispatch(ToggelStatus());
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
