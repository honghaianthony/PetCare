import React from "react";
import "./CardProductDetail.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailStar from "../ProductReviewStar/index";
const CardProductDetail = (props) => {
  // const rating = {
  //   icon: "emojione:star",
  // };

  return (
    
    <Link className=" card__product__container__" id={props.id} to={`/product/${props.id}`}>
      <div className="CardProductDetail_img_container_top">
        <img
          src={props.img}
          alt={props.name}
          className="CardProductDetail_img_detail"
        />
        <span className="Name_of_card_product">{props.name}</span>
      </div>
      <div className="CardProductDetail_img_container_bottom">
        {props.sale === 0 ? (
          <p className="Price_of_card_product_container">
            <span className="Price_of_card_product">
              {props.price}.000
              <sup>đ</sup>
            </span>
          </p>
        ) : (
          <p className="discount_price_product">
            <span
              // style={{
              //   textDecorationLine: "line-through",
              //   color: "#ccc",
              //   fontSize: "20px",
              // }}
              className="price__before_discount"
            >
              {props.price}.000
              <sup>đ</sup>
            </span>
            <b
              // style={{
              //   color: "red",
              //   fontSize: "20px",
              //   padding: "0px 0px 0px 20px",
              //   fontWeight: 700,
              // }}
              className="price_after_discount"
            >
              {props.price - (props.price * props.sale) / 100}
              .000
              <sup>đ</sup>
            </b>
          </p>
        )}

        <div className="Rating__card_product_container">
          <div className="Rating__card_product_detail">
            {/* {Array(5)
                .fill(rating)
                .map((star, i) => {
                  return (
                    <label key={i}>
                      <Icon icon={star.icon} />
                    </label>
                  );
                })} */}
            {/* <ProductDetailStar rate={props.rate} /> */}
            <ProductDetailStar rate={props.rate} />
          </div>
          <span className="Solds__card">Đã bán {props.numOfProductsSold}</span>
        </div>
      </div>
      {props.sale > 0 && (
        <div className="discount_item_product_container">
          <img
            src="/assets/images/Products/302240086_531200318839590_2517707731116684581_n.png"
            alt="sale_discount"
            className="discount_item_product"
          />
          <div className="Number_discount_sale_product">
            <span>-{props.sale}%</span>
          </div>
        </div>
      )}
      {/* <img
        src="/assets/images/Products/302240086_531200318839590_2517707731116684581_n.png"
        alt="sale_discount"
        className="discount_item_product"
      />
      <div className="Number_discount_sale_product">
        <span>-{props.sale}%</span>
      </div> */}
    </Link>
  );
};

export default CardProductDetail;
