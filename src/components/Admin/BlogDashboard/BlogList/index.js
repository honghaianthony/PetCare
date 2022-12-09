import AddBlog from "../AddBlog";
import EditBlog from "../EditBlog";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import { deleteBlog } from "../../../../apis/blogApi";
import moment from "moment/moment";
export default function BlogList({ data, needUpdateData }) {
  async function handleDeleteBlog(id) {
    await deleteBlog(id);
    needUpdateData();
  }
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
                        <span className="blog-title">{item.title}</span>
                        <span
                          className="blog-author"
                          style={{
                            color: "#00000080",
                            fontSize: "0.8em",
                          }}
                        >
                          {`${item.user.firstName} ${item.user.lastName}`}
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="blog-date-create">
                        {moment(item.createdAt).format("DD/MM/YYYY - hh:mm")}
                      </span>
                    </td>
                    <td>
                      <span className="blog-date-update">
                        {moment(item.updatedAt).format("DD/MM/YYYY - hh:mm")}
                      </span>
                    </td>
                    <td>
                      <div className="method">
                        <Icon
                          icon="akar-icons:eye-open"
                          className="see-detail"
                        />
                        <EditBlog
                          needUpdate={() => needUpdateData()}
                          idBlog={item._id}
                        />
                        <Icon
                          icon="fluent:delete-24-regular"
                          className="delete-blog"
                          onClick={() => handleDeleteBlog(item._id)}
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
