import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "./EditAnnouncement.css";
import { Jobscontext } from "../context/Jobscontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserAuth } from '../context/authcontext';


function EditAnnouncement({ announcement,onclose,EditAnnouncementmodal }) {
  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user, dispatchRoleStudent } = authcontext;
 
  const context = useContext(Jobscontext);
  const { dispatch } = context;

  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(announcement.heading);
  const [description, setDescription] = useState(announcement.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();
    onclose();

    console.log(heading, description);
    const id = announcement._id;
    const announcementee = { heading, description };
    axios
      .patch("http://localhost:9000/api/announcements/" + id, announcementee,
      { headers: { 'Authorization': `Bearer ${user.token}` }})
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "UPDATEANNOUNCEMENT", payload: response.data });
        console.log("vishayam");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  if(EditAnnouncementmodal)
  {

  return (
    <>
       <div className='announcementedit-modal-container' >
        <div className='announcementedit-modal-content' >
          <button className='modal-close-btn' onClick={onclose} ><p>X</p></button>
          <div className='announcementedit-modal-title'>
            <h3>Edit Announcement</h3>
            <hr></hr>
          </div>
          <div className='announcementedit-modal-body'>
          <form onSubmit={handlesubmit} className="announcement-form">
            <div className="title">
              <div className="title-label">
                <label>Title :</label>
              </div>
              <div className="textbox">
                <input
                  className="text1"
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
            </div>
            <div className="desc">
              <div className="desc-label">
                <label>Description :</label>
              </div>
              <div className="textarea">
                <textarea
                  className="desc-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="sub">
              <Button className="sub-but" type="submit">
                Submit
              </Button>
            </div>
          </form>

          </div>
        </div>

      </div>

      

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Announcement</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className="title">
              <div className="title-label">
                <label>Title :</label>
              </div>
              <div className="textbox">
                <input
                  className="text1"
                  type="text"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
            </div>
            <div className="desc">
              <div className="desc-label">
                <label>Description :</label>
              </div>
              <div className="textarea">
                <textarea
                  className="area1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="sub">
              <Button className="sub-but" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal> */}
    </>
  );
  }
}
export default EditAnnouncement;
