import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";
import EditJob from "../modals/EditJob";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Job.css";

import { useContext, useState } from "react";
import { Jobscontext } from "../context/Jobscontext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/authcontext";

import {
  faTrashCan,
  faArrowUpRightFromSquare,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import ViewAppliedStudents from "../modals/ViewAppliedStudents";
//import { UserAuth, UserAuthContextProvider } from "../context/authcontext";
const Job = ({ job }) => {

  const [ViewAppliedStudentsmodal,setViewAppliedStudentsmodal]=useState(false);
  const [EditJobmodal,setEditJobmodal]=useState(false);

  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user } = authcontext;

  console.log(job._id);
  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const handledelete = () => {
    console.log(job._id);
    axios
      .delete(`http://localhost:9000/api/jobs/${job._id}`,
      { headers: { 'Authorization': `Bearer ${user.token}` }})
      .then((response) => {
        console.log(response.data._id);
        dispatch({ type: "DELETEJOB", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
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
                  className="apply-btn"
                  title="Application link"
                  onClick={onClickUrl(job.applylink)}
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Button>
                <Button
                  title="Download"
                  variant="success"
                  className="dwnld-btn"
                >
                  <FontAwesomeIcon icon={faDownload} />
                </Button>

                <Button
                  title="Edit Job"
                  variant="secondary"
                  onClick={() => {
                    setEditJobmodal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>

                <EditJob
                  job={job}
                  EditJobmodal={EditJobmodal}
                  onClose={() => {
                    setEditJobmodal(false);
                  }}
                />

                <Button
                  title="Delete Job"
                  variant="danger"
                  className="dlt-btn"
                  onClick={handledelete}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>

                <Button
                  title="Applied Students"
                  variant="danger"
                  className="dlt-btn"
                  onClick={() => setViewAppliedStudentsmodal(true)}
                >
                  <FontAwesomeIcon icon={faAddressBook} />
                </Button>
              </div>
            </div>
            <ViewAppliedStudents
              job={job}
              ViewAppliedStudentsmodal={ViewAppliedStudentsmodal}
              setViewAppliedStudentsmodal={() =>
                setViewAppliedStudentsmodal(false)
              }
            />

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
