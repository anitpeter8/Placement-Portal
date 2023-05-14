import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import EditJob from "../modals/EditJob";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Job.css";
import { useContext } from "react";
import { Jobscontext } from "../context/Jobscontext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
const Job = ({ job }) => {
  console.log(job._id);
  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const handledelete = () => {
    console.log(job._id);
    axios
      .delete(`http://localhost:9000/api/jobs/${job._id}`)
      .then((response) => {
        console.log(response.data._id);
        dispatch({ type: "DELETEJOB", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  className="apply-btn" title="Application link"
                  onClick={() => {
                    window.location.href = job.applylink;
                  }}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Button>
                <EditJob job={job} />

                <Button 
                title="Delete Job"
                  variant="danger"
                  className="dlt-btn"
                  onClick={handledelete}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </div>
            </div>

            <Card.Title>
              <h5>{job.role}</h5>
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
