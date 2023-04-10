import React from 'react';

const JobCategory = ({ jobCategory }) => {
    // console.log(jobCategory);
    const { jobs_available, logo, name } = jobCategory;
    return (
        <div className='p-10 bg-[#f9f8ff]  rounded-xl basis-3/4 md:basis-1/5 h-64'>
            <img className='w-16 h-16 mb-8' src={logo} alt="" />
            <h2 className='text-xl font-extrabold mb-2'>{name}</h2>
            <p className='text-[#757575]'>{jobs_available}  Jobs Available</p>
        </div>
    );
};

export default JobCategory; 