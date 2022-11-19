import "./ServiceDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";

const ServiceDashboard = () => {
  const data = [1, 2, 1, 2];

  return (
    <div className="service-dashboard-container">
      <div className="service-dashboard-card-group">
        <div className="heading">
          <h3>Thống kê</h3>
          <span>Cập nhật trong vòng 24h</span>
        </div>
        <div className="body">
          <div className="card-item">
            <span className="card-item-icon done-req">
              <Icon icon="material-symbols:done-rounded" />
            </span>
            <div>
              <h3>400</h3>
              <span>Đã tiếp nhận</span>
            </div>
          </div>
          <div className="card-item">
            <span className="card-item-icon pending-req">
              <Icon icon="material-symbols:pending-actions" />
            </span>
            <div>
              <h3>400</h3>
              <span>Chờ xử lý</span>
            </div>
          </div>
          <div className="card-item">
            <span className="card-item-icon new-req">
              <Icon icon="material-symbols:fiber-new-outline" />
            </span>
            <div>
              <h3>400</h3>
              <span>Yêu cầu mới</span>
            </div>
          </div>
        </div>
      </div>
      <div className="service-list-container">
        <div className="service-list">
          <div className="service-list-table-container">
            <table>
              <thead>
                <tr>
                  <th>Tên người yêu cầu</th>
                  <th>Loại dịch vụ yêu cầu</th>
                  <th>Ngày tạo</th>
                  <th>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Ngày hẹn</span>
                      <Icon
                        icon="bxs:sort-alt"
                        style={{ color: "gray", display: "block" }}
                      />
                    </div>
                  </th>
                  <th>Thời gian </th>

                  <th>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>Trạng thái</span>
                      <Icon
                        icon="bxs:sort-alt"
                        style={{ color: "gray", display: "block" }}
                      />
                    </div>
                  </th>
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
                          <span>Trần Bình Chương</span>
                          <span
                            style={{ color: "#00000080", fontSize: "0.8em" }}
                          >
                            09xxxxxxxx
                          </span>
                        </div>
                      </td>
                      <td>
                        <span>Triệt sản thú cưng</span>
                      </td>
                      <td>
                        <span>17-11-2022</span>
                      </td>
                      <td>
                        <span>19-11-2022</span>
                      </td>
                      <td>
                        <span>Ca 3 _ 13h - 15h</span>
                      </td>
                      <td>
                        <select
                          defaultValue={"Đã tiếp nhận"}
                          style={{
                            borderColor: "#008000",
                            color: "#008000",
                            fontWeight: "700",
                          }}
                        >
                          <option
                            value="Đã tiếp nhận"
                            style={{
                              color: "#008000",
                            }}
                          >
                            Đã tiếp nhận
                          </option>
                          <option
                            value="Chờ xử lý"
                            style={{
                              color: "#eb7222",
                            }}
                          >
                            Chờ xử lý
                          </option>
                          <option
                            value="Đã hủy"
                            style={{
                              color: "#ff0000",
                            }}
                          >
                            Đã hủy
                          </option>
                        </select>
                      </td>
                    </tr>
                  ) : (
                    <tr>
                      <td>
                        <div>
                          <span>Trần Bình Trọng</span>
                          <span
                            style={{ color: "#00000080", fontSize: "0.8em" }}
                          >
                            09xxxxxxxx
                          </span>
                        </div>
                      </td>
                      <td>
                        <span>Chích ngừa thú cưng</span>
                      </td>
                      <td>
                        <span>17-11-2022</span>
                      </td>
                      <td>
                        <span>18-11-2022</span>
                      </td>
                      <td>
                        <span>Ca 1 _ 7h - 9h</span>
                      </td>
                      <td>
                        <select
                          defaultValue={"Chờ xử lý"}
                          style={{
                            borderColor: "#008000",
                            color: "#008000",
                            fontWeight: "700",
                          }}
                        >
                          <option
                            value="Đã tiếp nhận"
                            style={{
                              color: "#008000",
                            }}
                          >
                            Đã tiếp nhận
                          </option>
                          <option
                            value="Chờ xử lý"
                            style={{
                              color: "#eb7222",
                            }}
                          >
                            Chờ xử lý
                          </option>
                          <option
                            value="Đã hủy"
                            style={{
                              color: "#ff0000",
                            }}
                          >
                            Đã hủy
                          </option>
                        </select>
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
  );
};
export default ServiceDashboard;
