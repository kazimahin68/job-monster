import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <h2>One Step Closer To Your <span>Dream Job</span></h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>Get Started</button>
            </div>
            <img className='w-12 h-12' src="../../assets/all-Images/Banner-img.png" alt="" />
        </div>
    );
};

export default Banner;