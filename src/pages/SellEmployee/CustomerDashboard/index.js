import "./UserDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import { getAllCustomers, deleteUser } from "../../../apis/userApi";
import { useEffect, useState } from "react";
import EditUserForm from "../CustomerDashboard/EditUser/EditUserForm";

const CustomerDashboard = () => {
    const [users, setUsers] = useState([]);

    const [visible, setVisible] = useState("");
    const [needUpdate, setNeedUpdate] = useState(true);
    useEffect(() => {
        async function fetchData() {
            const response = await getAllCustomers();
            setUsers(response.users);
        }
        if (needUpdate) {
            fetchData();
            setNeedUpdate(false);
        }
    }, [needUpdate]);

    async function handleDeleteUser(id) {
        await deleteUser(id);
        setNeedUpdate(true);
    }

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
                        <h3>{users.length} người dùng</h3>
                    </div>
                    <div className="user-list">
                        <div className="user-list-table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span> Vai trò </span>
                                            </div>
                                        </th>
                                        <th>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span>Số điện thoại</span>
                                            </div>
                                        </th>
                                        <th>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <span>Ngày tạo</span>
                                            </div>
                                        </th>

                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>
                                                        <div>
                                                            <div>
                                                                {item.firstName}{" "}
                                                                {item.lastName}
                                                            </div>
                                                            <div>
                                                                {item.email}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span
                                                            style={{
                                                                border: "1px solid #ff4b4b",
                                                                width: "fit-content",
                                                                padding:
                                                                    "2px 8px",
                                                                color: "#ff4b4b",
                                                                fontWeight:
                                                                    "700",
                                                            }}
                                                        >
                                                            {item.role === 1
                                                                ? "Khách hàng"
                                                                : "Khác"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            {item.phone
                                                                ? item.phone
                                                                : "Không có"}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            {new Date(
                                                                item.createdAt
                                                            ).toLocaleDateString()}
                                                        </span>
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
                                                                onClick={() =>
                                                                    setVisible(
                                                                        item._id
                                                                    )
                                                                }
                                                            />
                                                            {visible ===
                                                                item._id && (
                                                                <EditUserForm
                                                                    idUser={
                                                                        item._id
                                                                    }
                                                                    onClose={() =>
                                                                        setVisible(
                                                                            false
                                                                        )
                                                                    }
                                                                    submitSuccess={() =>
                                                                        setNeedUpdate(
                                                                            true
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                            <Icon
                                                                icon="fluent:delete-24-regular"
                                                                className="delete-user"
                                                                onClick={() =>
                                                                    handleDeleteUser(
                                                                        item._id
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })}
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
                            <Pagination total={Math.ceil(users.length / 3)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CustomerDashboard;
