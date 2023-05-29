import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './NewAnnouncement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jobscontext } from '../context/Jobscontext';
function NewAnnouncement({onclose,NewAnnouncementmodal}) {
  const context=useContext(Jobscontext);
  const {dispatch}=context;
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(heading, description);
    const announcement = { heading, description };
    axios.post("http://localhost:9000/api/announcements", announcement).then((response) => {
      console.log(response.data);
      dispatch({type:'CREATEANNOUNCEMENT',payload:response.data});

      console.log('vishayam')
      setHeading('');
      setDescription('');
    }).catch()
  }

  if(NewAnnouncementmodal)
  {
  return (
    <>
     <div className='announcementedit-modal-container' >
        <div className='announcementedit-modal-content' >
          <button className='modal-close-btn' onClick={onclose} ><p>X</p></button>
          <div className='announcementedit-modal-title'>
            <h3>Add Announcement</h3>
            <hr></hr>
          </div>
          <div className='announcementedit-modal-body'>
          <form onSubmit={handlesubmit} className="announcement-form">
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
            <textarea className='desc-textarea' value={description} onChange={(e) =>
              setDescription(e.target.value)
            } />
            </div>
            </div>
            <div className='sub'>
            <Button className='sub-but'  type='submit' >Submit</Button>
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
          
          <Modal.Title >New Announcement</Modal.Title>
          
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
            <Button className='sub-but'  type='submit'>Submit</Button>
            </div>
          </form>
        </Modal.Body>

      </Modal> */}
    </>
  );
  }
}
export default NewAnnouncement;