import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllBill } from "../../action/billAction";
import { Link } from "react-router-dom";
import Displaybill from "../Bill/Displaybill";

const CustomerBill = (props) => {
  const allBill = useSelector((state) => state.allBill);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    dispatch(startGetAllBill());
  }, [dispatch]);
  const customerBill = allBill.filter((bill) => {
    return bill.customer === id;
  });
  return (
    <div className="all_bill">
      <div className="back_btn">
        <div className="all_bill_header2">
          <h1>All Orders - {customerBill.length}</h1>
        </div>
        <div>
          <Link to="/customer">Back</Link>
        </div>
      </div>
      <div className="all_bill_card">
        {customerBill.map((bill) => {
          return <Displaybill bill={bill} key={bill._id} />;
        })}
      </div>
    </div>
  );
};

export default CustomerBill;
