import axios from "../Config/axios";
import swal from "sweetalert";

//add customer
const addCustomer = (data) => {
  return { type: "ADD_CUSTOMER", payload: data };
};
export const startAddCustomer = (data) => {
  return (dispatch) => {
    axios
      .post("/customers", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(addCustomer(result));
        swal("added successfully!");
      })
      .catch((err) => alert(err.message));
  };
};

//Get Customers
const getCustomer = (data) => {
  return { type: "GET_CUSTOMERS", payload: data };
};

export const startGetCustomer = () => {
  return (dispatch) => {
    axios
      .get("/customers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(getCustomer(result));
      })
      .catch((err) => alert(err.message));
  };
};
//Remove Customer
const deleteCustomer = (data) => {
  return { type: "REMOVE_CUSTOMER", payload: data };
};
export const startRemoveCustomer = (id) => {
  return (dispatch) => {
    axios
      .delete(`/customers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(deleteCustomer(result));
        swal("Hey", "You Removed Successfully", "success");
      })
      .catch((err) => alert(err.message));
  };
};

//Edit Customer
const updateCustomer = (data) => {
  return { type: "EDIT_CUSTOMER", payload: data };
};
export const startEditCustomer = (data, id, toggle) => {
  return (dispatch) => {
    axios
      .put(`/customers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(updateCustomer(result));
        toggle();
        swal("superb", "successfully updated", "success");
      })
      .catch((err) => alert(err.message));
  };
};
