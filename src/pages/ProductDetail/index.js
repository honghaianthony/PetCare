import MainLayout from "../../layouts/MainLayout";
import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailReview from "../../components/ProductDetailReview";
import ProductDetailStar from "../../components/ProductReviewStar";
import { getProductDetailById } from "../../apis/productDetailApi";
import "./ProductDetail.css";
import { addCart } from "../../apis/cartApi";
function ProductDetail() {
    const { productId } = useParams();
    const [status, setStatus] = useState(0);
    const [num, setNum] = useState(1);
    const [product, setProduct] = useState("");

    const [addCartSuccess, setAddCartSuccess] = useState(2);

    const navigate = useNavigate();

    useEffect(() => {
        async function getProduct() {
            const resProduct = await getProductDetailById(productId);
            setProduct(resProduct);
        }
        getProduct();
    }, [productId]);

    const userReview = [
        {
            userId: "1",
            name: "DuyenTM",
            img: "/assets/images/about/duyen_pic.png",
            time: "16:30 28/09/22",
            rate: 5,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "2",
            name: "ChuongTB",
            img: "/assets/images/about/chuong_pic.jpg",
            time: "16:30 28/09/22",
            rate: 1,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "1",
            name: "GiaoTN",
            img: "/assets/images/about/giao_pic.jpg",
            time: "16:30 28/09/22",
            rate: 4,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "2",
            name: "ChuongTB",
            img: "/assets/images/about/chuong_pic.jpg",
            time: "16:30 28/09/22",
            rate: 2,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "1",
            name: "DuyenTM",
            img: "/assets/images/about/duyen_pic.png",
            time: "16:30 28/09/22",
            rate: 3,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "1",
            name: "GiaoTN",
            img: "/assets/images/about/giao_pic.jpg",
            time: "16:30 28/09/22",
            rate: 5,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
        {
            userId: "2",
            name: "ChuongTB",
            img: "/assets/images/about/chuong_pic.jpg",
            time: "16:30 28/09/22",
            rate: 3,
            review: "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
        },
    ];
    let numRate = {
        five: 0,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
    };
    for (let i = 0; i < userReview.length; ++i) {
        switch (userReview[i].rate) {
            case 5:
                ++numRate.five;
                break;
            case 4:
                ++numRate.four;
                break;
            case 3:
                ++numRate.three;
                break;
            case 2:
                ++numRate.two;
                break;
            case 1:
                ++numRate.one;
                break;
            default:
                break;
        }
    }
    let reviewFilter = [];
    if (status !== 0) {
        for (let i = 0; i < userReview.length; ++i) {
            if (userReview[i].rate === status) reviewFilter.push(userReview[i]);
        }
    } else reviewFilter = userReview;

    return (
        <MainLayout>
            {product !== "" ? (
                <div className="productDetail">
                    <SEO
                        title={product.product.name}
                        description="Website cung cấp dịch vụ chăm sóc thú cưng"
                        name="PetCare"
                        type="article"
                    />
                    <div className="productDetail-link">
                        <p>
                            <Link to="/" className="productDetail-link-span">
                                Petcare
                            </Link>
                            &nbsp; &#62; &nbsp;
                            <Link to="/" className="productDetail-link-span">
                                Sản phẩm
                            </Link>
                            &nbsp; &#62; &nbsp;
                            <Link to="/" className="productDetail-link-span">
                                {product.category.label}
                            </Link>
                            &nbsp; &#62; &nbsp; {product.product.name}
                        </p>
                    </div>

                    <div className="productDetail-Container1">
                        <div className="productDetail-description">
                            <div className="productDetail-description-one">
                                <div className="productDetail-description-one-image">
                                    <img
                                        src={product.product.img}
                                        alt="thuc-an-cho-meo"
                                    />
                                </div>
                                <div className="productDetail-description-one-like">
                                    <div className="productDetail-description-one-like-icon-container">
                                        <Icon
                                            icon="icon-park-outline:like"
                                            className="productDetail-description-one-like-icon nottym"
                                        />
                                        <Icon
                                            icon="icon-park-solid:like"
                                            className="productDetail-description-one-like-icon tymed"
                                        />
                                    </div>
                                    <span>
                                        &nbsp; {product.numOfProductsLove} lượt
                                        thích
                                    </span>
                                </div>
                            </div>
                            <div className="productDetail-description-two">
                                <h2>{product.product.name}</h2>
                                <p>
                                    <b>{product.numOfProductsReview}</b>{" "}
                                    <span>đánh giá</span> |{" "}
                                    <b>{product.product.numOfProductsSold}</b>{" "}
                                    <span>sản phẩm đã bán</span>
                                </p>
                                <div className="productDetail-description-two-price">
                                    {product.product.sale === 0 ? (
                                        <p>
                                            <b
                                                style={{
                                                    color: "red",
                                                    fontSize: "38px",
                                                }}
                                            >
                                                {(
                                                    product.product.price * 1
                                                ).toLocaleString()}
                                                đ
                                            </b>
                                        </p>
                                    ) : (
                                        <>
                                            <p>
                                                <span
                                                    style={{
                                                        textDecorationLine:
                                                            "line-through",
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    {(
                                                        product.product.price *
                                                        1
                                                    ).toLocaleString()}
                                                    đ
                                                </span>
                                                <b
                                                    style={{
                                                        color: "red",
                                                        fontSize: "38px",
                                                        padding: "0px 20px",
                                                    }}
                                                >
                                                    {(
                                                        product.product.price -
                                                        (product.product.price *
                                                            product.product
                                                                .sale) /
                                                            100
                                                    ).toLocaleString()}
                                                    đ
                                                </b>
                                            </p>
                                            <span
                                                className={
                                                    product.product.sale !== 0
                                                        ? "productDetail-description-two-price-sale"
                                                        : "tymed"
                                                }
                                            >
                                                Giảm {product.product.sale}%
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div className="productDetail-description-two-freeShip">
                                    <div>
                                        <b>Đặc biệt</b>
                                    </div>
                                    <p>
                                        Miễn phí vận chuyển tại TP. Hồ Chí Minh
                                    </p>
                                </div>
                                <div className="productDetail-description-two-amount">
                                    <p>Số lượng</p>
                                    <div>
                                        <button
                                            className="productDetail-description-two-amount-b1"
                                            onClick={() => {
                                                if (num > 1) setNum(num - 1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <input
                                            name="amount"
                                            type="number"
                                            min="1"
                                            max={product.numOfProductsInStock}
                                            value={num}
                                            disabled
                                            onChange={(e) => {
                                                if (
                                                    (e.target.value * 10) / 10 >
                                                    product.numOfProductsInStock
                                                )
                                                    setNum(
                                                        product.numOfProductsInStock
                                                    );
                                                else if (
                                                    (e.target.value * 10) / 10 <
                                                    1
                                                )
                                                    setNum(1);
                                                else
                                                    setNum(
                                                        (e.target.value * 10) /
                                                            10
                                                    );
                                            }}
                                        />
                                        <button
                                            className="productDetail-description-two-amount-b2"
                                            onClick={() => {
                                                if (
                                                    num <
                                                    product.numOfProductsInStock
                                                )
                                                    setNum(num + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="productDetail-description-two-buy">
                                    <button
                                        className={`productDetail-description-two-buy-b1 ${
                                            addCartSuccess === 1
                                                ? "add-cart-success"
                                                : addCartSuccess === 3
                                                ? "add-cart-fail"
                                                : ""
                                        }`}
                                        onClick={async () => {
                                            await addCart({
                                                productId,
                                                amount: num,
                                            });
                                            setAddCartSuccess(1);
                                            setTimeout(
                                                () => setAddCartSuccess(2),
                                                2000
                                            );
                                        }}
                                    >
                                        <Icon
                                            icon="clarity:shopping-cart-line"
                                            width="42"
                                        />
                                        &nbsp; Thêm vào giỏ hàng
                                    </button>
                                    <button
                                        className="productDetail-description-two-buy-b2"
                                        onClick={() => {
                                            sessionStorage.setItem(
                                                "productList",
                                                JSON.stringify([
                                                    {
                                                        productId,
                                                        amount: num,
                                                        name: product.product
                                                            .name,
                                                        img: product.product
                                                            .img,
                                                        price:
                                                            product.product
                                                                .price *
                                                            num *
                                                            (1 -
                                                                product.product
                                                                    .sale /
                                                                    100),
                                                    },
                                                ])
                                            );
                                            navigate("/payment");
                                        }}
                                    >
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="productDetail-detail">
                            <h2>Chi tiết sản phẩm</h2>
                            <hr />
                            <div className="productDetail-detail-info ">
                                <h3>Thông tin</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "150px" }}>
                                                Tên sản phẩm
                                            </td>
                                            <td>{product.product.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Danh mục</td>
                                            <td>
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    Petcare
                                                </Link>
                                                &nbsp; &#62; &nbsp;
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    Sản phẩm
                                                </Link>
                                                &nbsp; &#62; &nbsp;
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    {product.category.label}
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kho hàng</td>
                                            <td>
                                                {product.numOfProductsInStock}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gửi từ</td>
                                            <td>
                                                KTX khu A, khu phố 6, phường
                                                Linh Trung, TP. Thủ Đức, TP. Hồ
                                                Chí MInh
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr className="productDetail-detail-hr " />
                            <div className="productDetail-detail-info">
                                <h3>Mô tả</h3>
                                <p>{product.description}</p>
                            </div>
                            <hr className="productDetail-detail-hr" />
                            <div className="productDetail-detail-info">
                                <h3>Hướng dẫn sử dụng</h3>
                                <p>
                                    Thay đổi thức ăn đột ngột dễ làm thú cưng
                                    mất cảm giác ngon miệng tạm thời hoặc có thể
                                    dẫn đến tình trạng đi tiêu lỏng. Nếu bạn
                                    thay đổi thức ăn mới cho thú cưng thì nên
                                    trộn thức ăn cũ và thức ăn mới với liều
                                    lượng như sau:
                                </p>
                                <ul>
                                    <li>Ngày 1-2: 25&#37;</li>
                                    <li>Ngày 3-4: 50&#37;</li>
                                    <li>Ngày 5-6: 75&#37;</li>
                                    <li>Ngày 7: 100&#37;</li>
                                </ul>
                                <b>
                                    <i>
                                        Lượng thức ăn hợp lí với từng trọng
                                        lượng cơ thể :
                                    </i>
                                </b>
                                <ul>
                                    <li>1-2kg: 15-35g</li>
                                    <li>2-3kg: 35-50g</li>
                                    <li>3-4kg: 50-65g</li>
                                    <li>4-5kg: 65-85g</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="productDetail-Container2">
                        <div className="productDetail-description">
                            <div className="productDetail-description-one">
                                <div className="productDetail-description-one-image">
                                    <img
                                        src={product.product.img}
                                        alt="thuc-an-cho-meo"
                                    />
                                </div>
                                <div className="productDetail-description-one-like">
                                    <div className="productDetail-description-one-like-icon-container">
                                        <Icon
                                            icon="icon-park-outline:like"
                                            className="productDetail-description-one-like-icon nottym"
                                        />
                                        <Icon
                                            icon="icon-park-solid:like"
                                            className="productDetail-description-one-like-icon tymed"
                                        />
                                    </div>
                                    <span>
                                        &nbsp;{" "}
                                        {product.product.numOfProductsLove} lượt
                                        thích
                                    </span>
                                </div>
                            </div>
                            <div className="productDetail-description-two">
                                <h2>{product.product.name}</h2>
                                <p>
                                    <b>{product.numOfProductsReview}</b>{" "}
                                    <span>đánh giá</span> |{" "}
                                    <b>{product.product.numOfProductsSold}</b>{" "}
                                    <span>sản phẩm đã bán</span>
                                </p>
                                <div className="productDetail-description-two-price">
                                    {product.product.sale === 0 ? (
                                        <p>
                                            <b
                                                style={{
                                                    color: "red",
                                                    fontSize: "38px",
                                                }}
                                            >
                                                {(
                                                    product.product.price * 1
                                                ).toLocaleString()}
                                                đ
                                            </b>
                                        </p>
                                    ) : (
                                        <>
                                            <p>
                                                <span
                                                    style={{
                                                        textDecorationLine:
                                                            "line-through",
                                                        fontSize: "20px",
                                                    }}
                                                >
                                                    {(
                                                        product.product.price *
                                                        1
                                                    ).toLocaleString()}
                                                    đ
                                                </span>
                                                <b
                                                    style={{
                                                        color: "red",
                                                        fontSize: "38px",
                                                        padding: "0px 20px",
                                                    }}
                                                >
                                                    {(
                                                        product.product.price -
                                                        (product.product.price *
                                                            product.product
                                                                .sale) /
                                                            100
                                                    ).toLocaleString()}
                                                    đ
                                                </b>
                                            </p>
                                            <span
                                                className={
                                                    product.product.sale !== 0
                                                        ? "productDetail-description-two-price-sale"
                                                        : "tymed"
                                                }
                                            >
                                                Giảm {product.product.sale}%
                                            </span>
                                        </>
                                    )}
                                </div>
                                <div className="productDetail-description-two-freeShip">
                                    <div>
                                        <b>Đặc biệt</b>
                                    </div>
                                    <p>
                                        Miễn phí vận chuyển tại TP. Hồ Chí Minh
                                    </p>
                                </div>
                                <div className="productDetail-description-two-amount">
                                    <p>Số lượng</p>
                                    <div>
                                        <button
                                            className="productDetail-description-two-amount-b1"
                                            onClick={() => {
                                                if (num > 1) setNum(num - 1);
                                            }}
                                        >
                                            -
                                        </button>
                                        <input
                                            name="amount"
                                            type="number"
                                            min="1"
                                            max={product.numOfProductsInStock}
                                            value={num}
                                            disabled
                                            onChange={(e) => {
                                                if (
                                                    (e.target.value * 10) / 10 >
                                                    product.numOfProductsInStock
                                                )
                                                    setNum(
                                                        product.numOfProductsInStock
                                                    );
                                                else if (
                                                    (e.target.value * 10) / 10 <
                                                    1
                                                )
                                                    setNum(1);
                                                else
                                                    setNum(
                                                        (e.target.value * 10) /
                                                            10
                                                    );
                                            }}
                                        />
                                        <button
                                            className="productDetail-description-two-amount-b2"
                                            onClick={() => {
                                                if (
                                                    num <
                                                    product.numOfProductsInStock
                                                )
                                                    setNum(num + 1);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="productDetail-description-two-buy">
                                    <button
                                        className={`productDetail-description-two-buy-b1 ${
                                            addCartSuccess === 1
                                                ? "add-cart-success"
                                                : addCartSuccess === 3
                                                ? "add-cart-fail"
                                                : ""
                                        }`}
                                        onClick={async () => {
                                            //Fail
                                            // setAddCartSuccess(3);
                                            //Success
                                            await addCart({
                                                productId,
                                                amount: num,
                                            });
                                            setAddCartSuccess(1);
                                            setTimeout(
                                                () => setAddCartSuccess(2),
                                                2000
                                            );
                                        }}
                                    >
                                        <Icon
                                            icon="clarity:shopping-cart-line"
                                            width="42"
                                        />
                                        &nbsp; Thêm vào giỏ hàng
                                    </button>
                                    <button
                                        className="productDetail-description-two-buy-b2"
                                        onClick={() => {
                                            sessionStorage.setItem(
                                                "productList",
                                                JSON.stringify([
                                                    {
                                                        productId,
                                                        amount: num,
                                                        name: product.product
                                                            .name,
                                                        img: product.product
                                                            .img,
                                                        price:
                                                            product.product
                                                                .price *
                                                            (1 -
                                                                product.product
                                                                    .sale) *
                                                            num,
                                                    },
                                                ])
                                            );
                                            navigate("/payment");
                                        }}
                                    >
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="productDetail-detail">
                            <h2>Chi tiết sản phẩm</h2>
                            <hr />
                            <div className="productDetail-detail-info ">
                                <h3>Thông tin</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "150px" }}>
                                                Tên sản phẩm
                                            </td>
                                            <td>{product.product.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Danh mục</td>
                                            <td>
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    Petcare
                                                </Link>
                                                &nbsp; &#62; &nbsp;
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    Sản phẩm
                                                </Link>
                                                &nbsp; &#62; &nbsp;
                                                <Link
                                                    to="/"
                                                    className="productDetail-link-span"
                                                >
                                                    {product.category.label}
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Kho hàng</td>
                                            <td>
                                                {product.numOfProductsInStock}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gửi từ</td>
                                            <td>
                                                KTX khu A, khu phố 6, phường
                                                Linh Trung, TP. Thủ Đức, TP. Hồ
                                                Chí MInh
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr className="productDetail-detail-hr " />
                            <div className="productDetail-detail-info">
                                <h3>Mô tả</h3>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="productDetail-guide">
                        <div className="productDetail-detail-info">
                            <h3>Hướng dẫn sử dụng</h3>
                            <hr />
                            <p>
                                Thay đổi thức ăn đột ngột dễ làm thú cưng mất
                                cảm giác ngon miệng tạm thời hoặc có thể dẫn đến
                                tình trạng đi tiêu lỏng. Nếu bạn thay đổi thức
                                ăn mới cho thú cưng thì nên trộn thức ăn cũ và
                                thức ăn mới với liều lượng như sau:
                            </p>
                            <ul>
                                <li>Ngày 1-2: 25&#37;</li>
                                <li>Ngày 3-4: 50&#37;</li>
                                <li>Ngày 5-6: 75&#37;</li>
                                <li>Ngày 7: 100&#37;</li>
                            </ul>
                            <b>
                                <i>
                                    Lượng thức ăn hợp lí với từng trọng lượng cơ
                                    thể :
                                </i>
                            </b>
                            <ul>
                                <li>1-2kg: 15-35g</li>
                                <li>2-3kg: 35-50g</li>
                                <li>3-4kg: 50-65g</li>
                                <li>4-5kg: 65-85g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="productDetail-review1">
                        <h2>Đánh giá</h2>
                        <div className="productDetail-review-one">
                            <div className="productDetail-review-one-num">
                                <ProductDetailStar
                                    rate={product.product.rate}
                                />
                                <span>{product.product.rate}</span>/5
                            </div>
                            <div className="productDetail-review-one-star">
                                <button
                                    onClick={() => setStatus(0)}
                                    className={
                                        status === 0
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    Tất cả (
                                    {product.product.numOfProductsReview})
                                </button>
                                <button
                                    onClick={() => setStatus(5)}
                                    className={
                                        status === 5
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    5 sao ({numRate.five})
                                </button>
                                <button
                                    onClick={() => setStatus(4)}
                                    className={
                                        status === 4
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    4 sao ({numRate.four})
                                </button>
                                <button
                                    onClick={() => setStatus(3)}
                                    className={
                                        status === 3
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    3 sao ({numRate.three})
                                </button>
                                <button
                                    onClick={() => setStatus(2)}
                                    className={
                                        status === 2
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    2 sao ({numRate.two})
                                </button>
                                <button
                                    onClick={() => setStatus(1)}
                                    className={
                                        status === 1
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    1 sao ({numRate.one})
                                </button>
                            </div>
                        </div>
                        <hr />
                        {reviewFilter.length === 0 ? (
                            <></>
                        ) : (
                            <>
                                {" "}
                                {reviewFilter.map((item, index) => {
                                    return (
                                        <>
                                            <ProductDetailReview
                                                name={item.name}
                                                img={item.img}
                                                time={item.time}
                                                rate={item.rate}
                                                review={item.review}
                                                id={index}
                                            />
                                        </>
                                    );
                                })}
                            </>
                        )}
                    </div>

                    <div className="productDetail-review2">
                        <h2>Đánh giá</h2>
                        <div className="productDetail-review-one">
                            <div className="productDetail-review-one-num">
                                <ProductDetailStar
                                    rate={product.product.rate}
                                />
                                <span>{product.product.rate}</span>/5
                            </div>
                        </div>
                        <hr />
                        <div className="productDetail-review-two">
                            <div className="productDetail-review-one-star">
                                <button
                                    onClick={() => setStatus(0)}
                                    className={
                                        status === 0
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    Tất cả (
                                    {product.product.numOfProductsReview})
                                </button>
                                <button
                                    onClick={() => setStatus(5)}
                                    className={
                                        status === 5
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    5 sao ({numRate.five})
                                </button>
                                <button
                                    onClick={() => setStatus(4)}
                                    className={
                                        status === 4
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    4 sao ({numRate.four})
                                </button>
                                <button
                                    onClick={() => setStatus(3)}
                                    className={
                                        status === 3
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    3 sao ({numRate.three})
                                </button>
                                <button
                                    onClick={() => setStatus(2)}
                                    className={
                                        status === 2
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    2 sao ({numRate.two})
                                </button>
                                <button
                                    onClick={() => setStatus(1)}
                                    className={
                                        status === 1
                                            ? "productDetail-review-on"
                                            : "productDetail-review-off"
                                    }
                                >
                                    1 sao ({numRate.one})
                                </button>
                            </div>
                            <div className="productDetail-review-two-two">
                                {reviewFilter.length === 0 ? (
                                    <></>
                                ) : (
                                    <>
                                        {" "}
                                        {reviewFilter.map((item, index) => {
                                            return (
                                                <>
                                                    <ProductDetailReview
                                                        name={item.name}
                                                        img={item.img}
                                                        time={item.time}
                                                        rate={item.rate}
                                                        review={item.review}
                                                        id={index}
                                                    />
                                                </>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </MainLayout>
    );
}

export default ProductDetail;
