import React from "react";
import { Switch } from "react-router-dom";
import { LinkWrapper, Main, Wrapper } from "./app-styled";
import Dashboard from "./components/Admin/Dashboard";
import Profile from "./components/Admin/Profile";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Register from "./components/Auth/Register";
import AllBill from "./components/Bill/AllBill";
import BillGenerator from "./components/Bill/BillGenerator";
import InvoicePdf from "./components/Bill/InvoicePdf";
import Home from "./components/Common/Home";
import PrivateRoute from "./components/Common/PrivateRoute";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import Sidebar from "./components/Common/Sidebar";
import CustomerBill from "./components/Customer/CustomerBill";
import CustomerContainer from "./components/Customer/CustomerContainer";
import ProductContainer from "./components/Product/ProductContainer";
const App = () => {
  return (
    <Wrapper>
      <LinkWrapper>
        <Sidebar />
      </LinkWrapper>
      <Main>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/register" component={Register} />
          <ProtectedRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/customer" component={CustomerContainer} />
          <PrivateRoute exact path="/product" component={ProductContainer} />
          <PrivateRoute exact path="/bill" component={BillGenerator} />
          <PrivateRoute exact path="/allbill" component={AllBill} />
          <PrivateRoute exact path="/customer/:id" component={CustomerBill} />
          <PrivateRoute exact path="/bill_download" component={InvoicePdf} />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>
      </Main>
    </Wrapper>
  );
};

export default App;
