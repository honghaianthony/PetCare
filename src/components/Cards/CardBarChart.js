import React, { useEffect } from "react";
import "./CardBarChart.css";
import Chart from "chart.js/auto";

function CardBarChart() {
    useEffect(() => {
        let config = {
            type: "bar",
            data: {
                labels: [
                    "Tháng 6",
                    "Tháng 7",
                    "Tháng 8",
                    "Tháng 9",
                    "Tháng 10",
                    "Tháng 11",
                    "Tháng 12",
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#ed64a6",
                        borderColor: "#ed64a6",
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#4c51bf",
                        borderColor: "#4c51bf",
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: "Orders Chart",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: "rgba(0,0,0,.4)",
                    },
                    align: "end",
                    position: "bottom",
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: "Month",
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: "Value",
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById("bar-chart").getContext("2d");
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <>
            <div className="card-bar-chart-container">
                <div className="card-bar-chart-top">
                    <div className="card-bar-chart-top-container">
                        <div className="card-bar-chart-top-title">
                            <h6>Tổng quan</h6>
                            <h2>Đơn đặt hàng</h2>
                        </div>
                    </div>
                </div>
                <div className="card-bar-chart-bottom">
                    <div className="card-bar-chart-main">
                        <canvas id="bar-chart"></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardBarChart;
