import React from "react";
import "./CardProductDetail.css";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailStar from "../ProductReviewStar/index";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CardProductDetail = (props) => {
    function ChangeToSlug(str) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
        str = str.replace(/(đ)/g, "d");

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, "");

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, "-");

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, "");

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, "");

        // return
        return str;
    }
    const navigate = useNavigate();
    const handleGoTo = () => {
        navigate(
            "/product/" + ChangeToSlug(props.name) + "." + props.id + ".html"
        );
    };
    return (
        <>
            <Link
                className=" card__product__container__"
                to={
                    "/product/" +
                    ChangeToSlug(props.name) +
                    "." +
                    props.id +
                    ".html"
                }
            >
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
                                {(props.price * 1).toLocaleString()}
                                <sup>đ</sup>
                            </span>
                        </p>
                    ) : (
                        <p className="discount_price_product">
                            <span className="price__before_discount">
                                {props.price.toLocaleString()}
                                <sup>đ</sup>
                            </span>
                            <b className="price_after_discount">
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
                        <span className="Solds__card">
                            Đã bán {props.numOfProductsSold}
                        </span>
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
                    {/*button onClick navigate tới cái */}
                    {/* <div
                        className="quick_view_button_"

                    >
                        
                        <span className="quick_view_text">Xem nhanh</span>
                        <Icon
                            icon="emojione-monotone:eye"
                            color="white"
                            className="icon_quick_view"
                        />
                      
                    </div> */}
                    <div
                        className="add_to_cart_button"
                        // to={`/product/${props.id}`}
                        onClick={handleGoTo}
                    >
                        {/* <button className="add_to_cart_button"> */}
                        <span className="add_to_cart_text">Mua ngay</span>
                        <Icon
                            icon="el:shopping-cart"
                            color="white"
                            className="add_to_cart_icon"
                        />
                        {/* </button> */}
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CardProductDetail;
