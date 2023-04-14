import React from 'react';
import image from '../../assets/all-Images/Banner-img.png';

const HomeBanner = () => {
    return (
        <div className='flex flex-col xl:flex-row items-center justify-between xl:w-4/5 w-11/12 mx-auto gap-y-5'>
            <div className='xl:my-20 mt-20'>
                <h2 className='text-7xl font-extrabold mb-6'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h2>
                <p className='text-[#757575] text-lg mb-8'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>Get Started</button>
            </div>
            <img className='md:w-fit w-full' src={image} alt="" />
        </div>
    );
};

export default HomeBanner;