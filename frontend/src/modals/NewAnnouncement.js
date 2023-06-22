import { useState,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './NewAnnouncement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jobscontext } from '../context/Jobscontext';
import { UserAuth } from '../context/authcontext';

function NewAnnouncement({onclose,NewAnnouncementmodal}) {

  const authcontext = useContext(UserAuth);
  if (!authcontext) {
    console.log("cannot ascess outside the provider");
  } 
  const { user } = authcontext;
 
  const context=useContext(Jobscontext);
  const {dispatch}=context;
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

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

    
    </>
  );
  }
}
export default NewAnnouncement;