import React from "react";
import "./ServiceChoice.css";
import { Icon } from "@iconify/react";
import "@fontsource/nunito";
const ServiceChoice = ({handleClick}) => {
  // console.log(handleClick)
  return (
    <>
      <section className="service__choice__container">
        <div className="service__choice__container__detail">
          <h3 className="text__header__choice">
            3 ĐIỀU KHIẾN CHO PETCARE TRỞ THÀNH LỰA CHỌN HÀNG ĐẦU CỦA BẠN:
          </h3>
          <div className="underline__service__choice"></div>
          <div className="service_choice_content_container">
            <div className="service_choice_content">
              <Icon
                icon="ant-design:check-circle-twotone"
                color="white"
                className="icon__service"
              />
              <p className="text__choice__service">
                LUÔN ĐẶT YÊU CẦU KHÁCH HÀNG Ở VỊ TRÍ CAO NHẤT
              </p>
            </div>
            <div className="service_choice_content">
              <Icon
                icon="icon-park-outline:good-two"
                color="white"
                className="icon__service"
              />
              <p className="text__choice__service">
                CHẤT LƯỢNG HÀNG ĐẦU TRONG THỊ TRƯỜNG
              </p>
            </div>
            <div className="service_choice_content">
              <Icon
                icon="dashicons:money-alt"
                color="white"
                className="icon__service"
              />
              <p className="text__choice__service">
                GIÁ THÀNH DỊCH VỤ Ở MỨC TỐT NHẤT
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="service__choice__container_second">
        <div className="service__choice__container__detail_second">
          <h3>DỊCH VỤ DÀNH CHO THÚ CƯNG</h3>
          <div className="service__choice__content_2">
            <div className="service__choice__content_item_2">
              <img
                src="/assets/images/Service/iconHotel@2x.png"
                alt="Huấn luyện"
                className="service__choice__content_item_img_2"
              />
              <h3>Huấn luyện</h3>
              <button
              className="service__choice__content_item_button_2"
              onClick={handleClick}
              >
                Đặt lịch ngay
              </button>
            </div>
            
            <div className="service__choice__content_item_2">
              <img
                src="/assets/images/Service/iconSpa@2x.png"
                alt="Làm Đẹp"
                className="service__choice__content_item_img_2"
              />
              <h3>Làm Đẹp</h3>
              <button
              className="service__choice__content_item_button_2"
              onClick={handleClick}
              >
                Đặt lịch ngay
              </button>
            </div>

            <div className="service__choice__content_item_2">
              <img
                src="/assets/images/Service/iconVet@2x.png"
                alt="Phòng Khám"
                className="service__choice__content_item_img_2"
              />
              <h3>Phòng Khám</h3>
              <button
              className="service__choice__content_item_button_2"
              onClick={handleClick}
              >
                Đặt lịch ngay
              </button>
            </div>

            <div className="service__choice__content_item_2">
              <img
                src="/assets/images/Service/iconShop@2x.png"
                alt="Mua Sắm"
                className="service__choice__content_item_img_2"
              />
              <h3>Mua Sắm</h3>
              <button
              className="service__choice__content_item_button_2"
              onClick={handleClick}
              >
                Đặt lịch ngay
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceChoice;
