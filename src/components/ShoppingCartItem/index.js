import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "./ShoppingCartItem.css";

const ShoppingCartItem = (props) => {
  const [num, setNum] = useState(props.numOfProductsInCart);
  const [deleteItem, setDeleteItem] = useState(false);
  const [c, setC] = useState(false);

  const deleteProduct = (e) => {
    e.preventDefault();
    setDeleteItem(true);
    if (c === true) props.callPrice(-num * props.price);
  };
  const setValue = (e) => {
    if (e.target.checked === true) props.callPrice(num * props.price);
    else props.callPrice(-num * props.price);
  };
  return (
    <>
      {deleteItem === true ? (
        <div></div>
      ) : (
        <div className="ShoppingCart-BodyItem">
          <div>
            <input
              type="checkbox"
              id={props.productId}
              className="ShoppingCart-Checkbox"
              onClick={(e) => {
                setC(!c);
                setValue(e);
              }}
            />
          </div>
          <div className="ShoppingCartItem">
            <div className="ShoppingCartItem-Img">
              <img src={props.img} alt={props.name} />
            </div>
            <div className="ShoppingCartItem-Content">
              <span className="ShoppingCartItem-Name">{props.name}</span>
              <span className="ShoppingCart-Long120 ShoppingCartItem-Price">
                {props.price}
              </span>{" "}
              <div className="ShoppingCart-Long120 ShoppingCartItemAcount ">
                <button
                  className="ShoppingCartItem-amount-b1"
                  onClick={() => {
                    if (num > 1) {
                      setNum(num - 1);
                      if (c === true) props.callPrice(-props.price);
                    }
                  }}
                >
                  -
                </button>
                <input
                  name="amount"
                  type="number"
                  min="1"
                  max={props.numOfProductsInStock}
                  value={num}
                  onChange={(e) => {
                    if ((e.target.value * 10) / 10 > props.numOfProductsInStock)
                      setNum(props.numOfProductsInStock);
                    else if ((e.target.value * 10) / 10 < 1) setNum(1);
                    else {
                      if (c === true) {
                        props.callPrice(-num * props.price);
                        props.callPrice(e.target.value * props.price);
                      }

                      setNum((e.target.value * 10) / 10);
                    }
                  }}
                />
                <button
                  className="ShoppingCartItem-amount-b2"
                  onClick={() => {
                    if (num < props.numOfProductsInStock) {
                      setNum(num + 1);
                      if (c === true) props.callPrice(props.price);
                    }
                  }}
                >
                  +
                </button>
              </div>
              <span className="ShoppingCart-Long120 ShoppingCartItem-Price2">
                {num * props.price}
              </span>
              <button
                className="ShoppingCartItem-Delete"
                onClick={(e) => {
                  deleteProduct(e);
                }}
              >
                <Icon icon="fluent:delete-32-regular" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCartItem;
