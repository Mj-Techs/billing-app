import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startGetAccount } from "../../action/userAction";

const BillDisplay = () => {
  const customers = useSelector((state) => state.customer);
  const products = useSelector((state) => state.product);
  const bill = useSelector((state) => state.currentBill);
  const admin = useSelector((state) => state.admin);
  let customer = [];
  let arr = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetAccount());
  }, [dispatch]);
  const displayName = (id) => {
    customer = customers.filter((user) => user._id === id);

    return customer[0]?.name;
  };

  const displayProductName = (id) => {
    arr = products.filter((product) => product._id === id);
    return arr[0]?.name;
  };

  return (
    <div className="show_bill">
      <div className="invoice_title">Invoice</div>
      <div className="invoice_header">
        <div>{displayName(bill[0]?.customer)}</div>
        <div className="invoice_date">
          {bill[0]?.date
            .slice(0, bill[0].date.indexOf("T"))
            .split("-")
            .join("/")}
        </div>
      </div>
      <div className="invoice_table">
        <table className="bill_table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>price</th>
              <th>subTotal</th>
            </tr>
          </thead>
          <tbody>
            {bill[0]?.lineItems.map((product) => {
              return (
                <tr key={product.product}>
                  <td>{displayProductName(product.product)}</td>
                  <td>{product.quantity}</td>
                  <td>{arr[0].price}</td>
                  <td>{arr[0].price * parseInt(product.quantity)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="invoice_total">Total-{bill[0]?.total}</div>
      <div className="invoice_sign">
        <h2 className="admin_sign">{admin.username}</h2>
        <p>Signature</p>
      </div>
    </div>
  );
};

export default BillDisplay;
