import { getAppliedJobs } from "./LocalStorage";

const appliedJobsLoader = async () =>{
    const loadedJobs = await fetch('/public/jobData.json');
    const jobs = await loadedJobs.json();
    const storedJobs = getAppliedJobs();
    let savedJobs = [];
    for (const id in storedJobs){
        const addedJobs = jobs.find(job => job.id === parseInt(id));
        if(addedJobs){
            savedJobs.push(addedJobs);
        }
    }
    return savedJobs;
}

export default appliedJobsLoader;