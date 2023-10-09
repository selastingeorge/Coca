"use client"
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, BarElement} from "chart.js";
import { Bar } from 'react-chartjs-2';

export const Chart = () => {
    ChartJS.register( BarElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

    const [font, setFont] = useState('Arial');
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Users',
            data: [746, 1406, 2573, 1273, 2573, 2413, 1101, 1503, 3000, 1618],
            backgroundColor: '#8FBFFF',
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
            barThickness: 20,
            barHoverBackgroundColor: '#4E9AFF',
            borderWidth: 3,
            borderColor: 'transparent',
            hoverBorderColor: '#4E9AFF33',
            hoverBorderWidth: 3
        }]
    }

    const options = {
        type: 'bar',
        responsive:true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        let label = context.raw;
                        return label;
                    },
                    title: () => '',
                }
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12,
                        weight: 400,
                    },
                    autoSkip: false,
                    minRotation: -90,
                    maxRotation:-90,
                    padding: 25,
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                min: 0,
                max: 3000,
                ticks: {
                    font: {
                        size: 12,
                        weight: 400,
                    },
                    stepSize: 1500,
                },
                grid: {
                    color: '#F2F4F7'
                },
                border: {
                    display: false,
                }
            },
        },
        font: {
            family: font
        }
    }

    useEffect(() => {
        setFont(document.body.dataset.font)
    })

    return (
        <Bar data={data} options={options} height={'100%'} />
    )
}