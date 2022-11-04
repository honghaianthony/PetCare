import "./ServiceDashboard.css";
import ServiceReqList from "./ServiceReqList";

const ServiceDashboard = () => {
  return (
    <div className="service-dashboard">
      <div className="service-dashboard-container">
        <ServiceReqList />
      </div>
    </div>
  );
};
export default ServiceDashboard;
