import React from "react";
import CardStats from "../Cards/CardStats";
import CardLineChart from "../Cards/CardLineChart";
import CardBarChart from "../Cards/CardBarChart";
import Doughnut from "../Cards/Doughnut";
import "./Statistic.css";

function Statistic() {
    return (
        <div className="admin-statistic-container">
            <div className="admin-statistic-container-detail">
                <div className="admin-statistic-card-stats-container">
                    <div className="admin-statistic-card-stats-detail">
                        <div className="admin-statistic-card-stats-main">
                            <CardStats
                                statsTitle="Người dùng"
                                statsNumber="8"
                                statsColor="card-stats-top-icon-background"
                                statsIcon="mdi:user-group"
                                statsPercentColor="card-stats-percent-color1"
                                statsArrow="up"
                                statsPercent="3.48"
                                statsDescription=" So với tháng trước"
                            />
                        </div>
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
