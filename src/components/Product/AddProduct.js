import React, { useState } from "react";
import validator from "validator";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { startAddProduct, startEditProduct } from "../../action/productAction";
const AddProduct = ({ id, name, price, toggle }) => {
  const [productData, setProductData] = useState({
    name: name ? name : "",
    price: price ? price : "",
  });
  const errors = {};
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleCancelButton = () => {
    setProductData({
      name: "",
      email: "",
      mobile: "",
    });
    toggle();
  };
  const runValidation = () => {
    //name validation
    if (validator.isEmpty(productData.name)) {
      errors.name = "name can't be empty";
    }
    // mobile validation
    if (validator.isEmpty(productData.price)) {
      errors.price = "price can't be empty";
    } else if (!/^\d+$/.test(productData.price)) {
      errors.price = "price contains only digit";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      if (id) {
        dispatch(startEditProduct(productData, id, toggle));
      } else {
        dispatch(startAddProduct(productData));
        setProductData({
          name: "",
          price: "",
        });
      }
    } else {
      if (errors.name) {
        swal(`${errors.name}`, "error");
      }
      setTimeout(() => {
        if (errors.price) {
          swal(`${errors.price}`, "error");
        }
      }, 1500);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={productData.name}
          onChange={handleChange}
          name="name"
          className="input"
        />

        <input
          type="text"
          placeholder="price"
          value={productData.price}
          onChange={handleChange}
          name="price"
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

export default AddProduct;
