import React from 'react';
import {NoSymbolIcon} from '@heroicons/react/24/outline';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <NoSymbolIcon className= 'w-40 h-40 text-red-600'></NoSymbolIcon>
            <h2 className='text-9xl font-black text-[#7E90FE] mb-10'>404</h2>
            <p className='text-3xl font-bold text-[#7E90FE]'>Page Not Found</p>
        </div>
    );
};

export default ErrorPage;