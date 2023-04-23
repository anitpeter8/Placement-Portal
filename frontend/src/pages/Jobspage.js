import axios from "axios";
import { useEffect, useState } from "react";
import NewJob from  '../modals/NewJob';

const Jobspage = () => {
    const [jobs,setjobs] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs').then((response) => {
            
            console.log(response.data)
            setjobs(response.data);
          
        });
    },[])
    console.log(jobs)
    return (
        <>
        <h2>Jobs</h2>
        <NewJob/>
        {jobs && jobs.map((job)=>(

            <div>
            <p>{job.heading}</p>
            <p>{job.branch}</p>
            </div>
        ))}
        </>

    )
}

export default Jobspage;