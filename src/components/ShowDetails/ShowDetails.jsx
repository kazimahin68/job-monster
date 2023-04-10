import React from 'react';

const ShowDetails = ({details}) => {
    const {job_description, job_responsibility, experiences, educational_requirements} = details;
    console.log(details)
    return (
        <div className='flex container mx-auto'>
            <div className='border-2 border-zinc-950 basis-8/12 h-24 w-32'>
                <p>{job_description}</p>
                <p>{job_responsibility}</p>
                <p>{experiences}</p>
                <p>{educational_requirements}</p>
            </div>
            <div className='border-2 border-red-700 basis-4/12 h-24 w-32'>

            </div>
        </div>
    );
};

export default ShowDetails;