import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Icon } from "@iconify/react";
import PaymentItem from "../../components/PaymentItem";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const [shippingFee, setShippingFee] = useState(0);

  const order = {
    orderId: 1,
    sum: 840,
    product: [
      {
        productId: "1",
        name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
        img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
        price: 450,
        numOfProductsInCart: 1,
      },
      {
        productId: "2",
        name: "Banh bảy màu cho chó mèo.",
        img: "https://i.postimg.cc/Gt71bY3B/d60738f3301cf7bdf574daedcccd26b5.jpg",
        price: 240,
        numOfProductsInCart: 2,
      },
      {
        productId: "3",
        name: "Chuột và cầu lông bằng bông cho mèo.",
        img: "https://i.postimg.cc/C5DjgCs7/do-choi-cho-meo-ma-dccm176.jpg",
        price: 150,
        numOfProductsInCart: 3,
      },
    ],
  };

  const handleShippingFee = (e) => {
    if (e.target.name === "city") {
      if (e.target.value === "Hồ Chí Minh") setShippingFee(32);
      else setShippingFee(32);
      console.log(shippingFee);
    }
  };
  const handleSubmit = (e) => {
    // const info = {
    //   orderId: order.orderId,
    //   name: e.target.name.value,
    //   city: e.target.city.value,
    //   address: e.target.address.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    // };
    navigate("/product");
  };
  return (
    <MainLayout>
      <div className="Payment">
        <div className="Payment-Title">
          <div>
            <div className="Payment-Title-Icon">
              <Icon icon="bi:bag-heart-fill" fontSize="32px" />
            </div>
            <div className="Payment-Title-Content">
              <h3>Thanh toán</h3>
            </div>
          </div>
        </div>
        <div className="Payment-Content">
          <div className="Payment-Content-User">
            <div className="Payment-Content-User-Title">
              <Icon icon="carbon:location-heart-filled" fontSize="36px" />
              <h3>Thông tin người nhận hàng</h3>
            </div>
            <div className="Payment-Content-User-Content">
              <Formik
                initialValues={{
                  name: "",
                  city: "An Giang",
                  address: "",
                  email: "",
                  phone: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (values.name === "") {
                    errors.name = "Bạn chưa điền họ tên!";
                  }
                  if (values.email === "") {
                    errors.email = "Bạn chưa điền email!";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Email không hợp lệ!";
                  }

                  if (values.phone !== "") {
                    if (
                      /((09|03|07|08|05)+([0-9]{8})\b)/g.test(values.phone) ===
                      false
                    ) {
                      errors.phone = "Số điện thoại không đúng định dạng!";
                    }
                  } else {
                    errors.phone = "Bạn chưa điền số điện thoại!";
                  }
                  return errors;
                }}
              >
                {() => (
                  <Form
                    onChange={(e) => {
                      handleShippingFee(e);
                    }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    <Field name="name" placeholder="Họ và tên" />
                    <ErrorMessage name="name" component="div" />
                    <Field name="city" as="select">
                      <option value="An Giang">An Giang</option>
                      <option value="Bà Rịa-Vũng Tàu">Bà Rịa-Vũng Tàu</option>
                      <option value="Bạc Liêu">Bạc Liêu</option>
                      <option value="Bắc Kạn">Bắc Kạn</option>
                      <option value="Bắc Giang">Bắc Giang</option>
                      <option value="Bắc Ninh">Bắc Ninh</option>
                      <option value="Bến Tre">Bến Tre</option>
                      <option value="Bình Dương">Bình Dương</option>
                      <option value="Bình Định">Bình Định</option>
                      <option value="Bình Phước">Bình Phước</option>
                      <option value="Bình Thuận">Bình Thuận</option>
                      <option value="Cà Mau">Cà Mau</option>
                      <option value="Cao Bằng">Cao Bằng</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Đắk Lắk">Đắk Lắk</option>
                      <option value="Đắk Nông">Đắk Nông</option>
                      <option value="Điện Biên">Điện Biên</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                      <option value="Đồng Tháp">Đồng Tháp</option>
                      <option value="Gia Lai">Gia Lai</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Hà Nam">Hà Nam</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hà Tĩnh">Hà Tĩnh</option>
                      <option value="Hải Dương">Hải Dương</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Hậu Giang">Hậu Giang</option>
                      <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                      <option value="Hòa Bình">Hòa Bình</option>
                      <option value="Hưng Yên">Hưng Yên</option>
                      <option value="Khánh Hòa">Khánh Hòa</option>
                      <option value="Kiên Giang">Kiên Giang</option>
                      <option value="Kon Tum">Kon Tum</option>
                      <option value="Lai Châu">Lai Châu</option>
                      <option value="Lâm Đồng">Lâm Đồng</option>
                      <option value="Lạng Sơn">Lạng Sơn</option>
                      <option value="Lào Cai">Lào Cai</option>
                      <option value="Long An">Long An</option>
                      <option value="Nam Định">Nam Định</option>
                      <option value="Nghệ An">Nghệ An</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Ninh Thuận">Ninh Thuận</option>
                      <option value="Phú Thọ">Phú Thọ</option>
                      <option value="Phú Yên">Phú Yên</option>
                      <option value="Quảng Bình">Quảng Bình</option>
                      <option value="Quảng Nam">Quảng Nam</option>
                      <option value="Quảng Ngãi">Quảng Ngãi</option>
                      <option value="Quảng Ninh">Quảng Ninh</option>
                      <option value="Quảng Trị">Quảng Trị</option>
                      <option value="Sóc Trăng">Sóc Trăng</option>
                      <option value="Sơn La">Sơn La</option>
                      <option value="Tây Ninh">Tây Ninh</option>
                      <option value="Thái Bình">Thái Bình</option>
                      <option value="Thái Nguyên">Thái Nguyên</option>
                      <option value="Thanh Hóa">Thanh Hóa</option>
                      <option value="Thừa Thiên - Huế">Thừa Thiên - Huế</option>
                      <option value="Tiền Giang">Tiền Giang</option>
                      <option value="Trà Vinh">Trà Vinh</option>
                      <option value="Tuyên Quang">Tuyên Quang</option>
                      <option value="Vĩnh Long">Vĩnh Long</option>
                      <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                      <option value="Yên Bái">Yên Bái</option>
                    </Field>
                    <Field name="address" as="textarea" placeholder="Địa chỉ" />
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />
                    <Field name="phone" placeholder="Số điện thoại" />
                    <ErrorMessage name="phone" component="div" />
                    <p>Vui lòng thanh toán khi nhận được hàng!</p>
                    <button type="submit">Đặt hàng</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="Payment-Content-Product">
            <h4>Đơn hàng ({order.product.length} sản phẩm)</h4>
            {order.product.map((item, index) => {
              return (
                <PaymentItem
                  productId={item.productId}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  numOfProductsInCart={item.numOfProductsInCart}
                  key={index}
                />
              );
            })}
            <div className="Payment-Content-Product-Summary">
              <p>
                <span>Tổng tiền sản phẩm:</span>
                <span>{order.sum}.000đ</span>
              </p>
              <p>
                <span>Phí vận chuyển:</span>
                <span>{shippingFee === 0 ? <>0đ</> : <>32.000đ</>}</span>
              </p>
              <div>
                <span>Tổng thanh toán:</span>
                <span className="Payment-Content-Product-Summary-Price">
                  {shippingFee + order.sum}.000đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default Payment;
