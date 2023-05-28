import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Job.css";
import { useContext } from "react";
import { Jobscontext } from "../context/Jobscontext";
import axios from "axios";
import { useState } from "react";
const Job = ({ job,student }) => {

  console.log(job._id);
  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const handledelete = () => {
    console.log(job._id);
    axios.delete(`http://localhost:9000/api/jobs/${job._id}`).then((response) => {
      console.log(response.data._id);
      dispatch({ type: 'DELETEJOB', payload: response.data })


    }).catch((error) => {
      console.log(error);
    })

  }

    const [checked, setChecked] = useState(false);
    const handlechange = () => {
      setChecked(!checked)
      const data={heading:job.heading,
                  role:job.role,
                  database_id:job._id}
      axios.patch('http://localhost:9000/students/addjob/' + student._id,data).then((response) => {
      console.log(response.data);
      console.log('job added')

    }).catch((error) => {
      console.log(error)
      console.log("hi")
    })
    }
  

  return (
    <div className="single-card">
      <Card style={{ borderRadius: "25px" }} className="card-content">
        <Card.Header className="job-header" style={{ borderRadius: "25px" }}>
          <div>
            <Card.Title>
              <h5>{moment(job.createdAt).format("LL")}</h5>
            </Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Title>
                <h4>{job.heading}</h4>
              </Card.Title>
              <div className="buttons">
                <Button
                  variant="primary"
                  className="apply-btn"
                  onClick={() => {
                    window.location.href = job.link;
                  }}
                >
                  <div className="apply-here">
                    <div>Apply Here</div>

                    <div>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

                    </div>
                  </div>
                </Button>

              </div>

            </div>


            <Card.Title>
              <h5>{job.role}</h5>
              <h6>Have you applied?</h6>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={handlechange} />
              </div>
              {checked===true?'Checked':''}
            </Card.Title>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <p>{job.description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Job;
