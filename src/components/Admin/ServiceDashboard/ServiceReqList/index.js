import ServiceReqItem from "../ServiceReqItem";

const ServiceReqList = () => {
  const list = [
    {
      id: 10001,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Tiêm chủng",
      state_id: 1,
    },
    {
      id: 10002,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Tiêm chủng",
      state_id: 1,
    },
    {
      id: 10003,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Tiêm chủng",
      state_id: 3,
    },
    {
      id: 10004,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Tiêm chủng",
      state_id: 2,
    },
    {
      id: 10005,
      customer_name: "Trần Bình Chương",
      phone_number: "0123456789",
      service_type: "Tiêm chủng",
      state_id: 1,
    },
  ];
  return (
    <>
      <div className="service-list-container">
        <h1 className="title">Danh sách yêu cầu dịch vụ</h1>
        <div className="service-list">
          {list.map((item, idx) => (
            <ServiceReqItem key={idx} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ServiceReqList;
