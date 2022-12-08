export default function FilterBlog() {
  return (
    <div className="filter">
      <form>
        <div className="blog-id">
          <label>ID blog</label>
          <input type="text" />
        </div>
        <div className="blog-name">
          <label>Tiêu đề</label>
          <input type="text" />
        </div>
        <div className="blog-number">
          <label>Tác giả</label>
          <input type="text" />
        </div>
        <div className="blog-role">
          <label>Trạng thái</label>
          <select>
            <option value="all">Tất cả</option>
            <option value="stock">Đang hiển thị</option>
            <option value="out-stock">Đã ẩn</option>
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
}
