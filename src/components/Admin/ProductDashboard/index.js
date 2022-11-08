import { useState } from "react";
import "./ProductDashboard.css";
import ProductList from "./ProductList";
import ProductReqList from "./ProductReqList";
import { Icon } from "@iconify/react";

const ProductDashBoard = () => {
  const [method, setMethod] = useState(2);
  return (
    <div className="product-dashboard">
      <div className="card-group">
        <div className="card-item sold-product">
          <div className="card-icon">
            <Icon icon="dashicons:money-alt" />
          </div>
          <div className="card-content">
            <h2>9,999,999</h2>
            <h4>Doanh số</h4>
          </div>
        </div>
        <div className="card-item out-stock-product">
          <div className="card-icon">
            <Icon icon="ic:outline-cloud-done" />
          </div>
          <div className="card-content">
            <h2>9,999</h2>
            <h4>Bán thành công</h4>
          </div>
        </div>
        <div className="card-item order-complete">
          <div className="card-icon">
            <Icon icon="medical-icon:i-waiting-area" />
          </div>
          <div className="card-content">
            <h2>99</h2>
            <h4>Đơn đang chờ</h4>
          </div>
        </div>
        <div className="card-item order-waiting">
          <div className="card-icon">
            <Icon icon="icons8:cancel" />
          </div>
          <div className="card-content">
            <h2>9</h2>
            <h4>Đơn bị hủy</h4>
          </div>
        </div>
      </div>
      <div className="product-dashboard-container">
        <div className="select-item">
          <button
            className={method === 1 ? "active" : undefined}
            onClick={() => setMethod(1)}
          >
            Danh sách sản phẩm
          </button>
          <button
            className={method === 2 ? "active" : undefined}
            onClick={() => setMethod(2)}
          >
            Danh sách đơn hàng
          </button>
        </div>
        <div>{method === 1 && <ProductList />}</div>
        <div>{method === 2 && <ProductReqList />}</div>
      </div>
    </div>
  );
};
export default ProductDashBoard;
