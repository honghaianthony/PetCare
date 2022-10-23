import { useState } from "react";
import "./ProductDashboard.css";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const ProductDashBoard = () => {
  const [method, setMethod] = useState(2);
  return (
    <div className="product-dashboard">
      <div className="select-item">
        <button
          className={method === 1 ? "active" : undefined}
          onClick={() => setMethod(1)}
        >
          Đăng sản phẩm
        </button>
        <button
          className={method === 2 ? "active" : undefined}
          onClick={() => setMethod(2)}
        >
          Danh sách sản phẩm
        </button>
      </div>
      <div>{method === 1 && <ProductForm />}</div>
      <div>{method === 2 && <ProductList />}</div>
    </div>
  );
};
export default ProductDashBoard;
