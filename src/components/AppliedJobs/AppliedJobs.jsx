import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {
    const savedJobs = useLoaderData();
    // savedJobs.find(job => console.log(job.id));
    const [jobs, setJobs] = useState(savedJobs);
    // console.log(jobs)

    // console.log(job);
    return (

        <div>
            <div>
                <Banner appliedJob={true}></Banner>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className='container mx-auto p-7 mt-32'>
                {
                    jobs.map(job => <ShowAppliedJobs key={job.id} ShowAppliedJobs={job}></ShowAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;