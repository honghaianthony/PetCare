import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "./ShoppingCartItem.css";

const ShoppingCartItem = (props) => {
  const [num, setNum] = useState(props.numOfProductsInCart);
  const [deleteItem, setDeleteItem] = useState(false);
  const [display, setDisplay] = useState(false);

  const deleteProduct = () => {
    setDeleteItem(true);
    setDisplay(!display);
    props.handleChange(true, 0);
  };

  const setValue = (e) => {
    props.handleChange(e.target.checked, num);
  };
  return (
    <>
      {deleteItem === true ? (
        <div></div>
      ) : (
        <>
          <div
            className={
              display
                ? "ShoppingCartItem-Popup-Display"
                : "ShoppingCartItem-Popup-NoDisplay"
            }
          >
            <div>
              <h3>Xóa sản phẩm</h3>
              <p>
                Bạn có chắc muốn xóa sản phẩm {props.name} ra khỏi giỏ hàng?
              </p>
              <p>
                <button
                  className="ShoppingCartItem-Popup-B1"
                  onClick={() => deleteProduct()}
                >
                  Có
                </button>
                <button
                  className="ShoppingCartItem-Popup-B2"
                  onClick={() => setDisplay(!display)}
                >
                  Không
                </button>
              </p>
            </div>
          </div>
          <div className="ShoppingCart-BodyItem">
            <div>
              <input
                type="checkbox"
                id={props.productId}
                checked={props.valueCheck}
                className="ShoppingCart-Checkbox"
                onChange={(e) => {
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
                        let n = num - 1;
                        setNum(n);
                        props.handleChange(props.valueCheck, n);
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
                      if (
                        (e.target.value * 10) / 10 >
                        props.numOfProductsInStock
                      ) {
                        setNum(props.numOfProductsInStock);
                        props.handleChange(
                          props.valueCheck,
                          props.numOfProductsInStock
                        );
                      } else if ((e.target.value * 10) / 10 < 1) {
                        setNum(1);
                        props.handleChange(props.valueCheck, 1);
                      } else {
                        let n = (e.target.value * 10) / 10;
                        setNum(n);
                        props.handleChange(props.valueCheck, n);
                      }
                    }}
                  />
                  <button
                    className="ShoppingCartItem-amount-b2"
                    onClick={() => {
                      if (num < props.numOfProductsInStock) {
                        let n = num + 1;
                        setNum(n);
                        props.handleChange(props.valueCheck, n);
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
                  onClick={() => setDisplay(!display)}
                >
                  <Icon icon="fluent:delete-32-regular" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ShoppingCartItem;
