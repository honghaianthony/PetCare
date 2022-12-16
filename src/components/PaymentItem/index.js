import React from "react";
import { useState } from "react";
import "./PaymentItem.css";

const PaymentItem = (props) => {
  return (
    <div className="PaymentItem">
      <div className="PaymentItem-Image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="PaymentItem-Content">
        <p>{props.name}</p>
        <div>
          <span>x{props.numOfProductsInCart}</span>
          <b>{props.price.toLocaleString()}đ</b>
        </div>
      </div>
    </div>
  );
};

export default PaymentItem;
