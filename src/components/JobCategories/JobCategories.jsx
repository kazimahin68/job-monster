import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';

const JobCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./availableJobInfo.json').then(res => res.json()).then(data => setCategories(data));
    }, [])
    // console.log(categories);
    return (
        <div className='w-4/5 mx-auto mt-32'>
            <h2 className='text-4xl font-extrabold mb-4 text-center'>Job Category List</h2>
            <p className=' text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-between items-center flex-col md:flex-row  gap-y-5'>
                {
                    categories.map(jc => <JobCategory key={jc.id} jobCategory={jc}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategories;