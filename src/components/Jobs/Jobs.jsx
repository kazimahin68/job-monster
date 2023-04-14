import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('./jobData.json').then(res => res.json()).then(data => setJobs(data))
    }, []);

    const [showAllJobs, setAllJobs] = useState(false);
    const handleShowAll = () => {
        setAllJobs(!showAllJobs);
    }
    const allJobs = [...jobs];
    const shownJobs = allJobs.slice(0, 4);
    const jobsToShow = showAllJobs ? jobs : shownJobs;
    // console.log(jobs)
    return (
        <div className='xl:w-4/5 w-11/12 mx-auto mt-32'>
            <div>
                <h2 className='text-4xl font-extrabold mb-4 text-center'>Featured Jobs</h2>
                <p className=' text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
                {
                    jobsToShow.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleShowAll} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none mb-10'>{showAllJobs ? "See Less Jobs" : "Show All Jobs"}</button>
            </div>
        </div>
    );
};

export default Jobs;