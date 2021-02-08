import React, { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  startAddCustomer,
  startEditCustomer,
} from "../../action/customerAction";
const AddCustomer = ({ id, name, email, mobile, toggle }) => {
  const [customerData, setCustomerData] = useState({
    name: name ? name : "",
    mobile: mobile ? mobile : "",
    email: email ? email : "",
  });
  const errors = {};
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };
  const handleCancelButton = () => {
    setCustomerData({
      name: "",
      email: "",
      mobile: "",
    });
    toggle();
  };
  const runValidation = () => {
    //name validation
    if (validator.isEmpty(customerData.name)) {
      errors.name = "name can't be empty";
    }
    // email validation
    if (validator.isEmpty(customerData.email)) {
      errors.email = "email can't be empty";
    } else if (!validator.isEmail(customerData.email)) {
      errors.email = "invalid email formate";
    }
    // mobile validation
    if (validator.isEmpty(customerData.mobile)) {
      errors.mobile = "mobile can't be empty";
    } else if (!/^\d+$/.test(customerData.mobile)) {
      errors.mobile = "mobile number contains only digit";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      if (id) {
        dispatch(startEditCustomer(customerData, id, toggle));
      } else {
        dispatch(startAddCustomer(customerData));
        setCustomerData({
          name: "",
          mobile: "",
          email: "",
        });
      }
    } else {
      if (errors.name) {
        swal(`${errors.name}`, "error");
      }
      setTimeout(() => {
        if (errors.email) {
          swal(`${errors.email}`, "error");
        }
      }, 1500);
      setTimeout(() => {
        if (errors.mobile) {
          swal(`${errors.mobile}`, "error");
        }
      }, 2500);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={customerData.name}
          onChange={handleChange}
          name="name"
          className="input"
        />

        <input
          type="text"
          placeholder="email"
          value={customerData.email}
          onChange={handleChange}
          name="email"
          className="input"
        />

        <input
          type="text"
          placeholder="mobile"
          value={customerData.mobile}
          onChange={handleChange}
          name="mobile"
          className="input"
        />

        <button className="btn add" type="submit">
          {id ? "update" : "ADD"}
        </button>
        <button
          type="button"
          className="btn cancel"
          onClick={handleCancelButton}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default AddCustomer;
