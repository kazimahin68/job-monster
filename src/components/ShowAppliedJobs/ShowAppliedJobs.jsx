import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

const ShowAppliedJobs = ({ ShowAppliedJobs }) => {
    // console.log(ShowAppliedJobs);
    const { company_logo, company_name, job_title, remote_or_onsite, address, salary, id } = ShowAppliedJobs;
    return (
        <div className='mb-6 p-4 md:p-10 border-2 border-[#f0f0f0] rounded-lg flex items-center flex-col md:flex-row justify-between'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='bg-[#F4F4F4] flex justify-center items-center rounded-lg w-60 h-60'>
                    <img className='h-10 w-28' src={company_logo} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-extrabold mb-2 text-[#474747]'>{job_title}</h2>
                    <p className='text-lg font-semibold text-[#757575] mb-4'>{company_name}</p>
                    <div className='flex items-center justify-center border-2 border-[#7E90FE] w-24 h-10 mb-4 rounded-lg'>
                        <p className='font-semibold text-base text-[#7E90FE] text-center'>{remote_or_onsite}</p>
                    </div>
                    <div className='mb-6 flex flex-col md:flex-row gap-6 md:items-center items-start'>
                        <p className='text-xl font-semibold text-[#757575]'><MapPinIcon className='w-6 h-6 inline mr-2  mb-1'></MapPinIcon>{address.city}, {address.country}</p>
                        <p className='text-xl font-semibold text-[#757575]'><CurrencyDollarIcon className='w-6 h-6 inline mr-2  mb-1'></CurrencyDollarIcon>{salary}</p>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`}><button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none'>View Details</button></Link>
        </div>

    );
};

export default ShowAppliedJobs;