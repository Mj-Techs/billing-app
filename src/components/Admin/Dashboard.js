import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { startGetAllBill } from "../../action/billAction";
import { startGetCustomer } from "../../action/customerAction";
import { startGetProduct } from "../../action/productAction";
import ShowCustomer from "../Customer/ShowCustomer";
import ShowProduct from "../Product/ShowProduct";
import Displaybill from "../Bill/Displaybill";
const Dashboard = () => {
  const product = useSelector((state) => state.product);
  const customer = useSelector((state) => state.customer);
  const allBill = useSelector((state) => state.allBill);
  const dispatch = useDispatch();
  let TotalCost = 0;

  allBill.forEach((bill) => (TotalCost += bill.total));

  const LastFiveCustomer = _.takeRight(customer, 5);
  const LastFiveProduct = _.takeRight(product, 5);
  const LastFiveBill = _.takeRight(allBill, 5);

  useEffect(() => {
    dispatch(startGetCustomer());
    dispatch(startGetProduct());
    dispatch(startGetAllBill());
  }, [dispatch]);
  return (
    <div className="landing_page">
      <div className="dashboard">
        <div className="card">
          <div className="circle">
            <h2>{customer.length}</h2>
          </div>
          <div className="text">
            <p>Total Customers</p>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <h2>{product.length}</h2>
          </div>
          <div className="text">
            <p>Total Products</p>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <h2>{allBill.length}</h2>
          </div>
          <div className="text">
            <p>Total Bills</p>
          </div>
        </div>
        <div className="card">
          <div className="circle">
            <h2>{TotalCost}</h2>
          </div>
          <div className="text">
            <p>Total Sales</p>
          </div>
        </div>
      </div>
      <div className="last_title">
        <h1>LAST 5 CUSTOMERS</h1>
      </div>
      <div className="last_five">
        {LastFiveCustomer.map((customer) => {
          return <ShowCustomer key={customer._id} {...customer} />;
        })}
      </div>
      <div className="last_title">
        <h1>LAST 5 PRODUCTS</h1>
      </div>
      <div className="last_five">
        {LastFiveProduct.map((product) => {
          return <ShowProduct key={product._id} {...product} />;
        })}
      </div>
      <div className="last_title">
        <h1>LAST 5 BILLS</h1>
      </div>
      <div className="last_five2">
        {LastFiveBill.map((bill) => {
          return <Displaybill key={bill._id} bill={bill} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
