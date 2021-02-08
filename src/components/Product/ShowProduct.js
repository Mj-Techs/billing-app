import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import EditProduct from "./EditProduct";
import { startRemoveProduct } from "../../action/productAction";
import styled from "styled-components";

const ProductCard = styled(
  ({ id, name, price, joinDate, handleDelete, handleEdit, ...props }) => {
    return (
      <div {...props}>
        <div id="items">
          <div className="image">
            <img src={"/received.svg"} alt="product logo" />
          </div>
          <h5 className="name">{name}</h5>
          <h6 className="price">{price}</h6>
          <span className="join-date">{joinDate}</span>
        </div>

        <div id="actions">
          <FaEdit size={20} className="edit" onClick={handleEdit} />

          <MdDelete
            size={20}
            className="delete"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    );
  }
)`
  display: grid;
  grid-template-rows: 1fr 32px;
  gap: 6px;
  background: rgba(223, 232, 207, 0.45);

  cursor: pointer;
  padding: 16px 16px;
  border-radius: 15px;
  min-height: 350px;

  #items {
    display: grid;
    gap: 6px;
  }

  #actions {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    border-radius: 15px;

    padding: 0 16px;

    .delete {
      color: red;
    }
    .edit {
      color: dodgerblue;
    }
  }

  :hover {
    border: 3px solid yellow;
  }

  .name {
    overflow-wrap: nowrap;
    font-size: 1.5rem;
  }
  .price {
    ::before {
      content: "INR: ";
    }
    font-size: 1rem;
  }
  .image {
    display: grid;
    place-items: center;
    img {
      width: 75%;
    }
  }

  .join-date {
    ::before {
      content: "Added: ";
    }
    color: black;
    font-size: 1rem;
  }
`;

const ShowProduct = ({ name, price, createdAt, _id }) => {
  const [editProduct, setEditProduct] = useState(false);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(false);
  };
  const handleDelete = (id) => {
    dispatch(startRemoveProduct(id));
  };
  const handleEdit = () => {
    setEditProduct(!editProduct);
    setOpen(true);
  };
  return (
    <div>
      <ProductCard
        id={_id}
        name={name}
        price={price}
        joinDate={createdAt
          .slice(0, createdAt.indexOf("T"))
          .split("-")
          .join("/")}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {editProduct && (
        <EditProduct
          id={_id}
          name={name}
          price={price}
          open={open}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default ShowProduct;
