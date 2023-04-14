
// Add Data to Local Storage 
const addToDb = (id) => {
    let appliedJob = getAppliedJobs();
    if (!appliedJob.hasOwnProperty(id)) {
      // alert('This job has already been applied to.');
      appliedJob[id] = 1;
      localStorage.setItem('applied-jobs', JSON.stringify(appliedJob));
    } 
    // else {
    // }
  }

  // Get Data From Local Storage 
const getAppliedJobs = () =>{
  let appliedJob ={};
  const storedJobs = localStorage.getItem('applied-jobs');
  if(storedJobs){
      appliedJob = JSON.parse(storedJobs)
  }
  return appliedJob;
}


export {
    addToDb,
    getAppliedJobs
}