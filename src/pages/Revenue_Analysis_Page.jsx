import { revenueData } from '../services/fake_data.jsx'
import Header from '../components/header.jsx'
import Side_bar from "../components/Menu";
import { Card, Space } from 'antd';
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);


function Revenue_Analysis_Page() {

    const [totRevenue, setTotRevenue] = useState(0);
    const [totOrder, setTotOrder] = useState(0);

    useEffect(() => {
        let totalRevenue = 0;
        let totalOrders = 0;
        for (let i = 0; i < revenueData.length; i++) {
            totalRevenue += revenueData[i].revenue;
            totalOrders += revenueData[i].orders;
        }

        setTotRevenue(totalRevenue);
        setTotOrder(totalOrders);
    }, []);


    const chartData = {
        labels: revenueData.map(item => item.month),
        datasets: [
            {
                label: 'Revenue',
                data: revenueData.map(item => item.revenue),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.4,
            },
            {
                label: 'Orders',
                data: revenueData.map(item => item.orders),
                borderColor: 'rgba(153,102,255,1)',
                backgroundColor: 'rgba(153,102,255,0.2)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div>
            <Header />

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'flex-start'
            }}>
                <Side_bar onSelect={(key) => {
                    console.log("Selected:", key);
                }} />

                <div style={{ width: '80%' }}>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>
                        <Space direction="horizontal" size={106}>
                            <Card>
                                <h3>Total Orders: <u><i>{totOrder}</i></u></h3>
                            </Card>
                            <Card>
                                <h3>Total Revenue: <u><i> ${totRevenue}</i></u></h3>
                            </Card>
                        </Space>
                    </div>

                    <div style={{ marginTop: '50px', marginBottom: '20px', width: '90%' }}>
                        <Line data={chartData} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Revenue_Analysis_Page;
