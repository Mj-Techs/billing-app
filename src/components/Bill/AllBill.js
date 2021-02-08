import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetAllBill } from "../../action/billAction";
import Displaybill from "./Displaybill";
const AllBill = () => {
  const allBill = useSelector((state) => state.allBill);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetAllBill());
  }, [dispatch]);
  return (
    <div className="all_bill">
      <div className="all_bill_header">
        <h1>All Generated Bill - {allBill.length}</h1>
      </div>
      <div className="all_bill_card">
        {allBill.map((bill) => {
          return <Displaybill bill={bill} key={bill._id} />;
        })}
      </div>
    </div>
  );
};

export default AllBill;
