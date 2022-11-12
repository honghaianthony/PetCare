import FilterProduct from "../Filter/FilterProduct";
import "./ProductDashboard.css";
import ProductList from "./ProductList";

const ProductDashBoard = () => {
  return (
    <>
      <div className="product-dashboard-container">
        <FilterProduct />
        <ProductList />
      </div>
    </>
  );
};

export default ProductDashBoard;
