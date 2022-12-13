import "./HistoryOrderDashboard.css";
import { Icon } from "@iconify/react";
import { Pagination } from "@nextui-org/react";
import { getAllOrders, updateOrder } from "../../../apis/orderApi";
import { useEffect, useState } from "react";
const HistoryOrderDashboard = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllOrders();
            setOrder(res);
        };
        fetchData();
    }, []);

    const setStatusUI = (index, status) => {
        let temp = Array.from(order);
        temp[index] = {
            ...temp[index],
            status: status,
        };
        setOrder(temp);
    };

    const updateOrderNow = async (id, status, index) => {
        const body = {
            _id: id,
            status: status,
        };
        let response = await updateOrder(body);
        if (response.errCode === 0) {
            console.log(response);
            setStatusUI(index, status);
        } else {
            console.log(response);
            console.log("Done");
        }
    };

    return (
        <div className="history-order-dashboard-container">
            <div className="history-order-dashboard-card-group">
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
                            <span>Đã giao</span>
                        </div>
                    </div>
                    <div className="card-item">
                        <span className="card-item-icon delivering-req">
                            <Icon icon="carbon:delivery" />
                        </span>
                        <div>
                            <h3>400</h3>
                            <span>Đang giao</span>
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
            <div className="history-order-list-container">
                <div className="history-order-list">
                    <div className="history-order-list-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên người yêu cầu</th>
                                    <th>Địa chỉ</th>
                                    <th>Ngày tạo</th>

                                    <th>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <span>Trạng thái</span>
                                            <Icon
                                                icon="bxs:sort-alt"
                                                style={{
                                                    color: "gray",
                                                    display: "block",
                                                }}
                                            />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div>
                                                <span>{item.fullName}</span>
                                                <span
                                                    style={{
                                                        color: "#00000080",
                                                        fontSize: "0.8em",
                                                    }}
                                                >
                                                    {item.phoneNumber}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{item.address}</span>
                                        </td>
                                        <td>
                                            <span>{item.createdAt}</span>
                                        </td>

                                        <td>
                                            <select
                                                value={item.status}
                                                onChange={async (e) => {
                                                    await updateOrderNow(
                                                        item._id,
                                                        e.target.value,
                                                        index
                                                    );
                                                }}
                                            >
                                                <option
                                                    value="0"
                                                    style={{
                                                        color: "#FFD700",
                                                    }}
                                                >
                                                    Chờ xử lý
                                                </option>
                                                <option
                                                    value="1"
                                                    style={{
                                                        color: "#008000",
                                                    }}
                                                >
                                                    Đã tiếp nhận
                                                </option>
                                                <option
                                                    value="2"
                                                    style={{
                                                        color: "#eb7222",
                                                    }}
                                                >
                                                    Đang giao
                                                </option>
                                                <option
                                                    value="3"
                                                    style={{
                                                        color: "#ff0000",
                                                    }}
                                                >
                                                    Đã hủy
                                                </option>
                                            </select>
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
        </div>
    );
};
export default HistoryOrderDashboard;
