import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddCustomer from "./AddCustomer";
import ShowCustomer from "./ShowCustomer";

const CustomerContainer = () => {
  const [searchText, setSearchText] = useState("");
  let customers = useSelector((state) => state.customer);
  const handleSearch = (e) => {
    const name = e.target.value;
    setSearchText(name);
  };
  customers = customers.filter(
    (customer) => customer.name.toLowerCase().indexOf(searchText) !== -1
  );
  return (
    <div className="customer_container">
      <div className="customer_container_title">
        Add Customer
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="search.."
          className="search_customer"
        />
      </div>
      <div className="form_container">
        <AddCustomer />
      </div>
      <div className="display_customer_card">
        {customers.length === 0 ? (
          <p>There is no existing customer</p>
        ) : (
          customers.map((customer) => (
            <ShowCustomer {...customer} key={customer._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerContainer;
