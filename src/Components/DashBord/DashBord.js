import React from 'react';
import './DashBord.css';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    const data2 = [
        {
        name: "18-24",
        uv: 31.47,
        pv: 2400,
        fill: "#8884d8"
        },
        {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed"
        },
        {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1"
        },
        {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d"
        },
        {
        name: "40-49",
        uv: 8.63,
        pv: 3908,
        fill: "#a4de6c"
        },
        {
        name: "50+",
        uv: 2.63,
        pv: 4800,
        fill: "#d0ed57"
        },
        {
        name: "unknow",
        uv: 6.67,
        pv: 4800,
        fill: "#ffc658"
        }
    ];

    const style = {
        top: 0,
        left: 350,
        lineHeight: "24px"
    };

const DashBord = () => {

    return (
        <div className='dashBord-section'>

            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="month" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data2}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Tooltip />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                <Line type="monotone" dataKey="sell" stroke="red" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default DashBord;