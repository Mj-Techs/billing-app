import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ShowProduct from "./ShowProduct";
const ProductContainer = () => {
  const [searchText, setSearchText] = useState("");
  let products = useSelector((state) => state.product);
  const handleSearch = (e) => {
    const name = e.target.value;
    setSearchText(name);
  };
  products = products.filter(
    (product) => product.name.toLowerCase().indexOf(searchText) !== -1
  );
  return (
    <div className="product_container">
      <div className="product_container_title">
        Add Product
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="search.."
          className="search_customer"
        />
      </div>
      <div className="form_container">
        <AddProduct />
      </div>
      <div className="display_product_card">
        {products.length === 0 ? (
          <p>There is no existing product</p>
        ) : (
          products.map((product) => (
            <ShowProduct {...product} key={product._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
