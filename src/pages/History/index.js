import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Icon } from "@iconify/react";
import "./History.css";
import HistoryItem from "../../components/HistoryItem";

function History() {
  const [status, setStatus] = useState(0);
  const order = [
    {
      orderId: 1,
      statusName: "Đã nhận hàng",
      price: "560.000vnđ",
      statusId: 3,
      item: [
        {
          productId: 1,
          name: "Banh bảy màu cho chó mèo",
          img: "https://i.postimg.cc/Gt71bY3B/banhbaymau.jpg",
          num: 2,
          price: "340.000vnđ",
        },
        {
          productId: 2,
          name: "Mũ tai thỏ dễ thương cho chó mèo",
          img: "https://i.postimg.cc/sxVVjspL/O1-CN01-Ds-G1-HP1-Giwiu-NSvq-Y-2878230657-jpg-400x400.jpg",
          num: 2,
          price: "220.000vnđ",
        },
      ],
    },
    {
      orderId: 2,
      statusName: "Đã hủy",
      price: "2.600.000vnđ",
      statusId: 4,
      item: [
        {
          productId: 1,
          name: "Áo len mùa đông cho chó",
          img: "https://i.postimg.cc/SxwkXW6C/qac.jpg",
          num: 10,
          price: "2.0000.000vnđ",
        },
        {
          productId: 2,
          name: "Hạt thức ăn dinh dưỡng cho chó",
          img: "https://i.postimg.cc/L4T9ygSF/hieuunganh-com-5e918dd032c21.webp",
          num: 5,
          price: "600.000vnđ",
        },
      ],
    },
    {
      orderId: 3,
      statusName: "Đã nhận hàng",
      price: "2.450.000vnđ",
      statusId: 3,
      item: [
        {
          productId: 1,
          name: "Chuột và cầu lông bằng bông cho mèo",
          img: "https://i.postimg.cc/C5DjgCs7/chuoivacaulong.jpg",
          num: 4,
          price: "320.000vnđ",
        },
        {
          productId: 2,
          name: "Bát đựng thức ăn cho mèo",
          img: "https://i.postimg.cc/VNQPszwF/1220-thung-dung-thuc-an-meo-3.jpg",
          num: 1,
          price: "130.000vnđ",
        },
        {
          productId: 1,
          name: "Áo len mùa đông cho chó",
          img: "https://i.postimg.cc/SxwkXW6C/qac.jpg",
          num: 10,
          price: "2.0000.000vnđ",
        },
      ],
    },
    {
      orderId: 4,
      statusName: "Chờ xác nhận",
      price: "1.320.000vnđ",
      statusId: 1,
      item: [
        {
          productId: 1,
          name: "Nhà cho chó mèo",
          img: "https://i.postimg.cc/T278LVG1/nha-cho-cho-dh009-b.png",
          num: 4,
          price: "1.320.000vnđ",
        },
      ],
    },
    {
      orderId: 5,
      statusName: "Đang giao",
      price: "200.000vnđ",
      statusId: 2,
      item: [
        {
          productId: 1,
          name: "Đồ chơi xương chó",
          img: "https://i.postimg.cc/L4ZkLRFP/dochoixuongcho.jpg",
          num: 5,
          price: "200.000vnđ",
        },
      ],
    },
    {
      orderId: 6,
      statusName: "Đã hủy",
      price: "540.000vnđ",
      statusId: 4,
      item: [
        {
          productId: 1,
          name: "Áo len hình lá cờ chó mèo",
          img: "https://i.postimg.cc/CL5gmvJb/quan-ao-cho-cho-meo-chilly-dog-american-flag.jpg",
          num: 2,
          price: "540.000vnđ",
        },
      ],
    },
    {
      orderId: 6,
      statusName: "Đang giao",
      price: "1.260.000vnđ",
      statusId: 2,
      item: [
        {
          productId: 1,
          name: "Thức ăn dinh dưỡng mùa đông cho mèo",
          img: "https://i.postimg.cc/HkJTsSyT/thucandinhduongchomeo.jpg",
          num: 4,
          price: "480.000vnđ",
        },
        {
          productId: 1,
          name: "Thức ăn dinh dưỡng vị bắp cho chó",
          img: "https://i.postimg.cc/vZ6ddcJB/thuc-an-kho-cho-cho-meo-ra-doi-nhu-the-nao.webp",
          num: 4,
          price: "440.000vnđ",
        },
        {
          productId: 1,
          name: "Banh bảy màu cho chó mèo",
          img: "https://i.postimg.cc/Gt71bY3B/banhbaymau.jpg",
          num: 2,
          price: "340.000vnđ",
        },
      ],
    },
  ];

  let filter = [];
  if (status !== 0) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i].statusId === status) filter.push(order[i]);
    }
  } else filter = order;

  return (
    <MainLayout>
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
              <img src="/assets/images/about/duyen_pic.png" alt="avatar" />
            </div>
            <div className="History-Container-Info-Other">
              <p>
                <b>DuyenTM</b>
              </p>
              <p>Ngày tham gia: 17/11/2021</p>
              <p>Hạng thành viên: Thành viên</p>
              <p>Số điện thoại: 0869183703</p>
              <p>Email: tmdmduyen@gmail.com</p>
              <p>
                Địa chỉ: KTX khu A, phường Linh Trung, Tp. Thủ Đức, Tp. Hồ Chí
                Minh
              </p>
            </div>
          </div>
          <div className="History-Container-Content">
            <div className="History-Container-Content-Choose">
              <button
                onClick={() => setStatus(0)}
                className={
                  status === 0
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Tất cả
              </button>
              <button
                onClick={() => setStatus(1)}
                className={
                  status === 1
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
                onClick={() => setStatus(3)}
                className={
                  status === 3
                    ? "productDetail-review-on"
                    : "productDetail-review-off"
                }
              >
                Đã nhận hàng
              </button>
              <button
                onClick={() => setStatus(4)}
                className={
                  status === 4
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
                    statusName={item.statusName}
                    statusId={item.statusId}
                    price={item.price}
                    item={item.item}
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
