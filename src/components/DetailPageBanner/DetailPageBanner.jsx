import React from 'react';
import bgImg1 from '../../assets/all-Images/Vector.png';
import bgImg2 from '../../assets/all-Images/Vector-1.png';

const DetailPageBanner = () => {
    return (
            <div className='flex items-center justify-center xl:w-4/5 w-11/12 mx-auto'>
                <div className='my-20'>
                    <img className='absolute left-0 bottom-0 w-40 md:w-80 md:h-48 h-24' src={bgImg1} alt="" />
                    <img className='absolute md:bottom-[115px] bottom-[190px] w-40 md:w-80 md:h-48 h-24 right-0' src={bgImg2} alt="" />
                    <h2 className='text-3xl font-extrabold'>Job Details</h2>
                </div>
            </div>
    );
};

export default DetailPageBanner;