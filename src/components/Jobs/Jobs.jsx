import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobData.json').then(res => res.json()).then(data => setJobs(data))
    }, []);
    console.log(jobs)
    return (
        <div className='container mx-auto mt-32'>
            <div>
                <h2 className='text-4xl font-extrabold mb-4 text-center'>Featured Jobs</h2>
                <p className=' text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;