import { useState } from "react";
import "./ProductDashboard.css";
import ProductList from "./ProductList";
import ProductReqList from "./ProductReqList";

const ProductDashBoard = () => {
  const [method, setMethod] = useState(2);
  return (
    <div className="product-dashboard">
      <div className="card-group">
        <div className="card-item sold-product">
          <h3>Sản phẩm đã bán</h3>
          <h2>9999</h2>
          <span>+99</span>
        </div>
        <div className="card-item out-stock-product">
          <h3>Sản phẩm hết hàng</h3>
          <h2>9999</h2>
          <span>+99</span>
        </div>
        <div className="card-item order-complete">
          <h3>Đơn hàng hoàn thành</h3>
          <h2>9999</h2>
          <span>+99</span>
        </div>
        <div className="card-item order-waiting">
          <h3>Đơn hàng chờ</h3>
          <h2>9999</h2>
          <span>+99</span>
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
