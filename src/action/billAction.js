import axios from "../Config/axios";
import swal from "sweetalert";

// Add lineItems

export const addLineItems = (data) => {
  return { type: "ADD_LINEITEMS", payload: data };
};

//Remove lineItems

export const removeLineItems = (id) => {
  return { type: "REMOVE_LINEITEMS", payload: id };
};
// empty lineItems
export const emptyLineItems = () => {
  return { type: "EMPTY_LINEITEMS" };
};

// create a Bill
const addBill = (data) => {
  return { type: "ADD_BILL", payload: data };
};
export const startCreateBill = (data) => {
  return (dispatch) => {
    axios
      .post("/bills", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(addBill(result));
        localStorage.removeItem("date");
        localStorage.removeItem("id");
        localStorage.removeItem("productId");
        localStorage.removeItem("quant");
        swal("Tada..", "Your Bill has generated", "success");
        dispatch(emptyLineItems());
      })
      .catch((err) => alert(err.message));
  };
};

// Get All Bill
const addAllBill = (data) => {
  return { type: "GET_ALLBILL", payload: data };
};
export const startGetAllBill = () => {
  return (dispatch) => {
    axios
      .get("/bills", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(addAllBill(result));
      })
      .catch((err) => alert(err.message));
  };
};
// delete a bill
const deleteBill = (data) => {
  return { type: "DELETE_BILL", payload: data };
};
export const startDeleteBill = (id) => {
  return (dispatch) => {
    axios
      .delete(`/bills/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(deleteBill(result));
        swal("hey", "you have removed this bill successfully", "success");
      })
      .catch((err) => alert(err.message));
  };
};
