import "./BlogDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
const BlogDashboard = () => {
  const data = [1, 2, 1, 2];
  return (
    <>
      <div className="blog-dashboard-container">
        <div className="filter">
          <form>
            <div className="blog-id">
              <label>Mã người dùng</label>
              <input type="text" />
            </div>
            <div className="blog-name">
              <label>Tên người dùng</label>
              <input type="text" />
            </div>
            <div className="blog-number">
              <label>Số điện thoại</label>
              <input type="text" />
            </div>
            <div className="blog-role">
              <label>Vai trò</label>
              <select>
                <option value="all">Tất cả</option>
                <option value="stock">Admin</option>
                <option value="out-stock">User</option>
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
        <div className="blog-list-container">
          <div className="heading">
            <h3>12 bài Blog</h3>
          </div>
          <div className="blog-list">
            <div className="blog-list-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Tiêu đề</th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span> Trạng thái</span>
                      </div>
                    </th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Ngày tạo</span>
                      </div>
                    </th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Lần chỉnh sửa gần nhất</span>
                      </div>
                    </th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) =>
                    item === 1 ? (
                      // index >= (page - 1) * 6 && index < page * 6
                      // <ProductItem data={item} key={index} />
                      <tr>
                        <td>
                          <div>
                            <span>Sử dụng loại thức ăn nào cho phù hợp?</span>
                            <span
                              style={{ color: "#00000080", fontSize: "0.8em" }}
                            >
                              Đặng Ngô Hồng Hải
                            </span>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{
                              border: "1px solid #ff4b4b",
                              width: "fit-content",
                              padding: "2px 8px",
                              color: "#ff4b4b",
                              fontWeight: "700",
                              background: "#ff4b4b10",
                            }}
                          >
                            Đã ẩn
                          </span>
                        </td>
                        <td>
                          <span>17-11-2022</span>
                        </td>
                        <td>
                          <span>23:07 17-11-2022</span>
                        </td>
                        <td>
                          <div className="method">
                            <Icon
                              icon="akar-icons:eye-open"
                              className="see-detail"
                            />
                            <Icon
                              icon="akar-icons:edit"
                              className="edit-blog"
                            />
                            <Icon
                              icon="fluent:delete-24-regular"
                              className="delete-blog"
                            />
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td>
                          <div>
                            <span>Nuôi MÈO có mệt không?</span>
                            <span
                              style={{ color: "#00000080", fontSize: "0.8em" }}
                            >
                              Trần Bình Chương
                            </span>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{
                              border: "1px solid #048918",
                              width: "fit-content",
                              padding: "2px 8px",
                              color: "#048918",
                              background: "#04891810",
                              fontWeight: "700",
                            }}
                          >
                            Đang hiển thị
                          </span>
                        </td>
                        <td>
                          <span>17-11-2022</span>
                        </td>
                        <td>
                          <span>19:10 17-11-2022</span>
                        </td>
                        <td>
                          <div className="method">
                            <Icon
                              icon="akar-icons:eye-open"
                              className="see-detail"
                            />
                            <Icon
                              icon="akar-icons:edit"
                              className="edit-blog"
                            />
                            <Icon
                              icon="fluent:delete-24-regular"
                              className="delete-blog"
                            />
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "8px 0px",
              }}
            >
              <Pagination total={6} initialPage={1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDashboard;
