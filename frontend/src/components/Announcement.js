import EditAnnouncement from "../modals/EditAnnouncement";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Announcement.css";
import moment from "moment";
import { useContext, useState } from "react";
import { Jobscontext } from "../context/Jobscontext";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
const Announcement = ({ announcement }) => {
  const context = useContext(Jobscontext);
  const { dispatch } = context;
  const handledelete = () => {
    console.log(announcement._id);
    axios.delete(`http://localhost:9000/api/announcements/${announcement._id}`).then((response) => {
      console.log(response.data._id);
      dispatch({ type: 'DELETEANNOUNCEMENT', payload: response.data })


    }).catch((error) => {
      console.log(error);
    })

  }

  const [EditAnnouncementmodal, setEditAnnouncementmodal] = useState(false);

  return (
    <div className="single-card">
      <Card style={{ borderRadius: "25px" }} className="card-content">
        <Card.Header className="anct-header" style={{ borderRadius: "25px" }}>
          <div className="d-flex justify-content-between">
            <Card.Title>
              <h5>{moment(announcement.createdAt).format("LL")}</h5>
            </Card.Title>
           <div >
            
            <Button
              variant="secondary"
              style={{ backgroundColor: "#3A8ECB" , marginleft:"10px" }}
              onClick={()=>setEditAnnouncementmodal(true)}>

              <div className="btns">
                <div className="edit-btn">
                  <div>Edit</div>
                  <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
                </div>

            </Button>
            <EditAnnouncement announcement={announcement} 
            onclose={()=>setEditAnnouncementmodal(false)}
             EditAnnouncementmodal={EditAnnouncementmodal}/>

            <Button variant="danger" className="dlt" onClick={handledelete}>
              <div className="dlt-button">
                <div>Delete</div>
                <div>
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              </div>
            </Button>
            </div>
          </div>
       
        <Card.Title>
          <h4>{announcement.heading}</h4>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>{announcement.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div >
  );
};
export default Announcement;
