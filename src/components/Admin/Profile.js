import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetAccount } from "../../action/userAction";

import styled from "styled-components";

const AdminProfile = styled(
  ({ name, email, business, address, joinDate, ...props }) => {
    return (
      <div {...props}>
        <div id="items">
          <div className="image">
            <img src={"/bussiness-man.svg"} alt="person logo" />
          </div>
          <h5 className="name">{name}</h5>
          <a href={`mailto:${email}`} className="email">
            {email}
          </a>
          <h6 className="business">{business}</h6>
          <h6 className="address">{address}</h6>
          <span className="join-date">{joinDate}</span>
        </div>
      </div>
    );
  }
)`
  display: grid;
  width: 450px;
  grid-template-rows: 1fr;
  background: rgba(223, 232, 207, 0.45);
  margin: 10px 30%;
  cursor: pointer;
  padding: 16px 16px;
  border-radius: 15px;

  #items {
    display: grid;
    gap: 6px;
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
      height: 300px;
    }
  }

  a.email {
    text-decoration: unset;
    color: dodgerblue;
    font-size: 1rem;
  }

  .business {
    ::before {
      content: "Business: ";
    }
    font-size: 1rem;
  }
  .address {
    ::before {
      content: "Address: ";
    }
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
const Profile = () => {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(startGetAccount());
  }, [dispatch]);
  return (
    <div>
      <AdminProfile
        name={admin.username}
        email={admin.email}
        business={admin.businessName}
        address={admin.address}
        joinDate={admin?.createdAt
          ?.slice(0, admin.createdAt.indexOf("T"))
          .split("-")
          .join("/")}
      />
    </div>
  );
};

export default Profile;
