import React from "react";
import "./CardProductDetail.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailStar from "../ProductReviewStar/index";
const CardProductDetail = (props) => {


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

              className="price__before_discount"
            >
              {props.price}.000
              <sup>đ</sup>
            </span>
            <b
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
      <div className="Review_Buy_Product_container">
        <Link className="quick_view_button_" to={`/product/${props.id}`}>
          {/* <button className="quick_view_button_"> */}
            <span className="quick_view_text">Xem nhanh</span>
            <Icon icon="emojione-monotone:eye" color="white" className="icon_quick_view" />
          {/* </button> */}
        </Link>
        <Link className="add_to_cart_button" to={`/product/${props.id}`}>
        {/* <button className="add_to_cart_button"> */}
          <span className="add_to_cart_text" >Mua ngay</span>
          <Icon icon="el:shopping-cart" color="white" className="add_to_cart_icon" />
        {/* </button> */}
        </Link>
      </div>
    </Link>
  );
};

export default CardProductDetail;
