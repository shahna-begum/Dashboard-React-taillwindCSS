import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            min: 20,
            max: 100,
            ticks: {
                stepSize: 20
            },
            grid: {
                dash: [10]
            }
        }
    },
    plugins: {
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [100, 50, 30, 70, 60, 80, 60, 100, 37, 40, 70, 20],
            backgroundColor: ["#d3cffc", "#786edc", "#d3cffc", "#786edc", "#d3cffc", "#786edc", "#d3cffc", "#786edc", "#d3cffc", "#786edc", "#d3cffc", "#786edc", "#d3cffc"],
            borderRadius: 8,
            with: 100,
            borderSkipped: false,

        },
    ],
};
export default function ChartBar() {
    return <Bar options={options} data={data} />;
}
