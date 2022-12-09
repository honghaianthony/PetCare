import "./ServiceDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import ServiceReqList from "./ServiceReqList";
import { getAllServices } from "../../../apis/serviceApi";

const ServiceDashboard = () => {
  const [dataServiceReq, setDataServiceReq] = useState(null);
  const [needUpdateData, setNeedUpdateData] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await getAllServices();
      setDataServiceReq(response);
      setNeedUpdateData(false);
    }
    if (needUpdateData) {
      fetchData();
    }
  }, [needUpdateData]);

  return (
    <div className="service-dashboard-container">
      <div className="service-dashboard-card-group">
        <div className="heading">
          <h3>Thống kê</h3>
          <span>Cập nhật trong vòng 24h</span>
        </div>
        <div className="body">
          <div className="card-item">
            <span className="card-item-icon done-req">
              <Icon icon="material-symbols:done-rounded" />
            </span>
            <div>
              <h3>400</h3>
              <span>Đã tiếp nhận</span>
            </div>
          </div>
          <div className="card-item">
            <span className="card-item-icon pending-req">
              <Icon icon="material-symbols:pending-actions" />
            </span>
            <div>
              <h3>400</h3>
              <span>Chờ xử lý</span>
            </div>
          </div>
          <div className="card-item">
            <span className="card-item-icon new-req">
              <Icon icon="material-symbols:fiber-new-outline" />
            </span>
            <div>
              <h3>400</h3>
              <span>Yêu cầu mới</span>
            </div>
          </div>
        </div>
      </div>
      <ServiceReqList
        data={dataServiceReq}
        needUpdateData={() => setNeedUpdateData(true)}
      />
    </div>
  );
};
export default ServiceDashboard;
