import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
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
  const { user } = authcontext;
 
  const context=useContext(Jobscontext);
  const {dispatch}=context;
 
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

 

  if(SRmodal)
  {
  return (
    <>
     <div className='announcementedit-modal-container' >
        <div className='announcementedit-modal-content' >
          <div className='announcementedit-modal-title'>
            <h3>Registration Success</h3>
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