import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-32'>
            <h2 className='text-9xl font-black text-[#7E90FE] mb-10'>404</h2>
            <p className='text-3xl font-bold text-[#7E90FE]'>Page Not Found</p>
        </div>
    );
};

export default ErrorPage;