import ProductReqItem from "../ProductReqItem";

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
  return (
    <>
      <div className="product-req-list-container">
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
