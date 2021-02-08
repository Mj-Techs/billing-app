import React from "react";
import Modal from "react-modal";
import AddProduct from "./AddProduct";
import { customStyles, buttonStyle } from "../Customer/ModalStyle";
const EditProduct = ({ id, name, price, open, toggle }) => {
  return (
    <div>
      <Modal isOpen={open} onRequestClose={toggle} style={customStyles}>
        <h1>Edit Customer</h1>
        <AddProduct id={id} name={name} price={price} toggle={toggle} />

        <button onClick={toggle} style={buttonStyle}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EditProduct;
