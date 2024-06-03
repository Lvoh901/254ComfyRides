import React from "react";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <div style={{border:"1px solid #000000", padding:"1em"}}>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" /> M-Pesa
        </label>
      </div>

      <div className="payment text-start mt-5">
        <button>Reserve Now</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
