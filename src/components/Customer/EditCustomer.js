import React from "react";
import Modal from "react-modal";
import AddCustomer from "./AddCustomer";
import { customStyles, buttonStyle } from "./ModalStyle";
const EditCustomer = ({ id, name, email, mobile, open, toggle }) => {
  return (
    <div>
      <Modal isOpen={open} onRequestClose={toggle} style={customStyles}>
        <h1>Edit Customer</h1>
        <AddCustomer
          id={id}
          name={name}
          email={email}
          mobile={mobile}
          toggle={toggle}
        />

        <button onClick={toggle} style={buttonStyle}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EditCustomer;
