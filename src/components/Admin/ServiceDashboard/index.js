import "./ServiceDashboard.css";
import { Icon } from "@iconify/react";

const ServiceDashboard = () => {
  const list = [1, 1, 1, 1, 1, 1];

  return (
    <div className="product-dashboard">
      <div className="service-list-container">
        <h1 className="title">Danh sách yêu cầu dịch vụ</h1>
        <div className="service-list">
          {list.map((item, idx) => (
            <div className="service-item" key={idx}>
              <div className="service-item-body">
                <ul className="basic-info">
                  <li className="service-req-id">#1</li>
                  <li className="service-req-customer-name">TranBinhChuong</li>
                  <li className="service-req-customer-phone-number">
                    09xxxxxxx
                  </li>
                </ul>
                <ul className="state-and-edit">
                  <li>
                    <div className="service-req-state">Admin</div>
                  </li>
                  <li>
                    <Icon className="edit" icon="bxs:edit" />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceDashboard;
