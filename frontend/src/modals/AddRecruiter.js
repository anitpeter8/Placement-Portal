import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './AddRecruiter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function NewRecruiter() {
  const [show, setShow] = useState(false);
  const [year, setYear] = useState('');
  const [offers, setOffers] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(year, offers);
    const newYear = { year, offers};
    axios.post("http://localhost:9000/api/statistics",newYear ).then((response) => {
      console.log(response.data);
      console.log('vishayam')
      setYear('');
      setOffers('');
    }).catch()
  }

  return (
    <>
   
      <Button variant="primary" style={{ backgroundColor: '#ffa8a2', height: '45px', color: '#660a0a'}} onClick={handleShow}>
        + New Recruiter
      </Button>
      <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        
        <Modal.Header closeButton>
          
          <Modal.Title >New Recruiter</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
          <form onSubmit={handlesubmit}>
            <div className='year-modal'>
            <div className='year-label'>
            <label>Recruiter :</label>
            </div>
            <div className='textbox-year'>
            <input className='text-year' type='text' value={year} onChange={(e) =>
              setYear(e.target.value)
            } />
            </div>
            </div>
            <div className='sub'>
            <Button className='sub-but'  type='submit'>Submit</Button>
            </div>
          </form>
        </Modal.Body>

      </Modal>
    </>
  );
}
export default NewRecruiter;