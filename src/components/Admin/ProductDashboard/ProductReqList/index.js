import ProductReqItem from "../ProductReqItem";
import { useState } from "react";

const ProductReqList = () => {
  const list = [
    {
      id: 10001,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Kí túc xá kA, Dĩ An, Bình Dương",
      state_id: 1,
    },
    {
      id: 10002,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Kí túc xá kA, Dĩ An, Bình Dương",
      state_id: 1,
    },
    {
      id: 10003,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Kí túc xá kA, Dĩ An, Bình Dương",
      state_id: 3,
    },
    {
      id: 10004,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Kí túc xá kA, Dĩ An, Bình Dương",
      state_id: 2,
    },
    {
      id: 10005,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Kí túc xá kA, Dĩ An, Bình Dương",
      state_id: 1,
    },
  ];
  const [filter, setFilter] = useState(1);

  return (
    <>
      <div className="product-req-list-container">
        <div className="filter">
          <span
            className={`req-complete ${filter === 1 ? "active" : ""}`}
            onClick={() => setFilter(1)}
          >
            Hoàn thành
          </span>
          <span
            className={`req-waiting ${filter === 2 ? "active" : ""}`}
            onClick={() => setFilter(2)}
          >
            Chờ
          </span>
          <span
            className={`req-cancel ${filter === 3 ? "active" : ""}`}
            onClick={() => setFilter(3)}
          >
            Hủy
          </span>
        </div>
        <div className="product-req-list">
          {list.map((item, idx) => (
            <ProductReqItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductReqList;
