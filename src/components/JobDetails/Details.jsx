import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';
import Banner from '../Banner/Banner';
import { addToDb } from '../Utilities/LocalStogage';

const Details = () => {
    // console.log(details);
    const allJobs = useLoaderData();
    let {id} = useParams();
    id = parseInt(id);

    const [detail, setDetail] = useState([]);
    const [jobs, setJobs] = useState([]);
    console.log(jobs)

    useEffect(() =>{
        const detail = allJobs.filter(job => job.id === id);
        setDetail(detail);
    } ,[])
    // console.log(detail)
    // console.log(id)
    const handleJobs = (details) =>{
        let newJob = [];
        const exists = jobs.find(job => job.id === details.id);
        if(!exists){
            newJob = [...jobs, details]
        }
        setJobs(newJob);
        addToDb(details.id);
    }
    return (
        <div>
            <div>
                <Banner jobDetails = {true}></Banner>
            </div> 
            <div className='mt-32'>
            {
                    detail.map(detail => <ShowDetails key ={detail.id} details ={detail}handleJobs = {handleJobs}></ShowDetails>)
                }
                </div> 

        </div>
    );
};

export default Details;