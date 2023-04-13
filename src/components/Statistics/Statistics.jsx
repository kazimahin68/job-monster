import React from 'react';
import PieChartComponent from '../Chart/PieChartComponent';
import Banner from '../Banner/Banner';

const Statistics = () => {
    return (
       <div>
        <div>
            <Banner statistics ={true}></Banner>
        </div>
         <div className='flex mt-32 items-center justify-center'>
            <PieChartComponent></PieChartComponent>
        </div>
       </div>
    );
};

export default Statistics;