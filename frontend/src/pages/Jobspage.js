import axios from "axios";
import { useEffect, useState } from "react";
import NewJob from  '../modals/NewJob';
import Job from '../components/Job';
import '../css/JobsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
/>
const Jobspage = () => {
    const [jobs, setjobs] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/api/jobs').then((response) => {
            
            console.log(response.data)
            setjobs(response.data);
          
        });
    },[])
    console.log(jobs)
    return (
        <>
        <div id="head-container" className="d-flex justify-content-between">
            <h1 id="heading">JOBS</h1>
            <NewJob/>
        </div>
        <div className="content">
        {jobs && (
            <div className="row row-cols-2">
            {jobs.map((job)=>(
                <div className="col" key={job._id}>
                    <Job job={job} />
                </div>
        ))}
        </div>
        )}
      </div>
    </>

    )
}

export default Jobspage;