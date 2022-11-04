import { Icon } from "@iconify/react";

const ServiceReqItem = ({ data }) => {
  return (
    <div className="service-item">
      <div className="service-item-body">
        <ul className="basic-info">
          <li className="service-req-id">#{data.id}</li>
          <li className="service-req-customer-name">{data.customer_name}</li>
          <li className="service-req-customer-phone-number">
            {data.phone_number}
          </li>
          <li className="service-req-customer-service-type">
            {data.service_type}
          </li>
        </ul>
        <ul className="state-and-edit">
          <li>
            <div
              className={`service-req-state ${
                data.state_id === 1
                  ? "done-req"
                  : data.state_id === 2
                  ? "cancel-req"
                  : "waiting-req"
              }`}
            >
              {data.state_id === 1
                ? "Hoàn thành"
                : data.state_id === 2
                ? "Hủy"
                : "Chờ"}
            </div>
          </li>
          <li>
            <Icon className="edit" icon="bxs:edit" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ServiceReqItem;
