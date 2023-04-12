import React from 'react';
import bgImg1 from '../../assets/all-Images/Vector.png';
import bgImg2 from '../../assets/all-Images/Vector-1.png';

const AppliedJobBanner = () => {
    return (
        <div>
             <div className='flex items-center justify-center w-4/5 mx-auto'>
                <div className='my-20'>
                    <img className='absolute left-0 bottom-0' src={bgImg1} alt="" />
                    <img className='absolute bottom-[125px] right-0' src={bgImg2} alt="" />
                    <h2 className='text-3xl font-extrabold'>Applied Jobs</h2>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobBanner;