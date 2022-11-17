import "./UserDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
const UserDashboard = () => {
  const data = [1, 2, 1, 2];
  return (
    <>
      <div className="user-dashboard-container">
        <div className="filter">
          <form>
            <div className="user-id">
              <label>Mã người dùng</label>
              <input type="text" />
            </div>
            <div className="user-name">
              <label>Tên người dùng</label>
              <input type="text" />
            </div>
            <div className="user-number">
              <label>Số điện thoại</label>
              <input type="text" />
            </div>
            <div className="user-role">
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
        <div className="user-list-container">
          <div className="heading">
            <h3>99 sản phẩm</h3>
          </div>
          <div className="user-list">
            <div className="user-list-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Tên</th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span> Vai trò </span>
                      </div>
                    </th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Số điện thoại</span>
                      </div>
                    </th>
                    <th>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Ngày tạo</span>
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
                            <div>Trần Bình Chương</div>
                            <div>chuongbinhtran2001@gmail.com</div>
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
                            }}
                          >
                            Admin
                          </span>
                        </td>
                        <td>
                          <span>09xxxxxxxxx</span>
                        </td>
                        <td>
                          <span>17-11-2022</span>
                        </td>
                        <td>
                          <div className="method">
                            <Icon
                              icon="akar-icons:eye-open"
                              className="see-detail"
                            />
                            <Icon
                              icon="akar-icons:edit"
                              className="edit-user"
                            />
                            <Icon
                              icon="fluent:delete-24-regular"
                              className="delete-user"
                            />
                          </div>
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td>
                          <div>
                            <div>Trần Bình Trọng</div>
                            <div>tranbinhtrong@gmail.com</div>
                          </div>
                        </td>
                        <td>
                          <span
                            style={{
                              border: "1px solid #4bc3ff",
                              width: "fit-content",
                              padding: "2px 8px",
                              color: "#4bc3ff",
                              fontWeight: "700",
                            }}
                          >
                            User
                          </span>
                        </td>
                        <td>
                          <span>09xxxxxxxxx</span>
                        </td>
                        <td>
                          <span>17-11-2022</span>
                        </td>
                        <td>
                          <div className="method">
                            <Icon
                              icon="akar-icons:eye-open"
                              className="see-detail"
                            />
                            <Icon
                              icon="akar-icons:edit"
                              className="edit-user"
                            />
                            <Icon
                              icon="fluent:delete-24-regular"
                              className="delete-user"
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
export default UserDashboard;
