import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { startRemoveCustomer } from "../../action/customerAction";
import EditCustomer from "./EditCustomer";

import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CustomerProfile = styled(
  ({
    id,
    to,
    name,
    email,
    mobile,
    joinDate,
    handleDelete,
    handleEdit,
    ...props
  }) => {
    const history = useHistory();
    return (
      <div {...props}>
        <div id="items">
          <div
            className="image"
            onClick={() => {
              history.push(to);
            }}
          >
            <img src={"/bussiness-man.svg"} alt="person logo" />
          </div>
          <h5 className="name">{name}</h5>
          <a href={`mailto:${email}`} className="email">
            {email}
          </a>
          <h6 className="mobile">{mobile}</h6>
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
  min-height: 380px;

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
    border: 3px solid dodgerblue;
  }

  .name {
    :before {
      content: "Mr. ";
      color: dodgerblue;
    }
    overflow-wrap: nowrap;
    font-size: 1.5rem;
  }

  .image {
    display: grid;
    place-items: center;
    img {
      width: 75%;
    }
  }

  a.email {
    text-decoration: unset;
    color: dodgerblue;
    font-size: 1rem;
  }

  .mobile {
    color: dodgerblue;
    font-size: 1rem;
  }

  .join-date {
    ::before {
      content: "DOJ: ";
    }
    color: black;
    font-size: 1rem;
  }
`;

const ShowCustomer = ({ name, mobile, email, createdAt, _id }) => {
  const [editCustomer, setEditCustomer] = useState(false);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(startRemoveCustomer(id));
  };

  const handleEdit = () => {
    setEditCustomer(!editCustomer);
    setOpen(true);
  };

  return (
    <div>
      <CustomerProfile
        to={`/customer/${_id}`}
        id={_id}
        name={name}
        email={email}
        mobile={mobile}
        joinDate={createdAt
          .slice(0, createdAt.indexOf("T"))
          .split("-")
          .join("/")}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {editCustomer && (
        <EditCustomer
          id={_id}
          name={name}
          email={email}
          mobile={mobile}
          open={open}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default ShowCustomer;
