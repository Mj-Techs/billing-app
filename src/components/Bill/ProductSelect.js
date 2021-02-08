import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { addLineItems } from "../../action/billAction";

const ProductSelect = () => {
  const products = useSelector((state) => state.product);
  const [productId, setProductId] = useState(
    localStorage.getItem("productId") ? localStorage.getItem("productId") : ""
  );
  const [quant, setQuantity] = useState(
    localStorage.getItem("quant") ? parseInt(localStorage.getItem("quant")) : 1
  );
  const dispatch = useDispatch();
  const handleProduct = (e) => {
    setProductId(e.target.value);
    localStorage.setItem("productId", e.target.value);
  };
  const handleClick = () => {
    if (productId.length > 0 && quant) {
      const data = { product: productId, quantity: quant };
      dispatch(addLineItems(data));
      setProductId("");
      setQuantity(1);
    } else {
      swal("OoOo", "something you are missing", "error");
    }
  };

  return (
    <div className="select_product">
      <select value={productId} onChange={handleProduct} className="select">
        <option value="">select product</option>
        {products.map((product) => {
          return (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          );
        })}
      </select>
      <div className="quant">
        <button
          className="butn"
          onClick={() => {
            setQuantity(quant === 1 ? 1 : quant - 1);
            localStorage.setItem("quant", quant - 1);
          }}
        >
          -
        </button>
        <p className="quant-text">{quant}</p>
        <button
          className="butn"
          onClick={() => {
            setQuantity(quant + 1);
            localStorage.setItem("quant", quant + 1);
          }}
        >
          +
        </button>
        <button className="butn" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductSelect;
