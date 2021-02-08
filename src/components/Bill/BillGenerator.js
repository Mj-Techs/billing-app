import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import ProductSelect from "./ProductSelect";
import ShowAddedProduct from "./ShowAddedProduct";
import { startCreateBill } from "../../action/billAction";
import BillDisplay from "./BillDisplay";
import { ViewLink } from "../../app-styled";

const BillGenerator = () => {
  const [startDate, setStartDate] = useState(
    localStorage.getItem("date") ? localStorage.getItem("date") : ""
  );
  const [customerId, setCustomerId] = useState(
    localStorage.getItem("id") ? localStorage.getItem("id") : ""
  );
  const [billDisplay, setBillDisplay] = useState(false);
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer);
  const lineItems = useSelector((state) => state.lineItem);

  const handleDate = (e) => {
    setStartDate(e.target.value);
    localStorage.setItem("date", e.target.value);
  };
  const handleCustomer = (e) => {
    setCustomerId(e.target.value);
    localStorage.setItem("id", e.target.value);
  };

  const billGenerate = () => {
    if (startDate.length > 0 && customerId.length > 0 && lineItems.length > 0) {
      const data = {
        date: startDate,
        customer: customerId,
        lineItems: lineItems,
      };
      dispatch(startCreateBill(data));
      setStartDate("");
      setCustomerId("");
      setBillDisplay(true);
    } else {
      swal("OoOo!", "something you are missing", "error");
    }
  };
  return (
    <div className="bill_container">
      <div className="title">
        <div>
          <p>Bill Generator</p>
        </div>
      </div>
      <div className="date_picker">
        <h3>Select date</h3>

        <TextField
          id="date"
          type="date"
          value={startDate}
          onChange={handleDate}
        />
      </div>
      <div className="bill_info">
        <div className="bill_gen">
          <div className="customer_name">
            <select
              value={customerId}
              onChange={handleCustomer}
              className="select"
            >
              <option value="">select customer</option>
              {customers.map((customer) => {
                return (
                  <option key={customer._id} value={customer._id}>
                    {customer.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="product_name">
            <h2>Line Items</h2>
            <ProductSelect />
          </div>
          <div>
            <ShowAddedProduct />
            <button className="gen_butn" onClick={billGenerate}>
              Bill Generate
            </button>
          </div>
        </div>
        <div className="bill_dis">
          <div>{billDisplay && <BillDisplay />}</div>
          <div>
            {billDisplay && (
              <ViewLink to="/bill_download">Click to Download</ViewLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillGenerator;
