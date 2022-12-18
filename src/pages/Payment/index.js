import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../../components/SEO";
import MainLayout from "../../layouts/MainLayout";
import { Icon } from "@iconify/react";
import PaymentItem from "../../components/PaymentItem";
import "./Payment.css";
import { createOrder } from "../../apis/orderApi";
import Modal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { deleteCart } from "../../apis/cartApi";

function Payment() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "all" });
    const navigate = useNavigate();
    const [shippingFee, setShippingFee] = useState(32000);
    const [productList, setProductList] = useState(() =>
        JSON.parse(sessionStorage.getItem("productList"))
    );
    const [sum, setSum] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const [info, setInfo] = useState({});
    useEffect(() => {
        let res = 0;
        if (productList === null) return;
        for (let i = 0; i < productList.length; ++i) {
            res += productList[i].amount * productList[i].price;
        }
        setSum(res);
    }, []);
    const handleShippingFee = (e) => {
        if (e.target.name === "city") {
            if (e.target.value === "Hồ Chí Minh") {
                setShippingFee(0);
            } else {
                setShippingFee(32000);
            }
        }
    };
    return (
        <MainLayout>
            {productList ? (
                <>
                    <SEO
                        title="Thanh toán"
                        description="Website cung cấp dịch vụ chăm sóc thú cưng"
                        name="PetCare"
                        type="article"
                    />
                    <div className="Payment">
                        <div className="Payment-Title">
                            <div>
                                <div className="Payment-Title-Icon">
                                    <Icon
                                        icon="bi:bag-heart-fill"
                                        fontSize="32px"
                                    />
                                </div>
                                <div className="Payment-Title-Content">
                                    <h3>Thanh toán</h3>
                                </div>
                            </div>
                        </div>
                        <div className="Payment-Content">
                            <div className="Payment-Content-User">
                                <div className="Payment-Content-User-Title">
                                    <Icon
                                        icon="carbon:location-heart-filled"
                                        fontSize="36px"
                                    />
                                    <h3>Thông tin người nhận hàng</h3>
                                </div>
                                <div className="Payment-Content-User-Content">
                                    <form
                                        onSubmit={handleSubmit((data) => {
                                            setInfo({
                                                ...data,
                                                productList,
                                                sumPrice: sum,
                                                status: 0,
                                            });
                                            setConfirm(true);
                                        })}
                                    >
                                        <input
                                            placeholder="Họ và tên"
                                            {...register("fullName", {
                                                required: true,
                                            })}
                                            className={
                                                errors.fullName ? "invalid" : ""
                                            }
                                        />
                                        {errors.fullName && (
                                            <p className="invalid">
                                                Trường dữ liệu không được để
                                                trống
                                            </p>
                                        )}
                                        <select
                                            {...register("city")}
                                            onChange={(e) =>
                                                handleShippingFee(e)
                                            }
                                        >
                                            <option value="An Giang">
                                                An Giang
                                            </option>
                                            <option value="Bà Rịa-Vũng Tàu">
                                                Bà Rịa-Vũng Tàu
                                            </option>
                                            <option value="Bạc Liêu">
                                                Bạc Liêu
                                            </option>
                                            <option value="Bắc Kạn">
                                                Bắc Kạn
                                            </option>
                                            <option value="Bắc Giang">
                                                Bắc Giang
                                            </option>
                                            <option value="Bắc Ninh">
                                                Bắc Ninh
                                            </option>
                                            <option value="Bến Tre">
                                                Bến Tre
                                            </option>
                                            <option value="Bình Dương">
                                                Bình Dương
                                            </option>
                                            <option value="Bình Định">
                                                Bình Định
                                            </option>
                                            <option value="Bình Phước">
                                                Bình Phước
                                            </option>
                                            <option value="Bình Thuận">
                                                Bình Thuận
                                            </option>
                                            <option value="Cà Mau">
                                                Cà Mau
                                            </option>
                                            <option value="Cao Bằng">
                                                Cao Bằng
                                            </option>
                                            <option value="Cần Thơ">
                                                Cần Thơ
                                            </option>
                                            <option value="Đà Nẵng">
                                                Đà Nẵng
                                            </option>
                                            <option value="Đắk Lắk">
                                                Đắk Lắk
                                            </option>
                                            <option value="Đắk Nông">
                                                Đắk Nông
                                            </option>
                                            <option value="Điện Biên">
                                                Điện Biên
                                            </option>
                                            <option value="Đồng Nai">
                                                Đồng Nai
                                            </option>
                                            <option value="Đồng Tháp">
                                                Đồng Tháp
                                            </option>
                                            <option value="Gia Lai">
                                                Gia Lai
                                            </option>
                                            <option value="Hà Giang">
                                                Hà Giang
                                            </option>
                                            <option value="Hà Nam">
                                                Hà Nam
                                            </option>
                                            <option value="Hà Nội">
                                                Hà Nội
                                            </option>
                                            <option value="Hà Tĩnh">
                                                Hà Tĩnh
                                            </option>
                                            <option value="Hải Dương">
                                                Hải Dương
                                            </option>
                                            <option value="Hải Phòng">
                                                Hải Phòng
                                            </option>
                                            <option value="Hậu Giang">
                                                Hậu Giang
                                            </option>
                                            <option value="Hồ Chí Minh">
                                                Hồ Chí Minh
                                            </option>
                                            <option value="Hòa Bình">
                                                Hòa Bình
                                            </option>
                                            <option value="Hưng Yên">
                                                Hưng Yên
                                            </option>
                                            <option value="Khánh Hòa">
                                                Khánh Hòa
                                            </option>
                                            <option value="Kiên Giang">
                                                Kiên Giang
                                            </option>
                                            <option value="Kon Tum">
                                                Kon Tum
                                            </option>
                                            <option value="Lai Châu">
                                                Lai Châu
                                            </option>
                                            <option value="Lâm Đồng">
                                                Lâm Đồng
                                            </option>
                                            <option value="Lạng Sơn">
                                                Lạng Sơn
                                            </option>
                                            <option value="Lào Cai">
                                                Lào Cai
                                            </option>
                                            <option value="Long An">
                                                Long An
                                            </option>
                                            <option value="Nam Định">
                                                Nam Định
                                            </option>
                                            <option value="Nghệ An">
                                                Nghệ An
                                            </option>
                                            <option value="Ninh Bình">
                                                Ninh Bình
                                            </option>
                                            <option value="Ninh Thuận">
                                                Ninh Thuận
                                            </option>
                                            <option value="Phú Thọ">
                                                Phú Thọ
                                            </option>
                                            <option value="Phú Yên">
                                                Phú Yên
                                            </option>
                                            <option value="Quảng Bình">
                                                Quảng Bình
                                            </option>
                                            <option value="Quảng Nam">
                                                Quảng Nam
                                            </option>
                                            <option value="Quảng Ngãi">
                                                Quảng Ngãi
                                            </option>
                                            <option value="Quảng Ninh">
                                                Quảng Ninh
                                            </option>
                                            <option value="Quảng Trị">
                                                Quảng Trị
                                            </option>
                                            <option value="Sóc Trăng">
                                                Sóc Trăng
                                            </option>
                                            <option value="Sơn La">
                                                Sơn La
                                            </option>
                                            <option value="Tây Ninh">
                                                Tây Ninh
                                            </option>
                                            <option value="Thái Bình">
                                                Thái Bình
                                            </option>
                                            <option value="Thái Nguyên">
                                                Thái Nguyên
                                            </option>
                                            <option value="Thanh Hóa">
                                                Thanh Hóa
                                            </option>
                                            <option value="Thừa Thiên - Huế">
                                                Thừa Thiên - Huế
                                            </option>
                                            <option value="Tiền Giang">
                                                Tiền Giang
                                            </option>
                                            <option value="Trà Vinh">
                                                Trà Vinh
                                            </option>
                                            <option value="Tuyên Quang">
                                                Tuyên Quang
                                            </option>
                                            <option value="Vĩnh Long">
                                                Vĩnh Long
                                            </option>
                                            <option value="Vĩnh Phúc">
                                                Vĩnh Phúc
                                            </option>
                                            <option value="Yên Bái">
                                                Yên Bái
                                            </option>
                                        </select>
                                        <textarea
                                            placeholder="Địa chỉ"
                                            {...register("address", {
                                                required: true,
                                            })}
                                        />
                                        {errors.address && (
                                            <p className="invalid">
                                                Trường dữ liệu không được để
                                                trống
                                            </p>
                                        )}
                                        <input
                                            placeholder="Email"
                                            {...register("email", {
                                                required: true,
                                                pattern:
                                                    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            })}
                                            className={
                                                errors.email ? "invalid" : ""
                                            }
                                        />
                                        {errors.email &&
                                            errors.email.type ===
                                                "required" && (
                                                <p className="invalid">
                                                    Trường dữ liệu không được để
                                                    trống
                                                </p>
                                            )}
                                        {errors.email &&
                                            errors.email.type === "pattern" && (
                                                <p className="invalid">
                                                    Email không đúng định dạng
                                                </p>
                                            )}
                                        <input
                                            placeholder="Số điện thoại"
                                            {...register("phoneNumber", {
                                                required: true,
                                                pattern:
                                                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                                            })}
                                            className={
                                                errors.phoneNumber
                                                    ? "invalid"
                                                    : ""
                                            }
                                        />
                                        {errors.phoneNumber &&
                                            errors.phoneNumber.type ===
                                                "required" && (
                                                <p className="invalid">
                                                    Trường dữ liệu không được để
                                                    trống
                                                </p>
                                            )}
                                        {errors.phoneNumber &&
                                            errors.phoneNumber.type ===
                                                "pattern" && (
                                                <p className="invalid">
                                                    Số điện thoại không hợp lệ
                                                </p>
                                            )}
                                        <button>Đặt hàng</button>
                                    </form>
                                </div>
                            </div>
                            <div className="Payment-Content-Product">
                                <h4>
                                    Đơn hàng ({productList.length} sản phẩm)
                                </h4>
                                {productList.map((item, index) => {
                                    return (
                                        <PaymentItem
                                            productId={item.productId}
                                            name={item.name}
                                            img={item.img}
                                            price={item.price}
                                            numOfProductsInCart={item.amount}
                                            key={index}
                                        />
                                    );
                                })}
                                <div className="Payment-Content-Product-Summary">
                                    <p>
                                        <span>Tổng tiền sản phẩm:</span>
                                        <span>{sum.toLocaleString()}</span>
                                    </p>
                                    <p>
                                        <span>Phí vận chuyển:</span>
                                        <span>
                                            {shippingFee === 0 ? (
                                                <>Free</>
                                            ) : (
                                                <>32,000đ</>
                                            )}
                                        </span>
                                    </p>
                                    <div>
                                        <span>Tổng thanh toán:</span>
                                        <span className="Payment-Content-Product-Summary-Price">
                                            {(
                                                sum + shippingFee
                                            ).toLocaleString()}
                                            đ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {confirm && (
                        <Modal
                            onHandle={async () => {
                                return await createOrder(info);
                            }}
                            onConfirm={async () => {
                                sessionStorage.clear();
                                if (productList[0]._id) {
                                    for (let i = 0; i < productList.length; ++i)
                                        await deleteCart(productList[i]._id);
                                }
                                navigate("/history");
                            }}
                            onCancel={() => {
                                setConfirm(false);
                            }}
                        />
                    )}
                </>
            ) : (
                <div>Thao tác không thể thực hiện</div>
            )}
        </MainLayout>
    );
}
export default Payment;
