import { useEffect, useState } from "react";
import { getAllProducts } from "../../../apis/productApi";
import FilterProduct from "./FilterProduct";
import "./ProductDashboard.css";
import ProductList from "./ProductList";

const ProductDashBoard = () => {
  const [dataProducts, setDataProducts] = useState(null);
  const [needUpdateData, setNeedUpdateData] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await getAllProducts();
      setDataProducts(response);
      setNeedUpdateData(false);
    }
    if (needUpdateData) {
      fetchData();
    }
  }, [needUpdateData]);
  return (
    <>
      <div className="product-dashboard-container">
        <FilterProduct />
        <ProductList
          data={dataProducts}
          needUpdateData={() => setNeedUpdateData(true)}
        />
      </div>
    </>
  );
};

export default ProductDashBoard;
