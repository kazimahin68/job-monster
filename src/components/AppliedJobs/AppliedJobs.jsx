import React, { useEffect, useState } from 'react';
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';
import Banner from '../Banner/Banner';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { getAppliedJobs } from '../Utilities/LocalStorage';

const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('./jobData.json').then(res => res.json()).then(data => setJobs(data))
    }, []);
    const appliedJobs = [];
    const storedJobs = getAppliedJobs();
    for (const id in storedJobs){
        const addedJobs = jobs.find(job => job.id === parseInt(id));
        if(addedJobs){
            appliedJobs.push(addedJobs);
        }
    }
    
    return (

        <div>
            <div>
                <Banner appliedJob={true}></Banner>
            </div>

            <div className='w-4/5 mx-auto p-7 mt-32'>
                <div className="dropdown flex justify-end mb-6">
                    <label tabIndex={0} className="btn m-1 bg-[#f4f4f4] text-[#525252] border-0">Filter By <ChevronDownIcon className='w-6 h-6 inline ml-2'></ChevronDownIcon></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-14">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <div>
                    {
                        appliedJobs.map(job => <ShowAppliedJobs key={job.id} ShowAppliedJobs={job}></ShowAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;