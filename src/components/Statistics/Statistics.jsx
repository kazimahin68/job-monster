import React from 'react';
import { PieChart } from 'recharts';
import Chart from '../Chart/PieChartComponent'
import PieChartComponent from '../Chart/PieChartComponent';

const Statistics = () => {
    return (
        <div className='flex mt-32 items-center justify-center'>
            <PieChartComponent></PieChartComponent>
        </div>
    );
};

export default Statistics;