import React from "react";
import "./CardProductDetail.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailStar from "../ProductReviewStar/index";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardProductDetail2 = (props) => {
  const navigate = useNavigate();
  const handleGoTo = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
        className="card__product__container__second"
      >
        <Link
          className=" card__product__container__second"
          to={`/product/${props.id}`}
        >
          <div className="CardProductDetail_img_container_top_second">
            <img
              src={props.img}
              alt={props.name}
              className="CardProductDetail_img_detail_second"
            />
            <span className="Name_of_card_product_second">{props.name}</span>
          </div>
          <div className="CardProductDetail_img_container_bottom_second">
            {props.sale === 0 ? (
              <p className="Price_of_card_product_container_second">
                <span className="Price_of_card_product_second">
                  {props.price.toLocaleString()}
                  <sup>đ</sup>
                </span>
              </p>
            ) : (
              <p className="discount_price_product">
                <span className="price__before_discount">
                  {props.price.toLocaleString()}
                  <sup>đ</sup>
                </span>
                <b className="price_after_discount_second">
                  {(
                    props.price -
                    (props.price * props.sale) / 100
                  ).toLocaleString()}
                  <sup>đ</sup>
                </b>
              </p>
            )}

            <div className="Rating__card_product_container">
              <div className="Rating__card_product_detail">
                <ProductDetailStar rate={props.rate} />
              </div>
              <span className="Solds__card_second">
                Đã bán {props.numOfProductsSold}
              </span>
            </div>
          </div>
          {props.sale > 0 && (
            <div className="discount_item_product_container_second">
              <div className="Number_discount_sale_product_second">
                <span>-{props.sale}%</span>
              </div>
            </div>
          )}
          <div className="Review_Buy_Product_container_second">
            {/* <div
                            className="quick_view_button_second"
                            
                        >
                            
                            <span className="quick_view_text">Xem nhanh</span>
                            <Icon
                                icon="emojione-monotone:eye"
                                color="white"
                                className="icon_quick_view"
                            />
                            
                        </div> */}
            <div
              className="add_to_cart_button_second"
              onClick={handleGoTo}
              // to={`/product/${props.id}`}
            >
              {/* <button className="add_to_cart_button"> */}
              <span className="add_to_cart_text_second">Mua ngay</span>
              <Icon
                icon="el:shopping-cart"
                color="white"
                className="add_to_cart_icon"
              />
              {/* </button> */}
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default CardProductDetail2;
