const FilterProduct = () => {
  return (
    <div className="filter">
      <form>
        <div className="product-id">
          <label>Mã sản phẩm</label>
          <input type="text" />
        </div>
        <div className="product-name">
          <label>Tên sản phẩm</label>
          <input type="text" />
        </div>
        <div className="product-price">
          <label>Giá</label>
          <input type="text" />
          <input type="text" />
        </div>
        <div className="product-state">
          <label>Trạng thái</label>
          <select>
            <option value="all">Tất cả</option>
            <option value="stock">Còn hàng</option>
            <option value="out-stock">Hết hàng</option>
          </select>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Tìm kiếm
        </button>
      </form>
    </div>
  );
};

export default FilterProduct;
