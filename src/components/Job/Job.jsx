import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, address, company_logo, company_name, remote_or_onsite, salary, job_title } = job;
    return (
        <div className='p-10 border-2 border-[#f0f0f0] rounded-lg'>
            <img className='h-10 w-28 mb-8' src={company_logo} alt="" />
            <h2 className='text-2xl font-extrabold mb-2'>{job_title}</h2>
            <p className='text-lg font-semibold text-[#757575] mb-4'>{company_name}</p>
            <div className='flex items-center justify-center border-2 border-[#7E90FE] w-24 h-10 mb-4 rounded-lg'>
                <p className='font-semibold text-base text-[#7E90FE] text-center'>{remote_or_onsite}</p>
            </div>
            <div className='mb-6 flex flex-col md:flex-row gap-6'>
                <p className='text-xl font-semibold text-[#757575]'><MapPinIcon className='w-6 h-6 inline mr-2  mb-1'></MapPinIcon>{address.city}, {address.country}</p>
                <p className='text-xl font-semibold text-[#757575]'><CurrencyDollarIcon className='w-6 h-6 inline mr-2  mb-1'></CurrencyDollarIcon>{salary}</p>
            </div>
            <Link to={`/job/${id}`}><button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>View Details</button></Link>
        </div>
    );
};

export default Job;