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
    // console.log(appliedJobs)
    const [locationFilter, setLocationFilter] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLocationFilter = (location) =>{
        setIsDropdownOpen(false);
        setLocationFilter(location);
        //   console.log(location)
    }
    const filteredJobs = locationFilter ? appliedJobs.filter(job => job.remote_or_onsite === locationFilter) : appliedJobs;
    
    return (

        <div>
            <div>
                <Banner appliedJob={true}></Banner>
            </div>

            <div className='w-4/5 mx-auto mt-32'>
                <div className="dropdown flex justify-end mb-6">
                    <label onClick={() => setIsDropdownOpen(!isDropdownOpen)} tabIndex={0} className="btn m-1 bg-[#f4f4f4] text-[#525252] border-0 hover:bg-[#7E90FE]">Filter By <ChevronDownIcon className='w-6 h-6 inline ml-2'></ChevronDownIcon></label>
                    <ul tabIndex={0} className={`dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-14 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                        <li><a onClick={()=> handleLocationFilter('Onsite')}>Onsite Jobs</a></li>
                        <hr />
                        <li><a onClick={()=> handleLocationFilter('Remote')}>Remote Jobs</a></li>
                        <hr />
                        <li><a onClick={() => handleLocationFilter('')}>All Jobs</a></li>
                    </ul>
                </div>
                <div>
                    {
                        filteredJobs.map(job => <ShowAppliedJobs key={job.id} ShowAppliedJobs={job}></ShowAppliedJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;