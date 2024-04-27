import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom d-flex justify-content-center align-items-center mb-3">
      <button className="btn btn-danger col-2" onClick={() =>{
        {props.resetQuantity()}
      }}>Reset</button>
      <div className="col-4 text-center">
        ₹{props.totalAmount}
      </div>
      <button className="btn btn-primary col-2">Pay Now</button>
    </div>
  )
}
