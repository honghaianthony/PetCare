import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterValue } from "../../../../redux/product.slice";

const FilterProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productMinPrice, setProductMinPrice] = useState("");
  const [productMaxPrice, setProductMaxPrice] = useState("");
  const [productState, setProductState] = useState("all");
  return (
    <div className="filter">
      <form>
        <div className="product-id">
          <label>Mã sản phẩm</label>
          <input type="text" />
        </div>
        <div className="product-name">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="product-price">
          <label>Giá</label>
          <input
            type="text"
            value={productMinPrice}
            onChange={(e) => setProductMinPrice(e.target.value)}
          />
          <input
            type="text"
            value={productMaxPrice}
            onChange={(e) => setProductMaxPrice(e.target.value)}
          />
        </div>
        <div className="product-state">
          <label>Trạng thái</label>
          <select onChange={(e) => setProductState(e.target.value)}>
            <option value="all">Tất cả</option>
            <option value="stock">Còn hàng</option>
            <option value="out-stock">Hết hàng</option>
          </select>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(
              filterValue({
                product_name: productName,
                product_min_price: productMinPrice * 1,
                product_max_price: productMaxPrice * 1,
                product_state: productState,
              })
            );
          }}
        >
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default FilterProduct;
