import MainLayout from "../../layouts/MainLayout";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ProductDetailReview from "../../components/ProductDetailReview";
import ProductDetailStar from "../../components/ProductReviewStar";
import "./ProductDetail.css";

function ProductDetail() {
  const [status, setStatus] = useState(0);
  const [num, setNum] = useState(1);
  const product = {
    productId: "p1",
    name: "Hạt thức ăn dinh dưỡng cấp cao cho mèo.",
    category: "Thức ăn",
    img: "https://i.postimg.cc/g0VFn1kb/p1.jpg",
    price: 500,
    sale: 10,
    rate: 5,
    description:
      "Mùi vị thơm ngon tuyệt đối.\n TAURINE cho đôi mắt sáng tinh nhanh.\n CANXI và VITAMIN D cho xương khoẻ mạnh.\n OMEGA 3&6 cho da lông khoẻ mạnh.\n GẠO và YUCCA giúp phân cứng và giảm mùi tối đa.",
    numOfRate: "139",
    numOfProductsSold: "171",
    numOfProductsReview: "139",
    numOfProductsLove: "79",
    numOfProductsInStock: "427",
  };
  const userReview = [
    {
      userId: "1",
      name: "DuyenTM",
      img: "https://s3-alpha-sig.figma.com/img/a28f/4446/0bf7c143a487dbb9cd115b4bc2a73354?Expires=1666569600&Signature=AT9d5DBuRmCpca34o8T42RipgMSLCcIy2d7KZDmTBED34SOkoCSZaUJvb~ieMyxRXn2CDWC6I3LsSdrB6nEhKiIJcZTUnFTRhmXgldy-59NoPaHQK90y9QJV~WR-BAxNEt~0tl7mN8RM1R~cHi3mUeqP1yxV6Gx~KClYG~lLMS18FZv3nCL2kMOOtQGc~H0saL1yu52ETmSrH~VM7RkmtxEjDdBnLfP67y1ZQglSnH4bG5hJlg8vaqsHnsisBTrOQCrssWAA-I-XiNqDZ8ZzM-H1uUPkaBjmKJ5Z1WgCfr6KvcvgJZt2GURxYUj~pnbtGPpdeAMDpjvx6nYzT2f5nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 5,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "2",
      name: "ChuongTB",
      img: "https://s3-alpha-sig.figma.com/img/1825/3565/2f6d7a0aaf90d40731becfb87b5b6274?Expires=1666569600&Signature=ZJtfLwSbuU0v~WZMuIrX~NHJySW~ohrRgIVZtuaj9~hYedwGi0-V5qMZM1B4tqAZYNVSTsxOf7PxjrOnNa~Hvx~uRZsWyGoiNGEJe7WxxRpMnYWZD34PSo0rMykBh8go4QrC90v~PG5qOQAA7~theLf~ZbPzwXO-7U04OD4IFCTClTFVpA3yPzrB8nct~W-TIrn-bNL2T1HJj-57vZZNRpk1TmdvWiQS-qNvitGMUXE5RVcCKJoQpq~XQi0U7hajlzH5luYlm6UQcztJhYt-4d~VkPsF9KslB8XwRdnPN7nau~m0WBtKeer0oAdOWj7yG6J8MIrVyWPqLh6PU8wzEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 1,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "1",
      name: "GiaoTN",
      img: "https://s3-alpha-sig.figma.com/img/4140/9182/b9a03ad9104cb4e9b776403600b665de?Expires=1666569600&Signature=Nk0dmr5bPUCEHh0B8b0xRpErLBSIC1M~PuhF1vwkP6s5hezJn34d7AFsEu8mAqGYTNAj64fe7x-gtWtsasgaZCxYVEkD8Izd5sz706YnOmOBF6~8Knjgw6ayKLkacRnxpQ1ki4-JpqyJakr3DhEZbBA1Q7N7sIqEHzA94cm1Fx4fowmHFR9~HUsDiG2p32Jq40yrBLAjoU1UyvkdbWKU7kEJWu~SZmKhZjVo4uKXrpmlKcsTTSfwRN6xupSAArpGsUhc3h7GounLFho3y4hIL5RpnP2YP-R3bmXHlHGNrTD6AefuwcoLHSHIVox-aM-~R6fp2s1ZyKnq37JePgauQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 4,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "2",
      name: "ChuongTB",
      img: "https://s3-alpha-sig.figma.com/img/1825/3565/2f6d7a0aaf90d40731becfb87b5b6274?Expires=1666569600&Signature=ZJtfLwSbuU0v~WZMuIrX~NHJySW~ohrRgIVZtuaj9~hYedwGi0-V5qMZM1B4tqAZYNVSTsxOf7PxjrOnNa~Hvx~uRZsWyGoiNGEJe7WxxRpMnYWZD34PSo0rMykBh8go4QrC90v~PG5qOQAA7~theLf~ZbPzwXO-7U04OD4IFCTClTFVpA3yPzrB8nct~W-TIrn-bNL2T1HJj-57vZZNRpk1TmdvWiQS-qNvitGMUXE5RVcCKJoQpq~XQi0U7hajlzH5luYlm6UQcztJhYt-4d~VkPsF9KslB8XwRdnPN7nau~m0WBtKeer0oAdOWj7yG6J8MIrVyWPqLh6PU8wzEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 2,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "1",
      name: "DuyenTM",
      img: "https://s3-alpha-sig.figma.com/img/a28f/4446/0bf7c143a487dbb9cd115b4bc2a73354?Expires=1666569600&Signature=AT9d5DBuRmCpca34o8T42RipgMSLCcIy2d7KZDmTBED34SOkoCSZaUJvb~ieMyxRXn2CDWC6I3LsSdrB6nEhKiIJcZTUnFTRhmXgldy-59NoPaHQK90y9QJV~WR-BAxNEt~0tl7mN8RM1R~cHi3mUeqP1yxV6Gx~KClYG~lLMS18FZv3nCL2kMOOtQGc~H0saL1yu52ETmSrH~VM7RkmtxEjDdBnLfP67y1ZQglSnH4bG5hJlg8vaqsHnsisBTrOQCrssWAA-I-XiNqDZ8ZzM-H1uUPkaBjmKJ5Z1WgCfr6KvcvgJZt2GURxYUj~pnbtGPpdeAMDpjvx6nYzT2f5nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 3,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "1",
      name: "GiaoTN",
      img: "https://s3-alpha-sig.figma.com/img/4140/9182/b9a03ad9104cb4e9b776403600b665de?Expires=1666569600&Signature=Nk0dmr5bPUCEHh0B8b0xRpErLBSIC1M~PuhF1vwkP6s5hezJn34d7AFsEu8mAqGYTNAj64fe7x-gtWtsasgaZCxYVEkD8Izd5sz706YnOmOBF6~8Knjgw6ayKLkacRnxpQ1ki4-JpqyJakr3DhEZbBA1Q7N7sIqEHzA94cm1Fx4fowmHFR9~HUsDiG2p32Jq40yrBLAjoU1UyvkdbWKU7kEJWu~SZmKhZjVo4uKXrpmlKcsTTSfwRN6xupSAArpGsUhc3h7GounLFho3y4hIL5RpnP2YP-R3bmXHlHGNrTD6AefuwcoLHSHIVox-aM-~R6fp2s1ZyKnq37JePgauQg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 5,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
    },
    {
      userId: "2",
      name: "ChuongTB",
      img: "https://s3-alpha-sig.figma.com/img/1825/3565/2f6d7a0aaf90d40731becfb87b5b6274?Expires=1666569600&Signature=ZJtfLwSbuU0v~WZMuIrX~NHJySW~ohrRgIVZtuaj9~hYedwGi0-V5qMZM1B4tqAZYNVSTsxOf7PxjrOnNa~Hvx~uRZsWyGoiNGEJe7WxxRpMnYWZD34PSo0rMykBh8go4QrC90v~PG5qOQAA7~theLf~ZbPzwXO-7U04OD4IFCTClTFVpA3yPzrB8nct~W-TIrn-bNL2T1HJj-57vZZNRpk1TmdvWiQS-qNvitGMUXE5RVcCKJoQpq~XQi0U7hajlzH5luYlm6UQcztJhYt-4d~VkPsF9KslB8XwRdnPN7nau~m0WBtKeer0oAdOWj7yG6J8MIrVyWPqLh6PU8wzEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      time: "16:30 28/09/22",
      rate: 3,
      review:
        "Rất tuyệt vời, xin cảm ơn ạ! Mua sản phẩm cách đây 2 tuần đến giờ mới vào đánh giá hihi. Sản phẩm chất lượng tốt lắm lắm lắm luôn,  mình có hai bé mèo sau khi dùng sản phẩm một tuần thì thấy tăng cân rất đều luôn ạ~~",
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
      <div className="productDetail">
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
              Thức ăn
            </Link>
            &nbsp; &#62; &nbsp; {product.name}
          </p>
        </div>

        <div className="productDetail-description">
          <div className="productDetail-description-one">
            <div className="productDetail-description-one-image">
              <img src={product.img} alt="thuc-an-cho-meo" />
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
              <span>&nbsp; {product.numOfProductsLove} lượt thích</span>
            </div>
          </div>
          <div className="productDetail-description-two">
            <h2>{product.name}</h2>
            <p>
              <b>{product.numOfProductsReview}</b> <span>đánh giá</span> |{" "}
              <b>{product.numOfProductsSold}</b> <span>sản phẩm đã bán</span>
            </p>
            <div className="productDetail-description-two-price">
              {product.sale === 0 ? (
                <p>
                  <b style={{ color: "red", fontSize: "38px" }}>
                    {product.price}.000đ
                  </b>
                </p>
              ) : (
                <>
                  <p>
                    <span
                      style={{
                        textDecorationLine: "line-through",
                        fontSize: "20px",
                      }}
                    >
                      {product.price}.000đ
                    </span>
                    <b
                      style={{
                        color: "red",
                        fontSize: "38px",
                        padding: "0px 20px",
                      }}
                    >
                      {product.price - (product.price * product.sale) / 100}
                      .000đ
                    </b>
                  </p>
                  <span className="productDetail-description-two-price-sale">
                    Giảm {product.sale}%
                  </span>
                </>
              )}
            </div>
            <div className="productDetail-description-two-freeShip">
              <div>
                <b>Đặc biệt</b>
              </div>
              <p>Miễn phí vận chuyển tại TP. Hồ Chí Minh</p>
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
                  onChange={(e) => {
                    if (
                      (e.target.value * 10) / 10 >
                      product.numOfProductsInStock
                    )
                      setNum(product.numOfProductsInStock);
                    else if ((e.target.value * 10) / 10 < 1) setNum(1);
                    else setNum((e.target.value * 10) / 10);
                  }}
                />
                <button
                  className="productDetail-description-two-amount-b2"
                  onClick={() => {
                    if (num < product.numOfProductsInStock) setNum(num + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="productDetail-description-two-buy">
              <button className="productDetail-description-two-buy-b1">
                <Icon icon="clarity:shopping-cart-line" width="42" />
                &nbsp; Thêm vào giỏ hàng
              </button>
              <button className="productDetail-description-two-buy-b2">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        <div className="productDetail-detail">
          <h2>Chi tiết sản phẩm</h2>
          <hr />
          <div className="productDetail-detail-info">
            <h3>Thông tin</h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "150px" }}>Tên sản phẩm</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Danh mục</td>
                  <td>
                    <Link to="/" className="productDetail-link-span">
                      Petcare
                    </Link>
                    &nbsp; &#62; &nbsp;
                    <Link to="/" className="productDetail-link-span">
                      Sản phẩm
                    </Link>
                    &nbsp; &#62; &nbsp;
                    <Link to="/" className="productDetail-link-span">
                      Thức ăn
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Kho hàng</td>
                  <td>{product.numOfProductsInStock}</td>
                </tr>
                <tr>
                  <td>Gửi từ</td>
                  <td>
                    KTX khu A, khu phố 6, phường Linh Trung, TP. Thủ Đức, TP. Hồ
                    Chí MInh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="productDetail-detail-hr" />
          <div className="productDetail-detail-info">
            <h3>Mô tả</h3>
            <p>{product.description}</p>
          </div>
          <hr className="productDetail-detail-hr" />
          <div className="productDetail-detail-info">
            <h3>Hướng dẫn sử dụng</h3>
            <p>
              Thay đổi thức ăn đột ngột dễ làm thú cưng mất cảm giác ngon miệng
              tạm thời hoặc có thể dẫn đến tình trạng đi tiêu lỏng. Nếu bạn thay
              đổi thức ăn mới cho thú cưng thì nên trộn thức ăn cũ và thức ăn
              mới với liều lượng như sau:
            </p>
            <ul>
              <li>Ngày 1-2: 25&#37;</li>
              <li>Ngày 3-4: 50&#37;</li>
              <li>Ngày 5-6: 75&#37;</li>
              <li>Ngày 7: 100&#37;</li>
            </ul>
            <b>
              <i>Lượng thức ăn hợp lí với từng trọng lượng cơ thể :</i>
            </b>
            <ul>
              <li>1-2kg: 15-35g</li>
              <li>2-3kg: 35-50g</li>
              <li>3-4kg: 50-65g</li>
              <li>4-5kg: 65-85g</li>
            </ul>
          </div>
        </div>

        <div className="productDetail-review">
          <h2>Đánh giá</h2>
          <div className="productDetail-review-one">
            <div className="productDetail-review-one-num">
              <ProductDetailStar rate={product.rate} />
              <span>{product.rate}</span>/5
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
                Tất cả ({product.numOfProductsReview})
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
      </div>
    </MainLayout>
  );
}

export default ProductDetail;
