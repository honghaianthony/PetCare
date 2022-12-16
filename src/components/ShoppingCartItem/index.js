import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import "./ShoppingCartItem.css";
import { deleteCart } from "../../apis/cartApi";

const ShoppingCartItem = (props) => {
  const [num, setNum] = useState(props.numOfProductsInCart);
  const [display, setDisplay] = useState(false);

  return (
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
          <p>Bạn có chắc muốn xóa sản phẩm {props.name} ra khỏi giỏ hàng?</p>
          <p>
            <button
              className="ShoppingCartItem-Popup-B1"
              onClick={async () => {
                await deleteCart(props.id);
                setDisplay(!display);
                props.onDelete(props.id);
              }}
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
            onClick={() => props.onSelect()}
          />
        </div>
        <div className="ShoppingCartItem">
          <div className="ShoppingCartItem-Img">
            <img src={props.img} alt={props.name} />
          </div>
          <div className="ShoppingCartItem-Content">
            <span className="ShoppingCartItem-Name">{props.name}</span>
            <span className="ShoppingCart-Long120 ShoppingCartItem-Price">
              {props.price.toLocaleString()}
            </span>
            <div className="ShoppingCart-Long120 ShoppingCartItemAcount ">
              <button
                className="ShoppingCartItem-amount-b1"
                onClick={() => {
                  if (num > 1) {
                    setNum(num - 1);
                    props.onAmountChange(num - 1);
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
                disabled
              />
              <button
                className="ShoppingCartItem-amount-b2"
                onClick={() => {
                  if (num < props.numOfProductsInStock) {
                    setNum(num + 1);
                    props.onAmountChange(num + 1);
                  }
                }}
              >
                +
              </button>
            </div>
            <span className="ShoppingCart-Long120 ShoppingCartItem-Price2">
              {(num * props.price).toLocaleString()}
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
  );
};
export default ShoppingCartItem;
