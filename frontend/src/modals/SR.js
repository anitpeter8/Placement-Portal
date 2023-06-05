import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './NewAnnouncement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jobscontext } from '../context/Jobscontext';
import { UserAuth } from '../context/authcontext';

function SR({onclose,SRmodal}) {

  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user, dispatchRoleStudent } = authcontext;
 
  const context=useContext(Jobscontext);
  const {dispatch}=context;
  const [show, setShow] = useState(false);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = (e) => {
   
    e.preventDefault();
    onclose()

    console.log(heading, description);
    const announcement = { heading, description };
    axios.post("http://localhost:9000/api/announcements", announcement, 
    { headers: { 'Authorization': `Bearer ${user.token}` }}).then((response) => {
      console.log(response.data);
      dispatch({type:'CREATEANNOUNCEMENT',payload:response.data});

      console.log('vishayam')
      setHeading('');
      setDescription('');
    }).catch()
  }

  if(SRmodal)
  {
  return (
    <>
     <div className='announcementedit-modal-container' >
        <div className='announcementedit-modal-content' >
          <div className='announcementedit-modal-title'>
            <h3>Registeration Success</h3>
            <hr></hr>
            <p>You have been successfully registered</p>
            <p>Click the below button to redirect to login page</p>
            <Button onClick={()=>onclose()}>Redirect</Button>
          </div>
          <div className='announcementedit-modal-body'>
          

          </div>
        </div>

      </div>

      
    </>
  );
  }
}
export default SR;