import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Icon } from "@iconify/react";
import "./History.css";
import HistoryItem from "../../components/HistoryItem";
import SEO from "../../components/SEO";
import { getOrderUser } from "../../apis/orderApi";
import { getUser } from "../../apis/userApi";

function History() {
  const [status, setStatus] = useState(4);
  const [orders, setOders] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function getOrder() {
      const order = await getOrderUser();
      setOders(order);
      const infor = await getUser();
      setInfo(infor.data[0]);
    }
    getOrder();
  }, []);

  let filter = [];
  if (status !== 4) {
    for (let i = 0; i < orders.length; ++i) {
      if (orders[i].status === status) filter.push(orders[i]);
    }
  } else filter = orders;

  if (orders.length === 0 || info === null) return <></>;
  return (
    <MainLayout>
      <SEO
        title="Lịch sử mua hàng"
        description="Website cung cấp dịch vụ chăm sóc thú cưng"
        name="PetCare"
        type="article"
      />
      <div className="History">
        <div className="History-Title">
          <div>
            <div className="History-Title-Icon">
              <Icon icon="bi:bag-heart-fill" fontSize="32px" />
            </div>
            <div className="History-Title-Content">
              <h3>Lịch sử mua hàng</h3>
            </div>
          </div>
        </div>
        <div className="History-Container">
          <div className="History-Container-Info">
            <div className="History-Container-Info-Img">
              <img src={info.avatar} alt="avatar" />
            </div>
            <div className="History-Container-Info-Other">
              <p>
                <b>
                  {info.firstName} {info.lastName}
                </b>
              </p>
              <p>Ngày tham gia: 17/11/2021</p>
              <p>Hạng thành viên: Thành viên</p>
              <p>Số điện thoại: {info.phone}</p>
              <p>Email: {info.email}</p>
              <p>{info.adress}</p>
            </div>
          </div>
          <div className="History-Container-Content">
            <div className="History-Container-Content-Choose">
              <button
                onClick={() => setStatus(4)}
                className={
                  status === 4
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Tất cả
              </button>
              <button
                onClick={() => setStatus(0)}
                className={
                  status === 0
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Chờ xác nhận
              </button>

              <button
                onClick={() => setStatus(2)}
                className={
                  status === 2
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Đang giao
              </button>
              <button
                onClick={() => setStatus(1)}
                className={
                  status === 1
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Đã nhận hàng
              </button>
              <button
                onClick={() => setStatus(3)}
                className={
                  status === 3
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Đã hủy
              </button>
            </div>
            <div className="History-Container-Content-Order">
              {filter.map((item, index) => {
                return (
                  <HistoryItem
                    statusName={
                      item.status === 0
                        ? "Chờ xác nhận"
                        : item.status === 1
                        ? "Đã giao"
                        : item.status === 2
                        ? "Đang giao"
                        : "Đã hủy"
                    }
                    status={item.status}
                    price={item.sumPrice}
                    item={item.productList}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default History;
