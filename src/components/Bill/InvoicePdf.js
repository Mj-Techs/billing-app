import React from "react";
import Pdf from "react-to-pdf";
import BillDisplay from "./BillDisplay";

const ref = React.createRef();
const InvoicePdf = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="bill.pdf">
        {({ toPdf }) => (
          <button className="gen_butn" onClick={toPdf}>
            capture as PDF
          </button>
        )}
      </Pdf>
      <div
        ref={ref}
        style={{
          width: 790,
          height: "auto",
          margin: "10px 90px",
        }}
      >
        <BillDisplay />
      </div>
    </div>
  );
};

export default InvoicePdf;
