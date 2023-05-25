import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Job from '../../components/StdtJob';
import '../../css/JobsPage.css';
import { userStudent } from "../../context/userStudentContext";
import { useJobContext } from "../../customhooks/UseJobContext";

//import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
/>
const Jobspage = () => {

    const [eligibleJobs,seteligibleJobs]=useState();
    const {jobs}=useJobContext();
    const {student}=useContext(userStudent);
    console.log(student);
    useEffect(()=>{
        
       // 
       
        seteligibleJobs(jobs.filter((job)=>
        {
           return student.cgpa>=job.cgpa 
           && student.noofbacklogs<=job.noofbacklogs 
           && student.historyofbacklogs==job.history
           && job.branch.includes(student.branch)
        }))

    } , [jobs]
    )
  
   
        return (
        <div className="jobs-main">
            <div id="head-container" className="d-flex justify-content-between">
                <h1 id="heading">JOB ALERTS</h1>
            </div>
            <div className="content">
                {eligibleJobs && (
                    <div className="row row-cols-2">
                        {eligibleJobs.map((job) => (
                            <div className="col" key={job._id}>
                                <Job job={job} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    )
}

export default Jobspage;