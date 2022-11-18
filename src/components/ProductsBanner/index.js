import React from "react";
import "./ProductsBanner.css";
const ProductsBanner = () => {
  return (
    <>
      <section className="Products_banner_container">
        <div className="Products_banner_container_detail"></div>
      </section>
      <section className="Products_banner_container_second">
        <div className="Products_banner_container_detail_second">
          <h2>Pet Care</h2>
          <div className="Products_banner_container_detail_second_h3">
          <h3>Thức ăn phụ kiện cho thú cưng chó mèo</h3>
          </div>
        </div>
        <img
          src="/assets/images/Products/kisspng-dra-pety-cat-dog-pet-shop-pets-png-images-5badbc267bb513.1372752415381125505067.png"
          alt="product-banner"
          className="product-banner-img-item"
        />
      </section>
    </>
  );
};

export default ProductsBanner;
