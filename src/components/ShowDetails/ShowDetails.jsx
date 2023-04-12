import React from 'react';
import { CalendarDaysIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ShowDetails = ({ details, handleJobs }) => {
    const { job_description, job_responsibility, experiences, educational_requirements, salary, job_title, address, contact_information } = details;
    // console.log(details)
    return (
        <div className='flex w-4/5 mx-auto gap-5 mb-32'>
            <div className='basis-8/12'>
                <p className='font-medium text-[#757575] mb-6'><span className='font-extrabold text-black'>Job Description: </span> {job_description}</p>
                <p className='font-medium text-[#757575] mb-6'><span className='font-extrabold text-black'>Job Responsibility: </span> {job_responsibility}</p>
                <p className='font-medium text-[#757575] mb-6'><span className='font-extrabold text-black'>Educational Requirements: </span> <br /> {educational_requirements}</p>
                <p className='font-medium text-[#757575] mb-6'><span className='font-extrabold text-black'>Experiences: </span> <br /> {experiences}</p>
            </div>
            <div>
                <div className='rounded-xl basis-4/12 bg-[#f4f1fe] p-7 mb-6'>
                    <div>
                        <h2 className='text-[#1A1919] font-extrabold text-xl mb-6'>Job Details</h2>
                        <hr className='mb-6' />
                        <p className='text-xl font-semibold text-[#757575] mb-6'><CurrencyDollarIcon className='w-6 h-6 inline mr-2  mb-1 text-[#7E90FE]'></CurrencyDollarIcon><span className='font-bold text-[#474747]'>Salary: </span>{salary}</p>
                        <p className='text-xl font-semibold text-[#757575] mb-8'><CalendarDaysIcon className='w-6 h-6 inline mr-2  mb-1 text-[#7E90FE]'></CalendarDaysIcon><span className='font-bold text-[#474747]'>Job Title: </span>{job_title}</p>
                    </div>
                    <div>
                        <h2 className='text-[#1A1919] font-extrabold text-xl mb-6'>Contact Information</h2>
                        <hr className='mb-6' />
                        <p className='text-xl font-semibold text-[#757575] mb-6'><PhoneIcon className='w-6 h-6 inline mr-2  mb-1 text-[#7E90FE]'></PhoneIcon><span className='font-bold text-[#474747]'>Phone: </span>{contact_information.phone}</p>
                        <p className='text-xl font-semibold text-[#757575] mb-6'><EnvelopeIcon className='w-6 h-6 inline mr-2  mb-1 text-[#7E90FE]'></EnvelopeIcon><span className='font-bold text-[#474747]'>Email: </span>{contact_information.email}</p>
                        <p className='text-xl font-semibold text-[#757575] mb-6'><MapPinIcon className='w-6 h-6 inline mr-2  mb-1 text-[#7E90FE]'></MapPinIcon><span className='font-bold text-[#474747]'>Address: </span>{address?.city}, {address?.country}, {address?.state}, {address?.street}, {address?.zip}</p>
                    </div>
                </div>
                <button onClick={() => handleJobs(details)} className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border-none text-white w-full font-bold text-xl'>Apply Now</button>
            </div>
        </div>
    );
};

export default ShowDetails;