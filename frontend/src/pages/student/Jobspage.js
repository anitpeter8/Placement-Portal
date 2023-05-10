import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Job from '../../components/Job';
import '../../css/JobsPage.css';
import { userStudent } from "../../context/userStudentContext";
//import 'bootstrap/dist/css/bootstrap.min.css';
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
/>
const Jobspage = () => {
    const context=useContext(userStudent);
    const {student,dispatchstudent}=context;
 
    const [jobs, setjobs] = useState()
    useEffect(() => {
        axios.get('http://localhost:9000/api/jobs').then((response) => {

            console.log(response.data)
            const studentuser=JSON.parse(localStorage.getItem('student'));
            if(studentuser){
                console.log(studentuser);
                dispatchstudent({ type: "SETSTUDENTUSER", payload:studentuser});

            }
            setjobs(response.data);
            
        });
    }, [])
  
    var eligibleJobs=null;
    if(student){
        if(jobs){
            console.log(jobs)
            eligibleJobs=jobs.filter((job)=>
            {
               return student.cgpa>=job.cgpa 
               && student.noofbacklogs<=job.noofbacklogs 
               && student.historyofbacklogs==job.history
               && job.branch.includes(student.branch)
            }
            );
            if(eligibleJobs){
            console.log(eligibleJobs)}
        }
    }
  
   
        return (
        <div className="jobs-main">
            <div id="head-container" className="d-flex justify-content-between">
                <h1 id="heading">JOBS</h1>
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