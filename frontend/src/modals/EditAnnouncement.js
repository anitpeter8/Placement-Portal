import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "./EditAnnouncement.css";
import { Jobscontext } from '../context/jobscontext';

function EditAnnouncement({ announcement }) {
  const context=useContext(Jobscontext);
  const {dispatch}=context;

  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState(announcement.heading);
  const [description, setDescription] = useState(announcement.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(heading, description);
    const id = announcement._id;
    const announcementee = { heading, description }
    axios.patch('http://localhost:9000/api/announcements/' + id, announcementee).then((response) => {
      console.log(response.data);
      dispatch({type:'UPDATEANNOUNCEMENT',payload:response.data});
      console.log('vishayam')

    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <Button variant="primary" style={{ backgroundColor: '#3A8ECB', height: '35px', width: '90px' }} onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
       <Modal.Header closeButton>
          
          <Modal.Title >Edit Announcement</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className='title'>
            <div className='title-label'>
            <label>Title :</label>
            </div>
            <div className='textbox'>
            <input className='text1' type='text' value={heading} onChange={(e) =>
              setHeading(e.target.value)
            } />
            </div>
            </div>
            <div className='desc'>
            <div className='desc-label'>
            <label>Description :</label></div>
            <div className='textarea'>
            <textarea className='area1' value={description} onChange={(e) =>
              setDescription(e.target.value)
            } />
            </div>
            </div>
            <div className='sub'>
            <button className='sub-but'  type='submit'>Submit</button>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default EditAnnouncement;