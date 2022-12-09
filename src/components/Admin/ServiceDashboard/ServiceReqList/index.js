import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import moment from "moment";
import { delteteService } from "../../../../apis/serviceApi";

const ServiceReqList = ({ data, needUpdateData }) => {
  return (
    <>
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
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => (
                    <tr key={item._id}>
                      <td>
                        <div>
                          <span>{item.fullName}</span>
                          <span
                            style={{ color: "#00000080", fontSize: "0.8em" }}
                          >
                            {item.phoneNumber}
                          </span>
                        </div>
                      </td>
                      <td>
                        <span>{item.serviceType}</span>
                      </td>
                      <td>
                        <span>
                          {moment(item.createdAt).format("DD/MM/YYYY")}
                        </span>
                      </td>
                      <td>
                        <span>{moment(item.date).format("DD/MM/YYYY")}</span>
                      </td>
                      <td>
                        <button
                          className="btn-delete-service-req"
                          onClick={async () => {
                            await delteteService(item._id);
                            needUpdateData();
                          }}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
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
    </>
  );
};
export default ServiceReqList;
