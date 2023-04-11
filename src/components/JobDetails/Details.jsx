import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';
import Banner from '../Banner/Banner';

const Details = () => {
    // console.log(details);
    const allJobs = useLoaderData();
    let {id} = useParams();
    id = parseInt(id);

    const [detail, setDetail] = useState([]);

    useEffect(() =>{
        const detail = allJobs.filter(job => job.id === id);
        setDetail(detail);
    } ,[])
    // console.log(detail)
    // console.log(id)
    return (
        <div>
            <div>
                <Banner jobDetails = {true}></Banner>
            </div> 
            <div className='mt-32'>
            {
                    detail.map(detail => <ShowDetails key ={detail.id} details ={detail}></ShowDetails>)
                }
                </div> 

        </div>
    );
};

export default Details;