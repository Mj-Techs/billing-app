import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeLineItems } from "../../action/billAction";
const ShowAddedProduct = () => {
  const lineItems = useSelector((state) => state.lineItem);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let arr = [];
  const displayName = (id) => {
    arr = products.filter((product) => product._id === id);
    return arr[0].name;
  };
  const removeProduct = (id) => {
    dispatch(removeLineItems(id));
  };
  return (
    <div className="showproduct">
      {lineItems.length === 0 ? (
        <p className="p_text">Add Your Product</p>
      ) : (
        <table border="2">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>price</th>
              <th>subTotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((product) => {
              return (
                <tr key={product.product}>
                  <td>{displayName(product.product)}</td>
                  <td>{product.quantity}</td>
                  <td>{arr[0].price}</td>
                  <td>{arr[0].price * parseInt(product.quantity)}</td>
                  <td>
                    <button onClick={() => removeProduct(product.product)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowAddedProduct;
