import AddBlog from "../AddBlog";
import EditBlog from "../EditBlog";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";

export default function BlogList({ data, needUpdateData }) {
  return (
    <div className="blog-list-container">
      <div className="heading">
        {data && (
          <>
            <h3>{data.length} bài Blog</h3>
            <AddBlog needUpdate={() => needUpdateData()} />
          </>
        )}
      </div>
      <div className="blog-list">
        <div className="blog-list-table-container">
          <table>
            <thead>
              <tr>
                <th>Tiêu đề</th>
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
              {data &&
                data.map((item, index) => (
                  <tr key={index}>
                    {/* index >= (page - 1) * 6 && index < page * 6
                   <ProductItem data={item} key={index} /> */}
                    <td>
                      <div>
                        <span className="blog-title">
                          Sử dụng loại thức ăn nào cho phù hợp?
                        </span>
                        <span
                          className="blog-author"
                          style={{
                            color: "#00000080",
                            fontSize: "0.8em",
                          }}
                        >
                          Đặng Ngô Hồng Hải
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="blog-date-create">17-11-2022</span>
                    </td>
                    <td>
                      <span className="blog-date-update">23:07 17-11-2022</span>
                    </td>
                    <td>
                      <div className="method">
                        <Icon
                          icon="akar-icons:eye-open"
                          className="see-detail"
                        />
                        <EditBlog
                          needUpdate={() => needUpdateData()}
                          idBlog={item.id}
                        />
                        <Icon
                          icon="fluent:delete-24-regular"
                          className="delete-blog"
                        />
                      </div>
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
  );
}
