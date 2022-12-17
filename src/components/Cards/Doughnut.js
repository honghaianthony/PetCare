import React, { useEffect } from "react";

import Chart from "chart.js/auto";

function Doughnut() {
    useEffect(() => {
        var config = {
            type: "doughnut",
            data: {
                labels: ["Chó", "Mèo", "Chuột"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [300, 50, 100],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)",
                        ],
                        hoverOffset: 4,
                    },
                ],
            },
        };
        var ctx = document.getElementById("doughnut-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }, []);
    return <canvas id="doughnut-chart"></canvas>;
}

export default Doughnut;
