import { Icon } from "@iconify/react";

const ProductReqItem = ({ data }) => {
  return (
    <div className="product-req-item">
      <div
        className={`product-req-item-body ${
          data.state_id === 1
            ? "done-req"
            : data.state_id === 2
            ? "cancel-req"
            : "waiting-req"
        }`}
      >
        <ul className="basic-info">
          <li className="product-req-id">#{data.id}</li>
          <li className="product-req-customer-name">{data.customer_name}</li>
          <li className="product-req-customer-phone-number">
            {data.phone_number}
          </li>
          <li className="product-req-customer-address">{data.service_type}</li>
        </ul>
        <ul className="state-and-edit">
          <li>
            <div
              className={`product-req-state ${
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
export default ProductReqItem;
