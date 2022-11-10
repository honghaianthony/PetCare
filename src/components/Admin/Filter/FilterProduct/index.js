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
            <option>Còn hàng</option>
            <option>Hết hàng</option>
          </select>
        </div>
        <button>Tìm kiếm</button>
      </form>
    </div>
  );
};

export default FilterProduct;
