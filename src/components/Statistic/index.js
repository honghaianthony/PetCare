import { useEffect, useState } from "react";
import CardStats from "../Cards/CardStats";
import CardLineChart from "../Cards/CardLineChart";
import CardBarChart from "../Cards/CardBarChart";
import Doughnut from "../Cards/Doughnut";
import { getAllUsers } from "../../apis/userApi";
import { getAllProducts } from "../../apis/productApi";
import { getAllBlogs } from "../../apis/blogApi";
import "./Statistic.css";

function Statistic() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await getAllUsers();
            setUsers(response.users);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await getAllProducts();
            setProducts(response);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await getAllBlogs();
            setBlogs(response);
        }
        fetchData();
    }, []);
    return (
        <div className="admin-statistic-container">
            <div className="admin-statistic-container-detail">
                <div className="admin-statistic-card-stats-container">
                    <div className="admin-statistic-card-stats-detail">
                        {users ? (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Người dùng"
                                    statsNumber={users.length}
                                    statsColor="card-stats-top-icon-background"
                                    statsIcon="mdi:user-group"
                                    statsPercentColor="card-stats-percent-color1"
                                    statsArrow="up"
                                    statsPercent="3.48"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        ) : (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Người dùng"
                                    statsNumber="6"
                                    statsColor="card-stats-top-icon-background"
                                    statsIcon="mdi:user-group"
                                    statsPercentColor="card-stats-percent-color1"
                                    statsArrow="up"
                                    statsPercent="3.48"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        )}
                        {products ? (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Sản phẩm"
                                    statsNumber={products.length}
                                    statsColor="card-stats-top-icon-background1"
                                    statsIcon="fluent-mdl2:product"
                                    statsPercentColor="card-stats-percent-color"
                                    statsArrow="down"
                                    statsPercent="2.48"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        ) : (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Sản phẩm"
                                    statsNumber="200"
                                    statsColor="card-stats-top-icon-background1"
                                    statsIcon="fluent-mdl2:product"
                                    statsPercentColor="card-stats-percent-color"
                                    statsArrow="down"
                                    statsPercent="2.48"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        )}
                        {blogs ? (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Bài viết"
                                    statsNumber={blogs.length}
                                    statsColor="card-stats-top-icon-background2"
                                    statsIcon="mdi:blog"
                                    statsPercentColor="card-stats-percent-color1"
                                    statsArrow="up"
                                    statsPercent="1"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        ) : (
                            <div className="admin-statistic-card-stats-main">
                                <CardStats
                                    statsTitle="Bài viết"
                                    statsNumber="16"
                                    statsColor="card-stats-top-icon-background2"
                                    statsIcon="mdi:blog"
                                    statsPercentColor="card-stats-percent-color1"
                                    statsArrow="up"
                                    statsPercent="1"
                                    statsDescription=" So với tháng trước"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="admin-statistic-card-line-chart-container">
                    <div className="admin-statistic-card-line-doughnut-container">
                        <div className="admin-statistic-card-line-chart-detail">
                            <CardLineChart />
                        </div>
                        <div className="admin-statistic-card-doughnut-detail">
                            <Doughnut />
                        </div>
                    </div>

                    <div className="admin-statistic-card-bar-chart-detail">
                        <CardBarChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;
