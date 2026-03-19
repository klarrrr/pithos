"use client";

import React from 'react'
import { Line } from "react-chartjs-2";
import { ChartOptions } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    
    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Sales",
                data: [10, 20, 30, 40, 50],
                borderColor: "#E11D48",
                backgroundColor: "#E11D48",
            },
        ],
    };

    const options = {};

    return <Line data={data} options={{
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Monthly Sales" },
        },
        maintainAspectRatio: false
    }}/>;
}

export default LineChart
