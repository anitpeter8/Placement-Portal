import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function EditAnnouncement({announcement}) {
  const [show, setShow] = useState(false);
  const [heading,setHeading]=useState(announcement.heading);
  const [description,setDescription]=useState(announcement.description);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit=(e)=>{
    e.preventDefault();
   
    console.log(heading,description);
    const id=announcement._id;
    const announcementee={heading,description}
    axios.patch('http://localhost:5000/api/announcements/'+id,announcementee).then((response)=>{
        console.log(response.data);
        console.log('vishayam')
        
    }).catch((error)=>{
        console.log(error)
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +EditAnnouncement
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form onSubmit={handlesubmit}>
            <label>heading:</label>
            <input type='text' value={heading} onChange={(e)=>
            setHeading(e.target.value)
            }/>
            <label>description:</label>
            <input type='text' value={description} onChange={(e)=>
            setDescription(e.target.value)
            }/>
           <button type='submit'>Submit</button>
         </form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}
export default EditAnnouncement;