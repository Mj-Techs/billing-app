import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { startGetAccount } from "../../action/userAction";
import { startDeleteBill } from "../../action/billAction";
const Displaybill = ({ bill }) => {
  const customers = useSelector((state) => state.customer);
  const products = useSelector((state) => state.product);
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
    <div className="bill_card">
      <div className="invoice_title">Invoice</div>
      <div className="invoice_header">
        <div>{displayName(bill.customer)}</div>
        <div className="invoice_date">
          {bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}
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
            {bill.lineItems.map((product) => {
              return (
                <tr key={product.product}>
                  <td>{displayProductName(product.product)}</td>
                  <td>{product.quantity}</td>
                  <td>{arr[0]?.price}</td>
                  <td>{arr[0]?.price * parseInt(product.quantity)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="invoice_total">Total-{bill.total}</div>
      <div className="invoice_sign_bill">
        <div>
          <MdDelete
            className="delete_bill"
            size={30}
            onClick={() => dispatch(startDeleteBill(bill?._id))}
          />
        </div>
        <div>
          <h2 className="admin_sign">{admin.username}</h2>
          <p>Signature</p>
        </div>
      </div>
    </div>
  );
};

export default Displaybill;
