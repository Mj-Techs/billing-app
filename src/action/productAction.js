import axios from "../Config/axios";
import swal from "sweetalert";

// add product

const addProduct = (data) => {
  return { type: "ADD_PRODUCT", payload: data };
};
export const startAddProduct = (data) => {
  return (dispatch) => {
    axios
      .post("/products", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(addProduct(result));
        swal("added successfully!");
      })
      .catch((err) => alert(err.message));
  };
};

// Get Product

const getProduct = (data) => {
  return { type: "GET_PRODUCTS", payload: data };
};

export const startGetProduct = () => {
  return (dispatch) => {
    axios
      .get("/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(getProduct(result));
      })
      .catch((err) => alert(err.message));
  };
};

//Remove Product
const deleteProduct = (data) => {
  return { type: "REMOVE_PRODUCT", payload: data };
};
export const startRemoveProduct = (id) => {
  return (dispatch) => {
    axios
      .delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(deleteProduct(result));
        swal("Hey", "You Removed Successfully", "success");
      })
      .catch((err) => alert(err.message));
  };
};

//Edit Product
const updateProduct = (data) => {
  return { type: "EDIT_PRODUCT", payload: data };
};
export const startEditProduct = (data, id, toggle) => {
  return (dispatch) => {
    axios
      .put(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const result = response.data;
        dispatch(updateProduct(result));
        toggle();
        swal("superb", "successfully updated", "success");
      })
      .catch((err) => alert(err.message));
  };
};
